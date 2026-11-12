import { describe, it, expect } from 'vitest';
import {
  contactFormSchema,
  organisationEnquirySchema,
  schoolEnquirySchema,
  retreatEnquirySchema,
  newsletterSchema,
} from '@/lib/validation/schemas';

describe('Form Validation Schemas', () => {
  it('should validate valid contact form input including community pathway', () => {
    const valid = {
      name: 'Maya Patel',
      email: 'maya@example.com',
      phone: '+91 98765 43210',
      pathway: 'community',
      message: 'I would like to join the waitlist for upcoming community gatherings.',
    };
    const result = contactFormSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it('should reject invalid email format and whitespace-only strings in contact form', () => {
    const invalidEmail = {
      name: 'Maya Patel',
      email: 'not-an-email',
      pathway: 'general',
      message: 'Short note here that is long enough.',
    };
    expect(contactFormSchema.safeParse(invalidEmail).success).toBe(false);

    const whitespaceName = {
      name: '   ',
      email: 'maya@example.com',
      pathway: 'general',
      message: 'Short note here that is long enough.',
    };
    expect(contactFormSchema.safeParse(whitespaceName).success).toBe(false);
  });

  it('should reject unselected empty dropdown values in retreat, org, and school schemas', () => {
    expect(
      retreatEnquirySchema.safeParse({
        name: 'Aarav Mehta',
        email: 'aarav@example.com',
        phone: '+91 98765 12345',
        preferredSeason: '',
        roomPreference: '',
        intention: 'Seeking deep mountain stillness to reset my nervous system.',
      }).success
    ).toBe(false);

    expect(
      schoolEnquirySchema.safeParse({
        name: 'Dr. Kavita Rao',
        institution: 'Delhi Arts Institute',
        role: 'Dean',
        email: 'k.rao@college.edu',
        targetCohort: '',
        cohortSize: '',
        message: 'Exploring semester emotional intelligence workshops.',
      }).success
    ).toBe(false);
  });

  it('should validate valid retreat, organisation, and newsletter inputs', () => {
    const validRetreat = {
      name: 'Aarav Mehta',
      email: 'aarav@example.com',
      phone: '+91 98765 12345',
      preferredSeason: 'autumn-gathering',
      roomPreference: 'single-cottage',
      intention: 'Seeking deep mountain stillness to reset my nervous system.',
    };
    expect(retreatEnquirySchema.safeParse(validRetreat).success).toBe(true);

    const validOrg = {
      name: 'Rohit Verma',
      email: 'rohit@company.com',
      phone: '+91 98765 67890',
      organisation: 'Northstar Labs',
      designation: 'VP People',
      programInterest: 'Emotional Intelligence',
      targetAudience: 'Emerging Leaders',
      groupSize: '10 - 30 People',
      goals: 'Building emotional intelligence and collaborative presence across cross-functional teams.',
    };
    expect(organisationEnquirySchema.safeParse(validOrg).success).toBe(true);

    expect(newsletterSchema.safeParse({ email: 'reader@example.com' }).success).toBe(true);
    expect(newsletterSchema.safeParse({ email: 'not-valid' }).success).toBe(false);
  });
});
