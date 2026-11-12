import { OFFICIAL_EMAIL } from '@/lib/seo/metadata';

export interface DeliveryResult {
  delivered: boolean;
  configured: boolean;
  channels: string[];
  errorMessage?: string;
}

interface EmailMessage {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}

function getContactEmail(): string {
  return process.env.SOULFULI_CONTACT_EMAIL?.trim() || OFFICIAL_EMAIL;
}

export async function sendResendEmail(message: EmailMessage): Promise<{
  configured: boolean;
  sent: boolean;
  error?: string;
}> {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey || apiKey === 're_your_resend_api_key') {
    return { configured: false, sent: false };
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL?.trim() || 'Soulfuli <onboarding@resend.dev>';

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [message.to],
        subject: message.subject,
        text: message.text,
        ...(message.replyTo ? { reply_to: message.replyTo } : {}),
      }),
    });

    if (!response.ok) {
      return {
        configured: true,
        sent: false,
        error: `Email service rejected delivery (${response.status}).`,
      };
    }

    return { configured: true, sent: true };
  } catch {
    return {
      configured: true,
      sent: false,
      error: 'Unable to reach the email delivery service.',
    };
  }
}

async function insertSupabaseRow(
  table: string,
  row: Record<string, unknown>
): Promise<{ configured: boolean; saved: boolean; error?: string }> {
  const supabaseUrl = process.env.SUPABASE_URL?.trim();
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (
    !supabaseUrl ||
    !serviceKey ||
    serviceKey === 'your_supabase_service_role_key' ||
    supabaseUrl === 'https://your-project.supabase.co'
  ) {
    return { configured: false, saved: false };
  }

  try {
    const endpoint = `${supabaseUrl.replace(/\/$/, '')}/rest/v1/${encodeURIComponent(table)}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(row),
    });

    if (!response.ok) {
      return {
        configured: true,
        saved: false,
        error: `Database persistence failed (${response.status}).`,
      };
    }

    return { configured: true, saved: true };
  } catch {
    return {
      configured: true,
      saved: false,
      error: 'Unable to reach the database service.',
    };
  }
}

async function postWebhook(
  payload: Record<string, unknown>
): Promise<{ configured: boolean; sent: boolean; error?: string }> {
  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL?.trim();
  if (!webhookUrl) {
    return { configured: false, sent: false };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      return {
        configured: true,
        sent: false,
        error: `Webhook delivery failed (${response.status}).`,
      };
    }
    return { configured: true, sent: true };
  } catch {
    return {
      configured: true,
      sent: false,
      error: 'Unable to reach the configured webhook.',
    };
  }
}

export async function deliverSubmission({
  subject,
  bodyText,
  replyTo,
  supabaseTable,
  supabaseRow,
  webhookPayload,
}: {
  subject: string;
  bodyText: string;
  replyTo?: string;
  supabaseTable: string;
  supabaseRow: Record<string, unknown>;
  webhookPayload: Record<string, unknown>;
}): Promise<DeliveryResult> {
  const [emailResult, dbResult, webhookResult] = await Promise.all([
    sendResendEmail({
      to: getContactEmail(),
      subject,
      text: bodyText,
      replyTo,
    }),
    insertSupabaseRow(supabaseTable, supabaseRow),
    postWebhook(webhookPayload),
  ]);

  const anyConfigured =
    emailResult.configured || dbResult.configured || webhookResult.configured;

  if (!anyConfigured) {
    return {
      delivered: false,
      configured: false,
      channels: [],
      errorMessage: `Online submission delivery is not configured on this server yet. Please write directly to ${OFFICIAL_EMAIL}.`,
    };
  }

  const channels: string[] = [];
  if (emailResult.sent) channels.push('email');
  if (dbResult.saved) channels.push('database');
  if (webhookResult.sent) channels.push('webhook');

  if (channels.length === 0) {
    return {
      delivered: false,
      configured: true,
      channels: [],
      errorMessage: `We could not deliver your submission right now. Please try again or email ${OFFICIAL_EMAIL} directly.`,
    };
  }

  return {
    delivered: true,
    configured: true,
    channels,
  };
}

