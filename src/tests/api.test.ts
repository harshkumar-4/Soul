import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { POST as enquiryPost } from '@/app/api/enquiries/route';
import { POST as newsletterPost } from '@/app/api/newsletter/route';
import { POST as auditScorePost } from '@/app/api/audit/score/route';
import { auditQuestions } from '@/content/auditQuestions';

function buildFullAnswers(value = 4): Record<string, number> {
  const answers: Record<string, number> = {};
  for (const q of auditQuestions) {
    answers[String(q.id)] = value;
  }
  return answers;
}

describe('API Endpoints Verification', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    delete process.env.RESEND_API_KEY;
    delete process.env.SUPABASE_URL;
    delete process.env.SUPABASE_SERVICE_ROLE_KEY;
    delete process.env.ENQUIRY_WEBHOOK_URL;
    delete process.env.SOULFULI_CONTACT_EMAIL;
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.restoreAllMocks();
  });

  it('rejects invalid contact enquiry payload with 400', async () => {
    const req = new Request('http://localhost/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'contact',
        data: {
          name: 'A',
          email: 'bad-email',
          pathway: 'general',
          message: 'short',
        },
      }),
    });

    const res = await enquiryPost(req);
    expect(res.status).toBe(400);
    const body = await res.json();
    expect(body.ok).toBe(false);
  });

  it('returns 503 instead of fake success when delivery credentials are absent', async () => {
    const req = new Request('http://localhost/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'contact',
        data: {
          name: 'Maya Patel',
          email: 'maya@example.com',
          pathway: 'community',
          message: 'Interested in upcoming community reflections and dialogues.',
        },
      }),
    });

    const res = await enquiryPost(req);
    expect(res.status).toBe(503);
    const body = await res.json();
    expect(body.ok).toBe(false);
    expect(body.code).toBe('DELIVERY_NOT_CONFIGURED');
  });

  it('delivers valid enquiry to soulfuli.global@gmail.com when Resend is configured', async () => {
    process.env.RESEND_API_KEY = 're_test_key_123';
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: 'email_1' }), { status: 200 })
    );
    vi.stubGlobal('fetch', fetchMock);

    const req = new Request('http://localhost/api/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'school',
        data: {
          name: 'Dr. Kavita Rao',
          institution: 'National Liberal Arts College',
          role: 'Dean of Academics',
          email: 'k.rao@college.edu',
          targetCohort: 'undergraduate-students',
          cohortSize: '50-150',
          message: 'Exploring semester emotional intelligence workshops for sophomores.',
        },
      }),
    });

    const res = await enquiryPost(req);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const sentPayload = JSON.parse(String(fetchMock.mock.calls[0][1]?.body));
    expect(sentPayload.to).toEqual(['soulfuli.global@gmail.com']);
    expect(sentPayload.reply_to).toBe('k.rao@college.edu');
  });

  it('validates newsletter email and delivers to soulfuli.global@gmail.com when configured', async () => {
    process.env.RESEND_API_KEY = 're_test_key_123';
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ id: 'email_2' }), { status: 200 })
    );
    vi.stubGlobal('fetch', fetchMock);

    const badReq = new Request('http://localhost/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'invalid' }),
    });
    const badRes = await newsletterPost(badReq);
    expect(badRes.status).toBe(400);

    const goodReq = new Request('http://localhost/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'reader@example.com' }),
    });
    const goodRes = await newsletterPost(goodReq);
    expect(goodRes.status).toBe(200);
    const sentPayload = JSON.parse(String(fetchMock.mock.calls[0][1]?.body));
    expect(sentPayload.to).toEqual(['soulfuli.global@gmail.com']);
  });

  it('rejects incomplete EQ audit answers and calculates server-side result when complete', async () => {
    const incompleteReq = new Request('http://localhost/api/audit/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answers: { '1': 3 } }),
    });
    const incompleteRes = await auditScorePost(incompleteReq);
    expect(incompleteRes.status).toBe(400);

    const completeReq = new Request('http://localhost/api/audit/score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        answers: buildFullAnswers(4),
        email: 'seeker@example.com',
      }),
    });
    const completeRes = await auditScorePost(completeReq);
    expect(completeRes.status).toBe(200);
    const body = await completeRes.json();
    expect(body.ok).toBe(true);
    expect(body.result.overallScore).toBe(75);
    expect(body.emailDelivered).toBe(false);
    expect(body.emailNote).toContain('not configured');
  });
});

