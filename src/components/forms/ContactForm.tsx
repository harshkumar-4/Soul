'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  contactFormSchema,
  contactPathways,
  ContactFormData,
} from '@/lib/validation/schemas';
import { OFFICIAL_EMAIL } from '@/lib/seo/metadata';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

function resolvePathway(param: string | null): ContactFormData['pathway'] {
  if (
    param &&
    (contactPathways as readonly string[]).includes(param)
  ) {
    return param as ContactFormData['pathway'];
  }
  return 'general';
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const urlPathway = resolvePathway(
    searchParams.get('program') || searchParams.get('pathway')
  );

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    pathway: urlPathway,
    message: '',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      pathway: urlPathway,
    }));
  }, [urlPathway]);

  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
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
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmitError(null);
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0] && !fieldErrors[issue.path[0] as keyof ContactFormData]) {
          fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
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
          type: 'contact',
          data: result.data,
          honeypot,
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Partial<Record<keyof ContactFormData, string>>;
      } | null;

      if (!response.ok || !payload?.ok) {
        if (payload?.fieldErrors) {
          setErrors(payload.fieldErrors);
        }
        setSubmitError(
          payload?.error ||
            `We could not send your message right now. Please email ${OFFICIAL_EMAIL} directly.`
        );
        return;
      }

      setIsSubmitted(true);
    } catch {
      setSubmitError(
        `A network error prevented your dispatch from sending. Please check your connection or email ${OFFICIAL_EMAIL} directly.`
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
          Your dispatch has been received.
        </h3>
        <p className="font-sans text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
          Thank you for reaching out with intentional care. A member of our team will respond personally within two business days.
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                pathway: urlPathway,
                message: '',
              });
            }}
          >
            Send another dispatch
          </Button>
        </div>
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
          id="name"
          name="name"
          label="Full Name"
          required
          autoComplete="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Preferred Email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Phone / WhatsApp (Optional)"
          autoComplete="tel"
          placeholder="Include country code"
          value={formData.phone || ''}
          onChange={handleChange}
          error={errors.phone}
        />
        <Select
          id="pathway"
          name="pathway"
          label="I'm Interested In"
          required
          value={formData.pathway}
          onChange={handleChange}
          error={errors.pathway}
          options={[
            { value: 'general', label: 'General Inquiry & Connection' },
            { value: 'eq-audit', label: 'EQ Audit & Results Consultation' },
            { value: 'quiet-bloom', label: 'Quiet Bloom Himalayan Retreat' },
            { value: 'schools', label: 'Schools & Colleges Curriculum' },
            { value: 'organisations', label: 'Workplace & Leadership Engagement' },
            { value: 'community', label: 'Community & Upcoming Experiences' },
          ]}
        />
      </div>

      <Textarea
        id="message"
        name="message"
        label="Message / Intent"
        required
        rows={5}
        placeholder="Please share a few words about what you are seeking or where you are in your journey..."
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
      />

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full sm:w-auto min-w-[200px] rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending Dispatch...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
