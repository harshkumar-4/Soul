'use client';

import React, { useState, useEffect, useRef } from 'react';
import { auditQuestions, dimensionsMap } from '@/content/auditQuestions';
import { AuditResult } from '@/lib/audit/scoring';
import { newsletterSchema } from '@/lib/validation/schemas';
import { OFFICIAL_EMAIL } from '@/lib/seo/metadata';
import AuditProgressBar from '@/components/audit/AuditProgressBar';
import InnerMapRadar from '@/components/audit/InnerMapRadar';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Sparkles,
  AlertCircle,
  Loader2,
  Mail,
} from 'lucide-react';

type AuditStep = 'intro' | 'questions' | 'email_optional' | 'results';

const STORAGE_KEY = 'soulfuli_eq_audit_progress_v1';

const ratingLabels = [
  { value: 1, label: 'Rarely', description: 'Infrequently or almost never' },
  { value: 2, label: 'Occasionally', description: 'When explicitly prompted' },
  { value: 3, label: 'Sometimes', description: 'About half the time' },
  { value: 4, label: 'Often', description: 'In most normal situations' },
  { value: 5, label: 'Consistently', description: 'A deeply habitual practice' },
];

interface StoredAuditState {
  step: AuditStep;
  currentIndex: number;
  answers: Record<number, number>;
  email: string;
  result: AuditResult | null;
  emailNote: string | null;
}

function loadStoredState(): Partial<StoredAuditState> | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredAuditState>;
    const validAnswers: Record<number, number> = {};
    if (parsed.answers && typeof parsed.answers === 'object') {
      for (const [k, v] of Object.entries(parsed.answers)) {
        const id = Number(k);
        if (
          Number.isInteger(id) &&
          id >= 1 &&
          id <= auditQuestions.length &&
          typeof v === 'number' &&
          Number.isInteger(v) &&
          v >= 1 &&
          v <= 5
        ) {
          validAnswers[id] = v;
        }
      }
    }
    const safeIndex =
      typeof parsed.currentIndex === 'number' &&
      Number.isInteger(parsed.currentIndex) &&
      parsed.currentIndex >= 0 &&
      parsed.currentIndex < auditQuestions.length
        ? parsed.currentIndex
        : 0;

    const validSteps: AuditStep[] = [
      'intro',
      'questions',
      'email_optional',
      'results',
    ];
    const safeStep =
      parsed.step && validSteps.includes(parsed.step) ? parsed.step : 'intro';

    return {
      step: safeStep === 'results' && !parsed.result ? 'intro' : safeStep,
      currentIndex: safeIndex,
      answers: validAnswers,
      email: typeof parsed.email === 'string' ? parsed.email : '',
      result: parsed.result ?? null,
      emailNote: typeof parsed.emailNote === 'string' ? parsed.emailNote : null,
    };
  } catch {
    return null;
  }
}

export function AuditContainer() {
  const [step, setStep] = useState<AuditStep>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [emailNote, setEmailNote] = useState<string | null>(null);
  const [hasHydrated, setHasHydrated] = useState(false);

  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearPendingAdvance = () => {
    if (advanceTimerRef.current) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
  };

  useEffect(() => {
    const saved = loadStoredState();
    if (saved) {
      if (saved.answers) setAnswers(saved.answers);
      if (typeof saved.currentIndex === 'number') setCurrentIndex(saved.currentIndex);
      if (saved.email) setEmail(saved.email);
      if (saved.result) setResult(saved.result);
      if (saved.emailNote) setEmailNote(saved.emailNote);
      if (saved.step) setStep(saved.step);
    }
    setHasHydrated(true);

    return () => {
      clearPendingAdvance();
    };
  }, []);

  useEffect(() => {
    if (!hasHydrated) return;
    try {
      const payload: StoredAuditState = {
        step,
        currentIndex,
        answers,
        email,
        result,
        emailNote,
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage quota or private-mode restrictions
    }
  }, [hasHydrated, step, currentIndex, answers, email, result, emailNote]);

  const safeIndex = Math.min(
    Math.max(currentIndex, 0),
    auditQuestions.length - 1
  );
  const currentQuestion = auditQuestions[safeIndex];
  const currentDimension =
    dimensionsMap[currentQuestion?.dimensionId || 'emotional_awareness'];
  const currentAnswer = currentQuestion
    ? answers[currentQuestion.id]
    : undefined;
  const answeredCount = Object.keys(answers).length;

  const advanceFromQuestion = (fromIndex: number, updatedAnswers: Record<number, number>) => {
    if (fromIndex < auditQuestions.length - 1) {
      setCurrentIndex(fromIndex + 1);
      return;
    }

    const firstUnansweredIndex = auditQuestions.findIndex(
      (q) => typeof updatedAnswers[q.id] !== 'number'
    );
    if (firstUnansweredIndex !== -1) {
      setCurrentIndex(firstUnansweredIndex);
      return;
    }

    setStep('email_optional');
  };

  const handleSelectAnswer = (value: number) => {
    if (!currentQuestion) return;

    clearPendingAdvance();

    const targetIndex = safeIndex;
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    };
    setAnswers(nextAnswers);

    advanceTimerRef.current = setTimeout(() => {
      advanceTimerRef.current = null;
      advanceFromQuestion(targetIndex, nextAnswers);
    }, 200);
  };

  const handlePrevious = () => {
    clearPendingAdvance();
    if (safeIndex > 0) {
      setCurrentIndex(safeIndex - 1);
    }
  };

  const handleNext = () => {
    clearPendingAdvance();
    if (!currentAnswer) return;
    advanceFromQuestion(safeIndex, answers);
  };

  const handleFinishAudit = async ({ skipEmail }: { skipEmail: boolean }) => {
    if (isSubmitting) return;

    const firstUnansweredIndex = auditQuestions.findIndex(
      (q) => typeof answers[q.id] !== 'number'
    );
    if (firstUnansweredIndex !== -1) {
      setCurrentIndex(firstUnansweredIndex);
      setStep('questions');
      return;
    }

    setSubmitError(null);
    setEmailError(null);

    const trimmedEmail = skipEmail ? '' : email.trim();
    if (trimmedEmail) {
      const parsedEmail = newsletterSchema.safeParse({ email: trimmedEmail });
      if (!parsedEmail.success) {
        setEmailError(
          parsedEmail.error.issues[0]?.message ||
            'Please enter a valid email address or continue without email.'
        );
        return;
      }
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/audit/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          ...(trimmedEmail ? { email: trimmedEmail } : {}),
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        result?: AuditResult;
        emailDelivered?: boolean;
        emailNote?: string;
      } | null;

      if (!response.ok || !payload?.ok || !payload.result) {
        setSubmitError(
          payload?.error ||
            'We could not calculate your Inner Map right now. Please try again.'
        );
        return;
      }

      setResult(payload.result);
      setEmailNote(payload.emailNote ?? null);
      setStep('results');
    } catch {
      setSubmitError(
        'A network interruption occurred while generating your Inner Map. Your 48 answers are safely preserved—please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    clearPendingAdvance();
    setAnswers({});
    setCurrentIndex(0);
    setEmail('');
    setEmailError(null);
    setSubmitError(null);
    setResult(null);
    setEmailNote(null);
    setStep('intro');
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
  };

  // STEP 1: INTRO STATE
  if (step === 'intro') {
    const canResume = answeredCount > 0 && answeredCount < auditQuestions.length;

    return (
      <div className="max-w-3xl mx-auto space-y-10 py-8">
        <div className="text-center space-y-4">
          <Badge variant="sage" dot>
            48 Questions · 6 Dimensions · 15–20 Minutes
          </Badge>
          <h1 className="font-serif text-headline-lg lg:text-display-lg text-primary tracking-tight font-normal leading-[1.12]">
            A mirror, not a verdict.
          </h1>
          <p className="font-sans text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            This audit is not an evaluation of your intelligence or a clinical test. It is a quiet space to observe how you perceive emotion, navigate friction, and relate to others.
          </p>
        </div>

        {/* 6 Dimensions Overview Grid */}
        <div className="bg-surface-alt border border-border-alt rounded-xl p-6 lg:p-8 space-y-6">
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-secondary block">
            The Six Dimensions Mapped
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {Object.values(dimensionsMap).map((dim, i) => (
              <div key={dim.id} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-sm text-secondary select-none font-medium">
                    0{i + 1}
                  </span>
                  <h3 className="font-sans text-sm font-semibold text-primary">
                    {dim.name}
                  </h3>
                </div>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed pl-5">
                  {dim.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 pt-2">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {canResume ? (
              <>
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto rounded-full px-8"
                  onClick={() => setStep('questions')}
                >
                  Continue Reflection ({answeredCount}/48)
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto rounded-full px-8"
                  onClick={handleReset}
                >
                  Start Fresh
                </Button>
              </>
            ) : (
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto rounded-full px-8"
                onClick={() => setStep('questions')}
              >
                Begin Reflection
              </Button>
            )}
          </div>
          <p className="text-xs text-on-surface-variant/70 text-center">
            Your progress is saved locally in your browser and scored confidentially on our server.
          </p>
        </div>
      </div>
    );
  }

  // STEP 2: QUESTIONS INTERACTIVE STATE
  if (step === 'questions') {
    if (!currentQuestion) {
      return (
        <div className="max-w-xl mx-auto py-16 text-center space-y-6">
          <h1 className="font-serif text-headline-lg text-primary font-normal">
            Reflection sequence reset needed
          </h1>
          <p className="font-sans text-body-md text-on-surface-variant">
            We encountered an unexpected question position. Your saved answers can be cleared to begin calmly again.
          </p>
          <Button variant="primary" size="lg" onClick={handleReset}>
            Return to Beginning
          </Button>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto space-y-8 py-4">
        <h1 className="sr-only">
          The EQ Audit — Question {safeIndex + 1} of {auditQuestions.length}
        </h1>

        {/* Progress Bar Header */}
        <AuditProgressBar
          currentQuestion={safeIndex + 1}
          totalQuestions={auditQuestions.length}
          currentDimension={currentDimension}
        />

        {/* Question Card */}
        <div className="bg-surface-alt border border-border-alt rounded-xl p-6 lg:p-10 space-y-8 shadow-sm">
          <div className="space-y-3">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold block">
              Dimension {Math.floor(safeIndex / 8) + 1} of 6 · {currentDimension.name}
            </span>
            <h2 className="font-serif text-2xl lg:text-[28px] lg:leading-[38px] text-primary font-normal">
              {currentQuestion.text}
            </h2>
          </div>

          {/* 5-Choice Scale Buttons */}
          <div className="space-y-3" role="radiogroup" aria-label={currentQuestion.text}>
            <span className="text-xs font-sans text-on-surface-variant/70 block mb-1">
              Select how accurately this reflects your lived habit:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
              {ratingLabels.map((rate) => {
                const isSelected = currentAnswer === rate.value;
                return (
                  <button
                    key={rate.value}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectAnswer(rate.value)}
                    className={`p-3.5 rounded-lg border text-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      isSelected
                        ? 'bg-primary text-surface-bright border-primary shadow-sm scale-[1.02]'
                        : 'bg-surface-alt text-on-surface border-border-alt hover:bg-border-alt'
                    }`}
                  >
                    <div className="font-serif text-lg font-normal mb-0.5">
                      {rate.value}
                    </div>
                    <div className="font-sans text-xs font-medium">{rate.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reflection Prompt Inset */}
          <div className="bg-surface-alt p-4 rounded-lg border-l-2 border-tertiary text-xs font-sans text-on-surface-variant leading-relaxed">
            <span className="font-semibold text-primary block mb-0.5">
              Gentle Reflection:
            </span>
            {currentQuestion.reflectionPrompt}
          </div>
        </div>

        {/* Navigation Stepper Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={safeIndex === 0}
            className="inline-flex items-center gap-2 text-sm font-sans text-on-surface-variant hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 py-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Question</span>
          </button>

          <span className="text-xs text-on-surface-variant">
            {safeIndex + 1} / {auditQuestions.length}
          </span>

          {currentAnswer ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary hover:text-tertiary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1 py-1"
            >
              <span>
                {safeIndex === auditQuestions.length - 1
                  ? 'Complete Audit'
                  : 'Next'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-xs text-on-surface-variant/60 italic">
              Select an option above
            </span>
          )}
        </div>
      </div>
    );
  }

  // STEP 3: OPTIONAL EMAIL DISPATCH CAPTURE
  if (step === 'email_optional') {
    return (
      <div className="max-w-xl mx-auto space-y-8 py-8 text-center animate-in fade-in-50 duration-300">
        <div className="w-12 h-12 rounded-full bg-primary text-surface-bright mx-auto flex items-center justify-center">
          <Sparkles className="w-6 h-6" />
        </div>
        <div className="space-y-3">
          <h1 className="font-serif text-headline-lg text-primary font-normal">
            Your Inner Map is ready.
          </h1>
          <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
            Would you like a copy of your six-dimension results and reflection prompts delivered to your email? (Completely optional).
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleFinishAudit({ skipEmail: false });
          }}
          noValidate
          className="bg-surface-alt border border-border-alt rounded-xl p-6 space-y-4 max-w-md mx-auto text-left"
        >
          {submitError && (
            <div
              role="alert"
              className="flex items-start gap-2.5 p-3.5 rounded-lg bg-error-container/50 border border-error/40 text-on-error-container text-xs font-sans"
            >
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-error" />
              <div className="space-y-1">
                <p>{submitError}</p>
                <a
                  href={`mailto:${OFFICIAL_EMAIL}`}
                  className="inline-block font-semibold underline"
                >
                  {OFFICIAL_EMAIL}
                </a>
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label
              htmlFor="audit-email"
              className="block font-sans text-label-md uppercase tracking-wider text-on-surface-variant"
            >
              Email Address (Optional)
            </label>
            <input
              id="audit-email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError(null);
              }}
              placeholder="Enter your email address"
              aria-invalid={emailError ? true : undefined}
              aria-describedby={emailError ? 'audit-email-error' : undefined}
              className="w-full bg-surface px-4 py-3 rounded border border-border-alt text-on-surface font-sans text-sm focus:outline-none focus:border-primary"
            />
            {emailError && (
              <p id="audit-email-error" role="alert" className="text-xs text-error">
                {emailError}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            variant="primary"
            className="w-full rounded-lg gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Calculating Inner Map...</span>
              </>
            ) : (
              <span>Reveal My Inner Map</span>
            )}
          </Button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => handleFinishAudit({ skipEmail: true })}
            className="text-xs font-sans text-on-surface-variant hover:text-primary underline underline-offset-4 decoration-outline-variant block mx-auto pt-1 disabled:opacity-50"
          >
            Skip and view results now
          </button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => setStep('questions')}
            className="text-xs font-sans text-on-surface-variant/80 hover:text-primary inline-flex items-center justify-center gap-1.5 w-full pt-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Review Questions</span>
          </button>
        </form>
      </div>
    );
  }

  // STEP 4: RESULTS & INNER MAP STATE
  if (step === 'results' && result) {
    return (
      <div className="max-w-4xl mx-auto space-y-12 py-8 animate-in fade-in-50 duration-500">
        {/* Results Header */}
        <div className="text-center space-y-4">
          <Badge variant="sage" dot>
            Completed Reflection · {new Date(result.completedAt).toLocaleDateString()}
          </Badge>
          <h1 className="font-serif text-headline-lg lg:text-display-lg text-primary tracking-tight font-normal leading-[1.12]">
            Your Inner Map
          </h1>
          <p className="font-sans text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            {result.overallNarrative}
          </p>
          {emailNote && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-alt border border-border-alt text-xs font-sans text-on-surface-variant">
              <Mail className="w-4 h-4 text-secondary shrink-0" />
              <span>{emailNote}</span>
            </div>
          )}
        </div>

        {/* Inner Map Radar & Overall Score Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-alt border border-border-alt rounded-2xl p-6 lg:p-10 shadow-sm">
          <div className="lg:col-span-7 flex justify-center py-2">
            <InnerMapRadar scores={result.dimensionScores} />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 bg-surface rounded-xl space-y-2 border border-border-alt">
              <span className="font-sans text-xs uppercase tracking-wider text-secondary font-semibold block">
                Primary Strength
              </span>
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-serif text-xl text-primary font-normal">
                  {result.strongestDimension.info.name}
                </h2>
                <span className="font-sans text-sm font-bold text-forest shrink-0">
                  {result.strongestDimension.percentage}%
                </span>
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                {result.strongestDimension.info.description}
              </p>
            </div>

            <div className="p-5 bg-surface rounded-xl space-y-2 border border-border-alt">
              <span className="font-sans text-xs uppercase tracking-wider text-tertiary font-semibold block">
                Primary Growth Pathway
              </span>
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-serif text-xl text-primary font-normal">
                  {result.growthDimension.info.name}
                </h2>
                <span className="font-sans text-sm font-bold text-tertiary shrink-0">
                  {result.growthDimension.percentage}%
                </span>
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                {result.growthDimension.info.growthPrompt}
              </p>
            </div>
          </div>
        </div>

        {/* Detailed 6 Dimension Breakdown */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold">
              Dimension Analysis
            </span>
            <h2 className="font-serif text-headline-md text-primary font-normal">
              Breakdown across the six capacities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {result.dimensionScores.map((item) => (
              <div
                key={item.dimensionId}
                className="bg-surface-alt border border-border-alt rounded-xl p-5 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs font-semibold uppercase tracking-wider text-secondary">
                      {item.level}
                    </span>
                    <span className="font-serif text-lg text-primary font-normal">
                      {item.percentage}%
                    </span>
                  </div>
                  <h3 className="font-serif text-headline-sm text-primary font-normal">
                    {item.info.name}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    {item.info.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-border-alt/60">
                  {/* Hairline Bar */}
                  <div className="w-full h-1 bg-border-alt rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                  <p className="font-sans text-[11px] text-outline italic">
                    {item.reflection}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tailored Next Step Recommendation */}
        <div className="bg-primary text-surface-bright rounded-2xl p-8 lg:p-12 space-y-6">
          <div className="flex items-center gap-3">
            <Badge variant="terracotta" dot>
              Recommended Pathway
            </Badge>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h2 className="font-serif text-headline-lg text-surface-bright font-normal leading-tight">
                {result.recommendedPathway.title}
              </h2>
              <p className="font-sans text-body-md text-surface-container leading-relaxed">
                {result.recommendedPathway.description}
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Button
                href={result.recommendedPathway.href}
                variant="terracotta"
                size="lg"
                className="w-full text-center"
              >
                Explore {result.recommendedPathway.title}
              </Button>
              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 text-xs font-sans text-surface-container-high/80 hover:text-surface-bright transition-colors py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-fixed rounded"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake the EQ Audit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default AuditContainer;
