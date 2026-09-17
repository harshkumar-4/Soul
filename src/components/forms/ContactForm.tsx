'use client';

import React, { useState } from 'react';
import { contactFormSchema, ContactFormData } from '@/lib/validation/schemas';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    pathway: 'general',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactFormSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as keyof ContactFormData] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate server submission (can be connected to Next.js Server Action / Supabase / Resend)
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
              setFormData({ name: '', email: '', phone: '', pathway: 'general', message: '' });
            }}
          >
            Send another dispatch
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="name"
          name="name"
          label="Full Name"
          required
          placeholder="Eleanor Vance"
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
          placeholder="eleanor@domain.org"
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
          placeholder="+44 7911 123456"
          value={formData.phone}
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
            { value: 'inner-compass', label: 'Inner Compass Program Cohort' },
            { value: 'quiet-bloom', label: 'Quiet Bloom Himalayan Retreat' },
            { value: 'schools', label: 'Schools & Colleges Curriculum' },
            { value: 'organisations', label: 'Workplace & Leadership Engagement' },
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
