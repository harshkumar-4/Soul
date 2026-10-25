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
    email: '',
    phone: '',
    organisation: '',
    designation: '',
    programInterest: 'Emotional Intelligence',
    targetAudience: 'Emerging Leaders',
    groupSize: '10 - 30 People',
    goals: '',
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
    // Simulates database save to organization_enquiries and Resend notification
    await new Promise((resolve) => setTimeout(resolve, 800));

    // PostHog event tracking
    if (
      typeof window !== 'undefined' &&
      (window as unknown as { posthog?: { capture: (event: string, properties?: Record<string, unknown>) => void } }).posthog
    ) {
      (window as unknown as { posthog: { capture: (event: string, properties?: Record<string, unknown>) => void } }).posthog.capture(
        'organization_enquiry_submitted',
        {
          organisation: formData.organisation,
          programInterest: formData.programInterest,
          targetAudience: formData.targetAudience,
          groupSize: formData.groupSize,
        }
      );
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-surface-alt border border-border-alt rounded-xl p-8 lg:p-12 text-center space-y-4 animate-in fade-in-50 duration-300">
        <div className="w-12 h-12 rounded-full bg-sage/20 text-forest mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-forest" />
        </div>
        <h3 className="font-serif text-headline-md text-primary font-normal">
          Program Inquiry Received
        </h3>
        <p className="font-sans text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
          Thank you for connecting with SoulfulI. Our team will review your objectives and reach out to discuss workshops, leadership programs, or team development engagements.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name & Work Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="org-name"
          name="name"
          label="Your Full Name"
          required
          placeholder="Maya Sharma"
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
          placeholder="maya@company.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      {/* Phone (optional) & Organisation Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="org-phone"
          name="phone"
          type="tel"
          label="Phone (optional)"
          placeholder="+91 98765 43210"
          value={formData.phone || ''}
          onChange={handleChange}
          error={errors.phone}
        />
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
      </div>

      {/* Designation / Department & Program Interest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="org-designation"
          name="designation"
          label="Designation / Department"
          required
          placeholder="Head of People & Culture"
          value={formData.designation}
          onChange={handleChange}
          error={errors.designation}
        />
        <Select
          id="programInterest"
          name="programInterest"
          label="Program Interest"
          required
          value={formData.programInterest}
          onChange={handleChange}
          error={errors.programInterest}
          options={[
            { value: 'Emotional Intelligence', label: 'Emotional Intelligence' },
            { value: 'Leadership Development', label: 'Leadership Development' },
            { value: 'Communication & Team Dynamics', label: 'Communication & Team Dynamics' },
            { value: 'Workplace Wellbeing', label: 'Workplace Wellbeing' },
          ]}
        />
      </div>

      {/* Target Audience & Estimated Group Size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Select
          id="targetAudience"
          name="targetAudience"
          label="Target Audience"
          required
          value={formData.targetAudience}
          onChange={handleChange}
          error={errors.targetAudience}
          options={[
            { value: 'Emerging Leaders', label: 'Emerging Leaders' },
            { value: 'Managers & Team Leads', label: 'Managers & Team Leads' },
            { value: 'Senior Leadership', label: 'Senior Leadership' },
            { value: 'Whole Teams', label: 'Whole Teams' },
          ]}
        />
        <Select
          id="groupSize"
          name="groupSize"
          label="Estimated Group Size"
          required
          value={formData.groupSize}
          onChange={handleChange}
          error={errors.groupSize}
          options={[
            { value: '10 - 30 People', label: '10 - 30 People' },
            { value: '30 - 100 People', label: '30 - 100 People' },
            { value: '100+ People', label: '100+ People' },
          ]}
        />
      </div>

      {/* Goals & Context */}
      <Textarea
        id="org-goals"
        name="goals"
        label="Goals & Context"
        required
        rows={4}
        placeholder="Briefly describe the team dynamics, leadership priorities, or workplace culture goals you would like to address..."
        value={formData.goals}
        onChange={handleChange}
        error={errors.goals}
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

export default OrganisationEnquiryForm;
