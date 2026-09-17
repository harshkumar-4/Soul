import { describe, it, expect } from 'vitest';
import {
  contactFormSchema,
  organisationEnquirySchema,
  schoolEnquirySchema,
  retreatEnquirySchema,
} from '@/lib/validation/schemas';

describe('Form Validation Schemas', () => {
  it('should validate valid contact form input', () => {
    const valid = {
      name: 'Maya Patel',
      email: 'maya@example.com',
      phone: '+91 98765 43210',
      pathway: 'eq-audit',
      message: 'I would like to explore personal reflection pathways.',
    };
    const result = contactFormSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('should reject invalid email format in contact form', () => {
    const invalid = {
      name: 'Maya Patel',
      email: 'not-an-email',
      pathway: 'general',
      message: 'Short note here that is long enough.',
    };
    const result = contactFormSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it('should validate valid retreat enquiry input', () => {
    const validRetreat = {
      name: 'Ananya Sharma',
      email: 'ananya@example.com',
      phone: '+91 98765 12345',
      preferredSeason: 'autumn-gathering',
      roomPreference: 'single-cottage',
      intention: 'Seeking deep mountain stillness to reset my nervous system.',
    };
    const result = retreatEnquirySchema.safeParse(validRetreat);
    expect(result.success).toBe(true);
  });
});
