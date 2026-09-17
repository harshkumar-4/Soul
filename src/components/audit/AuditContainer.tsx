'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { auditQuestions, dimensionsMap, DimensionId } from '@/content/auditQuestions';
import { calculateAuditResult, AuditResult } from '@/lib/audit/scoring';
import AuditProgressBar from '@/components/audit/AuditProgressBar';
import InnerMapRadar from '@/components/audit/InnerMapRadar';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { ArrowLeft, ArrowRight, CheckCircle2, RotateCcw, Compass, Mountain, Sparkles } from 'lucide-react';

type AuditStep = 'intro' | 'questions' | 'email_optional' | 'results';

const ratingLabels = [
  { value: 1, label: 'Rarely', description: 'Infrequently or almost never' },
  { value: 2, label: 'Occasionally', description: 'When explicitly prompted' },
  { value: 3, label: 'Sometimes', description: 'About half the time' },
  { value: 4, label: 'Often', description: 'In most normal situations' },
  { value: 5, label: 'Consistently', description: 'A deeply habitual practice' },
];

export function AuditContainer() {
  const [step, setStep] = useState<AuditStep>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);

  const currentQuestion = auditQuestions[currentIndex];
  const currentDimension = dimensionsMap[currentQuestion?.dimensionId || 'emotional_awareness'];
  const currentAnswer = answers[currentQuestion?.id];

  const handleSelectAnswer = (value: number) => {
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));

    setTimeout(() => {
      if (currentIndex < auditQuestions.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else {
        setStep('email_optional');
      }
    }, 200);
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFinishAudit = () => {
    const computedResult = calculateAuditResult({
      answers,
      email: email.trim() || undefined,
    });
    setResult(computedResult);
    setStep('results');
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentIndex(0);
    setEmail('');
    setResult(null);
    setStep('intro');
  };

  // STEP 1: INTRO STATE
  if (step === 'intro') {
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
        <div className="bg-surface-container-low border border-outline-variant/60 rounded-xl p-6 lg:p-8 space-y-6">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-secondary block">
            The Six Dimensions Mapped
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {Object.values(dimensionsMap).map((dim, i) => (
              <div key={dim.id} className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-sm text-secondary select-none font-medium">
                    0{i + 1}
                  </span>
                  <h4 className="font-sans text-sm font-semibold text-primary">
                    {dim.name}
                  </h4>
                </div>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed pl-5">
                  {dim.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            size="lg"
            variant="primary"
            className="w-full sm:w-auto rounded-full px-8"
            onClick={() => setStep('questions')}
          >
            Begin Reflection
          </Button>
          <p className="text-xs text-on-surface-variant/70 text-center">
            Your responses are processed confidentially on the server.
          </p>
        </div>
      </div>
    );
  }

  // STEP 2: QUESTIONS INTERACTIVE STATE
  if (step === 'questions') {
    return (
      <div className="max-w-2xl mx-auto space-y-8 py-4">
        {/* Progress Bar Header */}
        <AuditProgressBar
          currentQuestion={currentIndex + 1}
          totalQuestions={auditQuestions.length}
          currentDimension={currentDimension}
        />

        {/* Question Card */}
        <div className="bg-surface-container-low border border-outline-variant/60 rounded-xl p-6 lg:p-10 space-y-8 shadow-sm">
          <div className="space-y-3">
            <span className="font-sans text-xs uppercase tracking-widest text-secondary font-semibold block">
              Dimension {Math.floor(currentIndex / 8) + 1} of 6 · {currentDimension.name}
            </span>
            <h2 className="font-serif text-2xl lg:text-[28px] lg:leading-[38px] text-primary font-normal">
              {currentQuestion.text}
            </h2>
          </div>

          {/* 5-Choice Scale Buttons */}
          <div className="space-y-3">
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
                    onClick={() => handleSelectAnswer(rate.value)}
                    className={`p-3.5 rounded-lg border text-center transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${isSelected
                      ? 'bg-primary text-surface-bright border-primary shadow-sm scale-[1.02]'
                      : 'bg-surface-container text-on-surface border-outline-variant/60 hover:bg-surface-container-high'
                      }`}
                  >
                    <div className="font-serif text-lg font-normal mb-0.5">{rate.value}</div>
                    <div className="font-sans text-xs font-medium">{rate.label}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reflection Prompt Inset */}
          <div className="bg-surface-container p-4 rounded-lg border-l-2 border-tertiary text-xs font-sans text-on-surface-variant leading-relaxed">
            <span className="font-semibold text-primary block mb-0.5">Gentle Reflection:</span>
            {currentQuestion.reflectionPrompt}
          </div>
        </div>

        {/* Navigation Stepper Controls */}
        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-2 text-sm font-sans text-on-surface-variant hover:text-primary disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous Question</span>
          </button>

          <span className="text-xs text-on-surface-variant">
            {currentIndex + 1} / {auditQuestions.length}
          </span>

          {currentAnswer ? (
            <button
              type="button"
              onClick={() => {
                if (currentIndex < auditQuestions.length - 1) {
                  setCurrentIndex((prev) => prev + 1);
                } else {
                  setStep('email_optional');
                }
              }}
              className="inline-flex items-center gap-2 text-sm font-sans font-medium text-primary hover:text-tertiary transition-colors"
            >
              <span>{currentIndex === auditQuestions.length - 1 ? 'Complete Audit' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-xs text-on-surface-variant/60 italic">Select an option above</span>
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
          <h2 className="font-serif text-headline-lg text-primary font-normal">
            Your Inner Map is ready.
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
            Would you like a copy of your six-dimension results and reflection prompts delivered to your email? (Completely optional).
          </p>
        </div>

        <div className="bg-surface-container-low border border-outline-variant/60 rounded-xl p-6 space-y-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@quietplace.org"
            className="w-full bg-surface-container px-4 py-3 rounded border border-outline-variant/60 text-on-surface font-sans text-sm focus:outline-none focus:border-primary"
          />
          <Button
            size="lg"
            variant="primary"
            className="w-full rounded-lg"
            onClick={handleFinishAudit}
          >
            Reveal My Inner Map
          </Button>
          <button
            type="button"
            onClick={handleFinishAudit}
            className="text-xs font-sans text-on-surface-variant hover:text-primary underline underline-offset-4 decoration-outline-variant block mx-auto pt-1"
          >
            Skip and view results now
          </button>
        </div>
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
        </div>

        {/* Inner Map Radar & Overall Score Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-low border border-outline-variant/60 rounded-2xl p-6 lg:p-10 shadow-sm">
          <div className="lg:col-span-7 flex justify-center py-4">
            <InnerMapRadar scores={result.dimensionScores} size={360} />
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 bg-surface-container rounded-xl space-y-2 border border-outline-variant/40">
              <span className="font-sans text-xs uppercase tracking-wider text-secondary font-semibold block">
                Primary Strength
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl text-primary font-normal">
                  {result.strongestDimension.info.name}
                </h3>
                <span className="font-sans text-sm font-bold text-forest">
                  {result.strongestDimension.percentage}%
                </span>
              </div>
              <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                {result.strongestDimension.info.description}
              </p>
            </div>

            <div className="p-5 bg-surface-container rounded-xl space-y-2 border border-outline-variant/40">
              <span className="font-sans text-xs uppercase tracking-wider text-tertiary font-semibold block">
                Primary Growth Pathway
              </span>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl text-primary font-normal">
                  {result.growthDimension.info.name}
                </h3>
                <span className="font-sans text-sm font-bold text-tertiary">
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
                className="bg-surface-container-low border border-outline-variant/60 rounded-xl p-5 space-y-4 flex flex-col justify-between"
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
                  <h4 className="font-serif text-headline-sm text-primary font-normal">
                    {item.info.name}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                    {item.info.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-outline-variant/30">
                  {/* Hairline Bar */}
                  <div className="w-full h-1 bg-surface-container rounded-full overflow-hidden">
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
              <h3 className="font-serif text-headline-lg text-surface-bright font-normal leading-tight">
                {result.recommendedPathway.title}
              </h3>
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
                onClick={handleReset}
                className="inline-flex items-center justify-center gap-2 text-xs font-sans text-surface-container-high/70 hover:text-surface-bright transition-colors py-2"
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
