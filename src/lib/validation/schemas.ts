import { z } from 'zod';

const optionalPhoneSchema = z
  .string()
  .trim()
  .optional()
  .refine(
    (val) => !val || /^[\d+\-\s()]{7,20}$/.test(val),
    'Please enter a valid phone number (7–20 digits)'
  );

export const contactPathways = [
  'general',
  'eq-audit',
  'quiet-bloom',
  'schools',
  'organisations',
  'community',
] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Please provide your full name'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: optionalPhoneSchema,
  pathway: z.enum(contactPathways),
  message: z
    .string()
    .trim()
    .min(10, 'Please include a brief message (at least 10 characters)'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const organisationEnquirySchema = z.object({
  name: z.string().trim().min(2, 'Please provide your full name'),
  email: z.string().trim().email('Please enter a valid work email address'),
  phone: optionalPhoneSchema,
  organisation: z.string().trim().min(2, 'Please provide your organisation name'),
  designation: z.string().trim().min(2, 'Please provide your designation / department'),
  programInterest: z.string().trim().min(2, 'Please select a program interest'),
  targetAudience: z.string().trim().min(2, 'Please select a target audience'),
  groupSize: z.string().trim().min(1, 'Please select estimated group size'),
  goals: z
    .string()
    .trim()
    .min(10, 'Please tell us about your goals and context (at least 10 characters)'),
});

export type OrganisationEnquiryData = z.infer<typeof organisationEnquirySchema>;

export const schoolEnquirySchema = z.object({
  name: z.string().trim().min(2, 'Please provide your full name'),
  institution: z.string().trim().min(2, 'Please provide your school or college name'),
  role: z.string().trim().min(2, 'Please provide your designation or department'),
  email: z.string().trim().email('Please enter a valid institutional email address'),
  phone: optionalPhoneSchema,
  targetCohort: z.string().trim().min(2, 'Please select a target audience'),
  cohortSize: z.string().trim().min(1, 'Please select estimated participant count'),
  message: z
    .string()
    .trim()
    .min(10, 'Please describe your institutional goals (at least 10 characters)'),
});

export type SchoolEnquiryData = z.infer<typeof schoolEnquirySchema>;

export const roomPreferenceOptions = [
  'single-cottage',
  'shared-slate-suite',
  'flexible',
] as const;

export const retreatEnquirySchema = z.object({
  name: z.string().trim().min(2, 'Please provide your full name'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please provide a valid contact number for WhatsApp / SMS')
    .refine(
      (val) => /^[\d+\-\s()]{7,20}$/.test(val),
      'Please enter a valid phone number'
    ),
  preferredSeason: z.string().trim().min(2, 'Please select your preferred season or gathering'),
  roomPreference: z
    .string()
    .trim()
    .refine(
      (val): val is (typeof roomPreferenceOptions)[number] =>
        (roomPreferenceOptions as readonly string[]).includes(val),
      'Please select an accommodation preference'
    ),
  intention: z
    .string()
    .trim()
    .min(15, 'Please share your intention or hope for this retreat time (at least 15 characters)'),
});

export type RetreatEnquiryData = z.infer<typeof retreatEnquirySchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;

export const enquiryPayloadSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('contact'),
    data: contactFormSchema,
    honeypot: z.string().max(0).optional(),
  }),
  z.object({
    type: z.literal('organisation'),
    data: organisationEnquirySchema,
    honeypot: z.string().max(0).optional(),
  }),
  z.object({
    type: z.literal('school'),
    data: schoolEnquirySchema,
    honeypot: z.string().max(0).optional(),
  }),
  z.object({
    type: z.literal('retreat'),
    data: retreatEnquirySchema,
    honeypot: z.string().max(0).optional(),
  }),
]);

export type EnquiryPayload = z.infer<typeof enquiryPayloadSchema>;

export const auditScoreSubmissionSchema = z.object({
  answers: z
    .record(z.string(), z.number().int().min(1).max(5))
    .refine(
      (map) => Object.keys(map).length === 48,
      'All 48 reflection questions must be answered before scoring'
    ),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
});
