'use client';

import React, { useState } from 'react';
import { schoolEnquirySchema, SchoolEnquiryData } from '@/lib/validation/schemas';
import { OFFICIAL_EMAIL } from '@/lib/seo/metadata';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

export function SchoolEnquiryForm() {
  const [formData, setFormData] = useState<SchoolEnquiryData>({
    name: '',
    institution: '',
    role: '',
    email: '',
    phone: '',
    targetCohort: '',
    cohortSize: '',
    message: '',
  });

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<
    Partial<Record<keyof SchoolEnquiryData, string>>
  >({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmitError(null);
    if (errors[name as keyof SchoolEnquiryData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmitError(null);
    const result = schoolEnquirySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SchoolEnquiryData, string>> = {};
      result.error.issues.forEach((issue) => {
        if (
          issue.path[0] &&
          !fieldErrors[issue.path[0] as keyof SchoolEnquiryData]
        ) {
          fieldErrors[issue.path[0] as keyof SchoolEnquiryData] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'school',
          data: result.data,
          honeypot,
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Partial<Record<keyof SchoolEnquiryData, string>>;
      } | null;

      if (!response.ok || !payload?.ok) {
        if (payload?.fieldErrors) {
          setErrors(payload.fieldErrors);
        }
        setSubmitError(
          payload?.error ||
            `We could not submit your institutional enquiry right now. Please email ${OFFICIAL_EMAIL} directly.`
        );
        return;
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        `A network error prevented submission. Please try again or email ${OFFICIAL_EMAIL} directly.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        role="status"
        className="bg-surface-alt border border-border-alt rounded-xl p-8 lg:p-12 text-center space-y-4 animate-in fade-in-50 duration-300"
      >
        <div className="w-12 h-12 rounded-full bg-sage/20 text-forest mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-forest" />
        </div>
        <h3 className="font-serif text-headline-md text-primary font-normal">
          Institutional Inquiry Received
        </h3>
        <p className="font-sans text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
          Thank you. Our educational programs lead will connect with you to discuss curriculum alignment and workshop logistics.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      {submitError && (
        <div
          role="alert"
          className="flex items-start gap-3 p-4 rounded-lg bg-error-container/50 border border-error/40 text-on-error-container text-sm font-sans"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-error" />
          <div className="space-y-1">
            <p>{submitError}</p>
            <a
              href={`mailto:${OFFICIAL_EMAIL}`}
              className="inline-block font-semibold underline underline-offset-2 hover:opacity-80"
            >
              Email {OFFICIAL_EMAIL}
            </a>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="school-name"
          name="name"
          label="Your Full Name"
          required
          autoComplete="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          id="school-email"
          name="email"
          type="email"
          label="Institutional Email"
          required
          autoComplete="email"
          placeholder="you@institution.edu"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="institution"
          name="institution"
          label="School / University / College Name"
          required
          autoComplete="organization"
          placeholder="Your school or college name"
          value={formData.institution}
          onChange={handleChange}
          error={errors.institution}
        />
        <Input
          id="school-role"
          name="role"
          label="Designation / Department"
          required
          autoComplete="organization-title"
          placeholder="Your designation or department"
          value={formData.role}
          onChange={handleChange}
          error={errors.role}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Select
          id="targetCohort"
          name="targetCohort"
          label="Target Audience"
          required
          placeholder="Select target audience"
          value={formData.targetCohort}
          onChange={handleChange}
          error={errors.targetCohort}
          options={[
            { value: 'undergraduate-students', label: 'Undergraduate Students' },
            { value: 'high-school-seniors', label: 'High School Seniors & Youth' },
            { value: 'faculty-educators', label: 'Faculty & Educator Wellbeing' },
            { value: 'institutional-leadership', label: 'Academic Leadership Circle' },
          ]}
        />
        <Select
          id="school-cohortSize"
          name="cohortSize"
          label="Estimated Group Size"
          required
          placeholder="Select estimated cohort size"
          value={formData.cohortSize}
          onChange={handleChange}
          error={errors.cohortSize}
          options={[
            { value: '20-50', label: '20 - 50 Students (Intensive Workshop)' },
            { value: '50-150', label: '50 - 150 Students (Batch Curriculum)' },
            { value: '150+', label: '150+ Campus-Wide Immersion' },
          ]}
        />
      </div>

      <Textarea
        id="school-message"
        name="message"
        label="Goals & Context"
        required
        rows={4}
        placeholder="What emotional or self-awareness needs are you looking to support in your institution?"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto min-w-[220px] rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Discuss a Program'}
        </Button>
      </div>
    </form>
  );
}

export default SchoolEnquiryForm;
