import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Please provide your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  pathway: z.enum(['general', 'eq-audit', 'inner-compass', 'quiet-bloom', 'schools', 'organisations']),
  message: z.string().min(10, 'Please include a brief message (at least 10 characters)'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const organisationEnquirySchema = z.object({
  name: z.string().min(2, 'Please provide your full name'),
  organisation: z.string().min(2, 'Please provide your organisation name'),
  role: z.string().min(2, 'Please provide your role or title'),
  email: z.string().email('Please enter a valid work email address'),
  phone: z.string().optional(),
  programInterest: z.string().min(2, 'Please specify your program interest'),
  audienceSize: z.string().min(1, 'Please specify estimated group size'),
  message: z.string().min(10, 'Please tell us about your context and objectives'),
});

export type OrganisationEnquiryData = z.infer<typeof organisationEnquirySchema>;

export const schoolEnquirySchema = z.object({
  name: z.string().min(2, 'Please provide your full name'),
  institution: z.string().min(2, 'Please provide your school or college name'),
  role: z.string().min(2, 'Please provide your designation or department'),
  email: z.string().email('Please enter a valid institutional email address'),
  phone: z.string().optional(),
  targetCohort: z.string().min(2, 'Please specify students, faculty, or leadership'),
  cohortSize: z.string().min(1, 'Please specify estimated participant count'),
  message: z.string().min(10, 'Please describe your institutional goals'),
});

export type SchoolEnquiryData = z.infer<typeof schoolEnquirySchema>;

export const retreatEnquirySchema = z.object({
  name: z.string().min(2, 'Please provide your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(5, 'Please provide a contact number for WhatsApp / SMS'),
  preferredSeason: z.string().min(2, 'Please select your preferred season or month'),
  roomPreference: z.enum(['single-cottage', 'shared-slate-suite', 'flexible']),
  intention: z.string().min(15, 'Please share your intention or hope for this retreat time'),
});

export type RetreatEnquiryData = z.infer<typeof retreatEnquirySchema>;

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

export type NewsletterData = z.infer<typeof newsletterSchema>;
