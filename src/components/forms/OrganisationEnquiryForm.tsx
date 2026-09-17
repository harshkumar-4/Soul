'use client';

import React, { useState } from 'react';
import { organisationEnquirySchema, OrganisationEnquiryData } from '@/lib/validation/schemas';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export function OrganisationEnquiryForm() {
  const [formData, setFormData] = useState<OrganisationEnquiryData>({
    name: '',
    organisation: '',
    role: '',
    email: '',
    phone: '',
    programInterest: 'executive-presence',
    audienceSize: '10-30',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrganisationEnquiryData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof OrganisationEnquiryData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = organisationEnquirySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof OrganisationEnquiryData, string>> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof OrganisationEnquiryData] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-surface-container-low border border-outline-variant/60 rounded-xl p-8 lg:p-12 text-center space-y-4 animate-in fade-in-50 duration-300">
        <div className="w-12 h-12 rounded-full bg-sage/20 text-forest mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-forest" />
        </div>
        <h3 className="font-serif text-headline-md text-primary font-normal">
          Consultation Request Received
        </h3>
        <p className="font-sans text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
          Thank you for considering SoulfulI for your organization. Our partnerships lead will review your objectives and arrange a discovery conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="org-name"
          name="name"
          label="Your Full Name"
          required
          placeholder="Marcus Reed"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          id="org-email"
          name="email"
          type="email"
          label="Work Email"
          required
          placeholder="marcus@company.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="organisation"
          name="organisation"
          label="Organisation Name"
          required
          placeholder="Acme Studio"
          value={formData.organisation}
          onChange={handleChange}
          error={errors.organisation}
        />
        <Input
          id="role"
          name="role"
          label="Your Role / Title"
          required
          placeholder="Head of People & Culture"
          value={formData.role}
          onChange={handleChange}
          error={errors.role}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Select
          id="programInterest"
          name="programInterest"
          label="Primary Area of Focus"
          required
          value={formData.programInterest}
          onChange={handleChange}
          error={errors.programInterest}
          options={[
            { value: 'executive-presence', label: 'Executive Stillness & Non-Reactive Leadership' },
            { value: 'team-eq', label: 'Team Emotional Intelligence & Dialogue' },
            { value: 'culture-reset', label: 'Organizational Burnout & Culture Reset' },
            { value: 'bespoke', label: 'Bespoke Executive Retreat / Intensive' },
          ]}
        />
        <Select
          id="audienceSize"
          name="audienceSize"
          label="Estimated Cohort Size"
          required
          value={formData.audienceSize}
          onChange={handleChange}
          error={errors.audienceSize}
          options={[
            { value: '1-10', label: '1 - 10 Leaders (Intimate Leadership Circle)' },
            { value: '10-30', label: '10 - 30 Participants (Department Cohort)' },
            { value: '30-100', label: '30 - 100 Members (All-Hands Program)' },
            { value: '100+', label: '100+ Enterprise Scale' },
          ]}
        />
      </div>

      <Textarea
        id="org-message"
        name="message"
        label="Context & Objectives"
        required
        rows={4}
        placeholder="Briefly describe the cultural dynamic or leadership challenge you are addressing..."
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
          {isSubmitting ? 'Submitting...' : 'Request Consultation'}
        </Button>
      </div>
    </form>
  );
}

export default OrganisationEnquiryForm;
