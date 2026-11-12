import { NextResponse } from 'next/server';
import { newsletterSchema } from '@/lib/validation/schemas';
import { deliverSubmission } from '@/lib/server/delivery';
import { OFFICIAL_EMAIL } from '@/lib/seo/metadata';

export async function POST(request: Request) {
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request payload.' },
      { status: 400 }
    );
  }

  const parsed = newsletterSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: parsed.error.issues[0]?.message || 'Please enter a valid email address.',
      },
      { status: 400 }
    );
  }

  const { email } = parsed.data;
  const submittedAt = new Date().toISOString();

  const delivery = await deliverSubmission({
    subject: `[Soulfuli] New Quiet Dispatch Subscriber: ${email}`,
    bodyText: [
      'New Quiet Dispatch newsletter subscription on Soulfuli.',
      `Subscriber Email: ${email}`,
      `Official Inbox: ${OFFICIAL_EMAIL}`,
      `Subscribed At: ${submittedAt}`,
    ].join('\n'),
    replyTo: email,
    supabaseTable: 'newsletter_subscribers',
    supabaseRow: {
      email,
      subscribed_at: submittedAt,
    },
    webhookPayload: {
      event: 'newsletter.subscribed',
      submittedAt,
      recipient: OFFICIAL_EMAIL,
      email,
    },
  });

  if (!delivery.delivered) {
    return NextResponse.json(
      {
        ok: false,
        code: delivery.configured ? 'DELIVERY_FAILED' : 'DELIVERY_NOT_CONFIGURED',
        error: delivery.errorMessage,
      },
      { status: delivery.configured ? 502 : 503 }
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: 'You are subscribed to our quiet dispatches.',
    },
    { status: 200 }
  );
}

