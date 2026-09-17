'use client';

import React, { useState } from 'react';
import { retreatEnquirySchema, RetreatEnquiryData } from '@/lib/validation/schemas';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export function RetreatEnquiryForm() {
  const [formData, setFormData] = useState<RetreatEnquiryData>({
    name: '',
    email: '',
    phone: '',
    preferredSeason: 'autumn-gathering',
    roomPreference: 'single-cottage',
    intention: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RetreatEnquiryData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof RetreatEnquiryData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = retreatEnquirySchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof RetreatEnquiryData, string>> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof RetreatEnquiryData] = issue.message;
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
          Retreat Application Received
        </h3>
        <p className="font-sans text-body-md text-on-surface-variant max-w-md mx-auto leading-relaxed">
          Thank you for sharing your intention with us. Due to intimate cohort sizing (12 participants), our facilitator team will reach out personally within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="retreat-name"
          name="name"
          label="Full Name"
          required
          placeholder="Ananya Sharma"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          id="retreat-email"
          name="email"
          type="email"
          label="Email Address"
          required
          placeholder="ananya@domain.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="retreat-phone"
          name="phone"
          type="tel"
          label="WhatsApp / Phone Number"
          required
          placeholder="+91 98765 43210"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        <Select
          id="preferredSeason"
          name="preferredSeason"
          label="Target Gathering / Season"
          required
          value={formData.preferredSeason}
          onChange={handleChange}
          error={errors.preferredSeason}
          options={[
            { value: 'autumn-gathering', label: 'Autumn Solitude (October · Dharamshala)' },
            { value: 'spring-gathering', label: 'Spring Awakening (March · Dharamshala)' },
            { value: 'summer-monsoon', label: 'Monsoon Stillness (July · Dharamshala)' },
            { value: 'future-waitlist', label: 'General Waitlist for Upcoming Dates' },
          ]}
        />
      </div>

      <Select
        id="roomPreference"
        name="roomPreference"
        label="Accommodation Preference"
        required
        value={formData.roomPreference}
        onChange={handleChange}
        error={errors.roomPreference}
        options={[
          { value: 'single-cottage', label: 'Private Stone Cottage (Single Occupancy)' },
          { value: 'shared-slate-suite', label: 'Shared Suite with Fellow Seeker (Twin Beds)' },
          { value: 'flexible', label: 'Flexible / Either is Welcome' },
        ]}
      />

      <Textarea
        id="retreat-intention"
        name="intention"
        label="Your Intention / Seeking"
        required
        rows={4}
        placeholder="What is calling you to the mountains at this point in your life? What do you hope to pause or understand?"
        value={formData.intention}
        onChange={handleChange}
        error={errors.intention}
      />

      <div className="pt-2">
        <Button
          type="submit"
          variant="terracotta"
          size="lg"
          className="w-full sm:w-auto min-w-[220px] rounded-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Apply for Quiet Bloom'}
        </Button>
      </div>
    </form>
  );
}

export default RetreatEnquiryForm;
