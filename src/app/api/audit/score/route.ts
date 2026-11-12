import { NextResponse } from 'next/server';
import { auditQuestions } from '@/content/auditQuestions';
import { calculateAuditResult } from '@/lib/audit/scoring';
import { auditScoreSubmissionSchema } from '@/lib/validation/schemas';
import { sendResendEmail } from '@/lib/server/delivery';
import { SITE_URL, OFFICIAL_EMAIL } from '@/lib/seo/metadata';

export async function POST(request: Request) {
  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid audit submission payload.' },
      { status: 400 }
    );
  }

  const parsed = auditScoreSubmissionSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error:
          parsed.error.issues[0]?.message ||
          'Please ensure all 48 questions are answered before scoring.',
      },
      { status: 400 }
    );
  }

  // Verify every single question ID (1..48) has a valid score (1..5)
  const normalizedAnswers: Record<number, number> = {};
  for (const question of auditQuestions) {
    const val = parsed.data.answers[String(question.id)];
    if (typeof val !== 'number' || !Number.isInteger(val) || val < 1 || val > 5) {
      return NextResponse.json(
        {
          ok: false,
          error: `Question ${question.id} requires a rating between 1 and 5.`,
        },
        { status: 400 }
      );
    }
    normalizedAnswers[question.id] = val;
  }

  const email = parsed.data.email?.trim() || undefined;
  const result = calculateAuditResult({ answers: normalizedAnswers, email });

  let emailDelivered = false;
  let emailNote: string | undefined;

  if (email) {
    const breakdownLines = result.dimensionScores
      .map(
        (d) =>
          `- ${d.info.name}: ${d.percentage}% (${d.level}) — Focus: ${d.reflection}`
      )
      .join('\n');

    const emailRes = await sendResendEmail({
      to: email,
      subject: 'Your Soulfuli EQ Audit Inner Map',
      replyTo: OFFICIAL_EMAIL,
      text: [
        'Your Soulfuli EQ Audit — Inner Map',
        `Completed: ${result.completedAt}`,
        '',
        result.overallNarrative,
        '',
        `Primary Strength: ${result.strongestDimension.info.name} (${result.strongestDimension.percentage}%)`,
        `Primary Growth Pathway: ${result.growthDimension.info.name} (${result.growthDimension.percentage}%)`,
        '',
        'Dimension Breakdown:',
        breakdownLines,
        '',
        `Recommended Next Step: ${result.recommendedPathway.title}`,
        `${SITE_URL}${result.recommendedPathway.href}`,
        '',
        `Questions or reflections? Write to ${OFFICIAL_EMAIL}.`,
      ].join('\n'),
    });

    emailDelivered = emailRes.sent;
    if (!emailRes.configured) {
      emailNote = `Your Inner Map is displayed below. Automatic email delivery is not configured yet—you can save or print this view, or contact ${OFFICIAL_EMAIL}.`;
    } else if (!emailRes.sent) {
      emailNote =
        'Your Inner Map is ready below, though we could not send the email copy right now.';
    } else {
      emailNote = `A copy of your Inner Map has been sent to ${email}.`;
    }
  }

  return NextResponse.json(
    {
      ok: true,
      result,
      emailDelivered,
      ...(emailNote ? { emailNote } : {}),
    },
    { status: 200 }
  );
}

