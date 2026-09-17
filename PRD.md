# SoulfulI — Product Requirements Document

Version: 1.0
Status: MVP / Production Foundation
Product: SoulfulI
Document: PRD.md

---

# 1. PROJECT OVERVIEW

SoulfulI is a modern human-development platform designed to help people understand themselves more deeply and live with greater emotional awareness, intention, meaning, and connection.

SoulfulI is NOT:

- A generic wellness website
- A meditation app
- A yoga website
- A corporate HR consultancy
- A generic self-help website
- A religious/spiritual website
- A generic AI-generated self-help platform
- A social-media-style community platform

SoulfulI sits at the intersection of:

Mind + Heart + Spirit

The core philosophy is:

> Understand yourself → feel your emotions → understand others → find meaning → live differently.

The website must feel like an experience rather than a traditional company brochure.

The user should feel:

> "This is a quiet place where I can understand myself."

---

# 2. PRODUCT VISION

SoulfulI helps people move from external noise to internal clarity.

The website experience should follow this emotional journey:

NOISE
↓
PAUSE
↓
AWARENESS
↓
UNDERSTANDING
↓
DIRECTION
↓
CONNECTION
↓
BLOOM

The website itself should demonstrate this philosophy.

It should not simply explain SoulfulI.

The interaction, typography, imagery, pacing, transitions, content hierarchy, and user journey should make the user experience the philosophy.

---

# 3. CORE BRAND POSITIONING

Primary positioning:

> SoulfulI helps you understand yourself deeply enough to live differently.

Supporting positioning:

> The space between knowing and becoming.

Core promise:

> Understand yourself. Connect more deeply. Live with intention.

Brand personality:

- Quiet
- Human
- Intelligent
- Grounded
- Hopeful
- Premium
- Personal
- Thoughtful

Avoid:

- Loud marketing
- Excessive gradients
- SaaS-style dashboards everywhere
- Gamification
- Generic motivational quotes
- Fake spirituality
- Stock meditation imagery
- Overly corporate layouts
- Excessive animation
- AI-looking UI
- Excessive cards
- Random interactive features

---

# 4. PRIMARY AUDIENCE

## Primary Audience

Urban young professionals and emerging leaders who:

- Are successful externally
- Want deeper emotional clarity
- Want better relationships
- Want greater self-awareness
- Feel overwhelmed or disconnected
- Want meaningful personal growth
- Are interested in emotional intelligence
- Are interested in mindfulness
- Are interested in spirituality without religious framing

## Secondary Audiences

### Students

Students, colleges and educational institutions looking for:

- Emotional intelligence programs
- Human development workshops
- Communication programs
- Self-awareness programs

### Organisations

Companies looking for:

- Leadership development
- Emotional intelligence
- Communication
- Team development
- Human-centred leadership
- Workplace wellbeing

### Retreat Seekers

People interested in:

- Reflection
- Mindfulness
- Personal growth
- Nature
- Meaning
- Deep rest
- Himalayan experiences

---

# 5. BUSINESS MODEL

SoulfulI should eventually have four major revenue/ecosystem layers.

## B2C

EQ Audit
↓
Inner Compass
↓
Community
↓
Retreats

## B2B

Workshops
↓
Programs
↓
Repeat organisational engagements

## Premium Experience

Quiet Bloom Retreat

## Ecosystem

Community

Business model principle:

> B2B funds the business.
> B2C builds the brand.
> Retreats build the premium experience.
> Community builds the ecosystem.

---

# 6. CORE WEBSITE NAVIGATION

Primary navigation:

1. Home
2. Our Story
3. What We Offer
4. What Makes Us Different
5. Community

Primary CTA:

> Take the EQ Audit

Secondary CTAs:

- Explore Inner Compass
- Explore Quiet Bloom
- Work With Us
- Join the Community

Do NOT add navigation items unless explicitly required.

Do NOT create random pages.

---

# 7. WEBSITE INFORMATION ARCHITECTURE

The initial website should contain:

/ → Home

/our-story → Our Story

/what-we-offer → What We Offer

/eq-audit → EQ Audit

/inner-compass → Inner Compass

/quiet-bloom → Quiet Bloom

/schools-colleges → Schools & Colleges

/organisations → Organisations

/what-makes-us-different → What Makes Us Different

/community → Community

/contact → Contact

Future:

/insights
/insights/[slug]

Do not build future pages unless explicitly requested.

---

# 8. TECH STACK

The following stack is the default architecture.

DO NOT change the stack without a clear technical reason.

## Frontend

Next.js
TypeScript
React

Use the latest stable versions available when development begins.

Architecture:

Next.js App Router.

Use Server Components by default.

Use Client Components only where interactivity requires them.

---

# 9. STYLING

Use:

Tailwind CSS

Use a centralized design token system.

Do NOT hard-code random colors throughout components.

Create semantic tokens for:

- Background
- Surface
- Text
- Muted text
- Primary
- Secondary
- Border
- Accent
- Error
- Success

---

# 10. UI COMPONENT SYSTEM

Use:

shadcn/ui

But do NOT make SoulfulI look like a default shadcn application.

shadcn is only the functional component foundation.

The visual language must be custom SoulfulI.

Required reusable components include:

- Header
- Navigation
- Mobile Navigation
- Button
- Link
- Input
- Textarea
- Select
- Modal
- Accordion
- Section Heading
- Editorial Text
- Image/Text Block
- Quote Block
- Journey Card
- Journey Timeline
- Journey Step
- Offering Card
- Program Card
- Audit Question
- Audit Progress
- Results Chart
- Inner Map
- Contact Form
- Enquiry Form
- Newsletter Form
- Footer
- Breadcrumbs where useful

Do not create a new component for every small visual element.

Prioritize reusable components.

---

# 11. CMS

Use:

Sanity CMS

The CMS should control content that changes frequently.

Recommended content types:

- Pages
- Programs
- Retreats
- Articles
- Stories
- Events
- Testimonials
- FAQs
- People
- Facilitators

Do NOT build a custom CMS.

Do NOT store editable marketing content directly inside React components.

---

# 12. DATABASE

Use:

Supabase PostgreSQL

Supabase should manage application data.

Potential tables:

users
audit_sessions
audit_answers
audit_results
program_enquiries
retreat_enquiries
organization_enquiries
school_enquiries
community_members
newsletter_subscribers
events
event_registrations

Only create tables when they are actually needed.

Do not create unnecessary database structures for hypothetical features.

---

# 13. AUTHENTICATION

Authentication is NOT required for the basic marketing website.

For MVP:

- Allow visitors to browse freely.
- Do not force account creation.
- EQ Audit may optionally collect email.
- Account functionality can be introduced when saved results and user progress become necessary.

Future authentication:

Supabase Auth.

Do not build a complex account system prematurely.

---

# 14. HOSTING

Recommended:

Vercel

Use:

GitHub
↓
Vercel
↓
Production

Environments:

Development
Staging
Production

Every feature should be tested before production deployment.

---

# 15. CDN / SECURITY

Use:

Cloudflare where appropriate.

Requirements:

- HTTPS
- Secure headers
- Rate limiting
- Server-side validation
- Secure cookies
- Database Row Level Security where applicable
- Environment variables for secrets
- No private keys in frontend code

Never expose:

- Database secrets
- API secrets
- Email provider secrets
- CMS private credentials
- Authentication secrets

---

# 16. EMAIL

Use:

Resend

Use for:

- Contact notifications
- Program enquiry notifications
- Retreat enquiry notifications
- Organisation enquiry notifications
- School enquiry notifications
- Newsletter confirmation where required
- EQ Audit result email
- Future transactional email

Do not build an email system from scratch.

---

# 17. ANALYTICS

Use:

PostHog

Track meaningful product events.

Required events:

page_view
hero_cta_clicked
eq_audit_started
eq_audit_question_answered
eq_audit_completed
eq_results_viewed
inner_compass_clicked
quiet_bloom_clicked
retreat_enquiry_started
retreat_enquiry_submitted
organization_enquiry_submitted
school_enquiry_submitted
community_signup
newsletter_signup

Do NOT track sensitive personal information unnecessarily.

Analytics must respect privacy requirements.

---

# 18. ERROR MONITORING

Use:

Sentry

Track:

- JavaScript errors
- Server errors
- Failed API requests
- Important application failures

Do not expose technical error details to users.

---

# 19. TESTING

Use:

Vitest
Playwright

## Unit tests

Required for:

- EQ scoring
- Utility functions
- Validation
- Data transformation

## Integration tests

Required for:

- Forms
- Database operations
- Audit submission
- Email triggers

## E2E tests

Critical flows:

1. Homepage loads
2. Navigation works
3. Mobile navigation works
4. EQ Audit can start
5. EQ Audit can complete
6. Results display
7. Contact form submits
8. Organisation enquiry submits
9. School enquiry submits
10. Retreat enquiry submits

---

# 20. PERFORMANCE REQUIREMENTS

Performance is a core product requirement.

Target:

Lighthouse Performance: 90+

Prioritize:

- LCP
- CLS
- INP
- TTFB

Requirements:

- Optimize images
- Use Next.js Image
- Use responsive image sizes
- Use modern image formats
- Lazy load below-the-fold images
- Reserve image dimensions
- Avoid layout shifts
- Minimize JavaScript
- Use Server Components where possible
- Avoid unnecessary client-side state
- Avoid huge video backgrounds
- Avoid excessive animation libraries

---

# 21. IMAGE STRATEGY

Use real, emotionally authentic photography.

Preferred imagery:

- Real human conversations
- Thoughtful portraits
- Writing
- Walking
- Nature
- Indian landscapes
- Himalayan landscapes
- Quiet rooms
- Human connection
- Reflection
- Authentic moments

Avoid:

- Fake meditation stock images
- Lotus clichés
- Yoga poses as primary branding
- Generic corporate handshake images
- Fake smiling teams
- Generic AI-generated people
- Overly spiritual imagery

Use Next.js Image.

All meaningful images require appropriate alt text.

Decorative images should use empty alt attributes.

---

# 22. VIDEO

Video should be used carefully.

Do NOT automatically add video to every page.

If video is used:

- Use compressed formats
- Use poster images
- Lazy load where possible
- Avoid autoplay on mobile
- Respect reduced-motion preferences
- Avoid large hero video unless strategically necessary

---

# 23. MOTION DESIGN

Motion should communicate calmness.

Preferred:

- Slow fade
- Soft reveal
- Gentle image movement
- Subtle parallax
- Section transitions
- Text reveal
- Small hover states

Avoid:

- Fast animations
- Excessive bouncing
- Gaming effects
- Excessive parallax
- Constant movement
- Animation for decoration only

Respect:

prefers-reduced-motion

Animation should never hurt usability or performance.

---

# 24. RESPONSIVE DESIGN

Mobile is NOT a secondary version.

Design for:

Mobile
Tablet
Desktop
Large Desktop

Minimum considerations:

- Touch-friendly buttons
- Comfortable text sizes
- No horizontal scrolling
- Responsive images
- Responsive typography
- Simplified navigation
- Accessible forms
- Appropriate spacing
- Reduced visual complexity on mobile

The mobile experience should preserve the emotional feeling of the desktop experience.

---

# 25. ACCESSIBILITY

Follow WCAG 2.2 AA principles.

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper heading hierarchy
- Accessible forms
- Labels for inputs
- Accessible buttons
- Sufficient contrast
- Screen reader support
- Alt text
- Reduced motion support
- No interaction that depends only on hover

Use ARIA only when necessary.

---

# 26. BRAND DESIGN SYSTEM

## Colors

Primary palette:

Warm Ivory
Soft Sand
Muted Sage
Deep Forest
Terracotta
Charcoal

Suggested conceptual values:

Warm Ivory:
#F7F3EA

Soft Sand:
#E8DDCC

Muted Sage:
#A9B5A0

Deep Forest:
#24382D

Terracotta:
#B86F52

Charcoal:
#262626

These values may be refined during visual implementation but must remain within the same emotional direction.

---

# 27. TYPOGRAPHY

Use two primary type families.

## Display / Headings

Elegant serif.

Purpose:

- Emotional headlines
- Philosophy
- Storytelling
- Editorial moments

## Body / UI

Clean modern sans-serif.

Purpose:

- Body copy
- Navigation
- Buttons
- Forms
- Labels
- Interface

The typography should communicate:

Wisdom + Modernity

Avoid overly decorative fonts.

---

# 28. SPACING

Use a consistent spacing scale.

Prefer generous whitespace.

SoulfulI should not feel crowded.

Use whitespace as part of the experience.

Do not fill empty space simply because it exists.

---

# 29. HOME PAGE

Purpose:

Introduce the SoulfulI philosophy and move the user toward self-discovery.

The homepage should NOT feel like a normal SaaS landing page.

Suggested structure:

## Hero

Message around:

> Understand yourself. Connect more deeply. Live with intention.

Primary CTA:

Take the EQ Audit

Secondary CTA:

Explore Our Journey

Visual feeling:

Quiet
Editorial
Human
Premium

---

## Section: The Problem

Explain:

Modern self-improvement has become a checklist.

Meditate.
Journal.
Read.
Attend a workshop.

But completing activities does not necessarily create transformation.

---

## Section: SoulfulI Philosophy

Show:

Mind + Heart + Spirit

Then:

Emotional Intelligence
Mindfulness
Spirituality

Explain how they form one journey.

---

## Section: Journey

NOISE
→ PAUSE
→ AWARENESS
→ UNDERSTANDING
→ DIRECTION
→ CONNECTION
→ BLOOM

This should be a major visual storytelling section.

---

## Section: What We Offer

Show:

EQ Audit
Inner Compass
Schools & Colleges
Organisations
Quiet Bloom

---

## Section: Difference

Explain that SoulfulI does not separate mind, heart and spirit.

---

## Section: Closing CTA

Suggested:

> What might change first?

CTA:

Begin Your Journey

---

# 30. OUR STORY PAGE

Purpose:

Explain why SoulfulI exists.

Tone:

Personal
Human
Reflective
Intelligent

Avoid corporate history timelines.

Tell a human story.

Include:

- Why SoulfulI exists
- What problem inspired it
- Philosophy
- Mind + Heart + Spirit
- What SoulfulI believes
- What transformation means

---

# 31. WHAT WE OFFER

Display the ecosystem.

Primary offerings:

1. EQ Audit
2. Inner Compass
3. Schools & Colleges
4. Organisations
5. Quiet Bloom

Each offering should explain:

What it is
Who it is for
Why it matters
What the experience looks like
CTA

Do not invent additional products.

---

# 32. EQ AUDIT

This is one of the most important product experiences.

Positioning:

> A mirror, not a verdict.

The EQ Audit contains:

48 questions

Six dimensions:

1. Emotional Awareness
2. Emotional Regulation
3. Pattern Recognition
4. Empathy
5. Social Intelligence
6. Intentional Communication

---

# 33. EQ AUDIT USER FLOW

Flow:

EQ Audit Landing
↓
Start Audit
↓
Optional Email
↓
Question
↓
Progress
↓
Question
↓
Completion
↓
Scoring
↓
Inner Map
↓
Results
↓
Recommended Next Step

The audit must feel reflective, not clinical.

Do NOT make it feel like a corporate HR test.

---

# 34. EQ AUDIT UX

Requirements:

- One question at a time or carefully grouped questions
- Clear progress indicator
- Calm transitions
- Save progress when appropriate
- Mobile friendly
- Keyboard accessible
- No unnecessary gamification
- No countdown timer
- No pressure language

The user should feel:

"I'm learning about myself."

Not:

"I'm being evaluated."

---

# 35. EQ AUDIT SCORING

Scoring must happen securely.

Do not rely exclusively on client-side scoring.

Server-side scoring should calculate:

- Overall EQ profile
- Six dimension scores
- Strengths
- Growth areas
- Suggested next step

Do not present results as medical diagnosis.

Do not claim scientific validation unless the assessment has actually been validated.

---

# 36. EQ RESULTS

Results should NOT simply display:

"You scored 72%."

Instead provide:

- Emotional profile
- Strong dimensions
- Growth dimensions
- Reflection prompts
- Practical interpretation
- Suggested next step

Example conceptual structure:

Your Inner Map

Emotional Awareness
████████

Emotional Regulation
██████

Empathy
█████████

Pattern Recognition
███████

Social Intelligence
████████

Intentional Communication
██████

Then:

"What this might mean"

Then:

"Where you could explore next"

Possible recommendation:

Inner Compass

---

# 37. INNER COMPASS

Inner Compass is the deeper development program.

Core framework:

Know Yourself
↓
Choose Yourself
↓
See Others
↓
Read the Room
↓
Speak with Intention

It should eventually become a deeper guided experience.

MVP should focus on:

- Program explanation
- Philosophy
- Modules
- Outcomes
- CTA
- Enquiry / interest form

Do NOT build a huge learning-management system in MVP.

---

# 38. QUIET BLOOM RETREAT

Quiet Bloom is the premium retreat experience.

Location:

Dharamshala / Himalayan context.

Core themes:

- Mindfulness
- Reflection
- Village immersion
- Nature
- Stillness
- Self-awareness
- Meaning

The page should communicate the experience emotionally.

Include:

- Retreat philosophy
- Location
- Experience
- What participants may explore
- Sample schedule
- Accommodation information if provided
- Facilitators if provided
- Enquiry CTA

Do NOT invent:

- Dates
- Prices
- Accommodation details
- Number of participants
- Specific schedules

If information is unavailable, use CMS placeholders or mark it as content requiring configuration.

---

# 39. SCHOOLS & COLLEGES

Purpose:

Provide educational institutions with human-development programs.

Possible themes:

- Emotional intelligence
- Communication
- Self-awareness
- Leadership
- Relationships
- Mindfulness

Page should include:

Problem
↓
Approach
↓
Programs
↓
Outcomes
↓
Enquiry

Primary CTA:

Discuss a Program

---

# 40. ORGANISATIONS

Purpose:

B2B human-development programs.

Possible areas:

- Emotional intelligence
- Leadership
- Communication
- Team dynamics
- Human-centred leadership
- Workplace relationships

Lead form should collect:

- Name
- Organisation
- Role
- Email
- Phone
- Program interest
- Audience size
- Message

Do not ask unnecessary questions.

---

# 41. WHAT MAKES US DIFFERENT

This page should communicate differentiation.

Core ideas:

> We don't treat spirituality as a mood board.

> We don't treat mindfulness as an app notification.

> We don't treat emotional intelligence as a productivity hack.

> We believe the mind, heart and spirit belong together.

Tone:

Confident
Quiet
Thoughtful

Do not attack competitors.

---

# 42. COMMUNITY

Community MVP should remain simple.

Purpose:

Create an ongoing relationship with SoulfulI.

Possible features:

- Newsletter signup
- Events
- Reflections
- Announcements
- Community invitations
- Retreat announcements

MVP should NOT include:

- Custom social network
- Chat rooms
- Direct messaging
- Complex profiles
- Social feed
- Likes
- Followers
- Gamification

Build the simplest useful community experience first.

---

# 43. CONTACT

Contact page should be simple.

Include:

- General contact
- Organisation enquiry
- School/college enquiry
- Retreat enquiry

Forms should be accessible and validated.

On submit:

1. Validate
2. Save
3. Send notification
4. Show confirmation
5. Track analytics event

---

# 44. FORM UX

All forms should:

- Have clear labels
- Have useful validation
- Show loading state
- Show success state
- Show failure state
- Avoid unnecessary fields
- Be mobile friendly
- Be accessible
- Prevent accidental duplicate submissions

Never lose submitted information silently.

---

# 45. SEO

Every public page needs:

- Page title
- Meta description
- Canonical URL
- Open Graph metadata
- Social image
- Structured headings
- Semantic HTML
- Internal links
- Descriptive URLs
- Sitemap
- robots.txt

Future content:

/insights/[slug]

Use Schema.org where appropriate.

Do not keyword-stuff content.

---

# 46. CONTENT MANAGEMENT

Marketing copy should be editable without code whenever practical.

Use Sanity for:

- Page sections
- Program descriptions
- Retreat information
- Articles
- Testimonials
- FAQs
- Facilitators
- Events

Developers should not need to redeploy the website for normal content updates.

---

# 47. SECURITY

All user input must be validated.

Use:

- Server-side validation
- Zod or equivalent validation
- Rate limiting
- Sanitization
- Secure cookies
- RLS
- Environment variables
- Secure authentication

Do not trust client input.

Do not expose scoring algorithms unnecessarily.

Do not log sensitive user responses.

---

# 48. PRIVACY

SoulfulI may collect personal and reflective information.

Therefore:

- Minimize data collection
- Clearly explain why information is collected
- Allow users to understand how their information is used
- Do not claim medical or psychological diagnosis
- Protect assessment results
- Avoid unnecessary personal data storage

Required legal pages:

/privacy
/terms

Cookie policy where legally required.

These pages can initially be simple content pages managed through CMS.

---

# 49. DATABASE DESIGN PRINCIPLES

Database should be:

- Simple
- Relational
- Secure
- Extensible

Do not build microservices.

Do not build multiple databases.

Do not introduce Redis unless an actual requirement exists.

Do not introduce Kubernetes.

Do not introduce GraphQL unless a real requirement appears.

Do not introduce a custom backend framework when Next.js server functionality is sufficient.

---

# 50. APPLICATION ARCHITECTURE

Preferred architecture:

User
↓
Cloudflare
↓
Vercel
↓
Next.js
├── Marketing Pages
├── Product Experiences
├── Forms
├── Server Actions / API
│
├── Sanity CMS
├── Supabase
├── Resend
├── PostHog
└── Sentry

Keep architecture modular but simple.

---

# 51. PROJECT STRUCTURE

Suggested structure:

src/

app/
page.tsx
our-story/
what-we-offer/
eq-audit/
inner-compass/
quiet-bloom/
schools-colleges/
organisations/
what-makes-us-different/
community/
contact/
privacy/
terms/

components/
ui/
layout/
sections/
audit/
forms/

lib/
sanity/
supabase/
email/
analytics/
validation/
audit/

types/

content/

styles/

Do not create folders simply to make the architecture look complex.

---

# 52. DATA FLOW

Marketing content:

Sanity
↓
Next.js
↓
Rendered Page

User form:

User
↓
Form
↓
Server Action/API
↓
Validation
↓
Supabase
↓
Resend notification
↓
Analytics

EQ Audit:

User
↓
Audit UI
↓
Answers
↓
Secure submission
↓
Server-side scoring
↓
Results
↓
Database
↓
Results UI

---

# 53. ERROR HANDLING

Every important user action needs:

Loading state
Success state
Error state

Never show raw technical errors.

Good:

> Something went wrong. Please try again.

Bad:

> SupabaseError: 23505...

Log technical errors internally through Sentry.

---

# 54. LOADING UX

Avoid unnecessary loading screens.

Prefer:

- Server rendering
- Streaming where useful
- Skeletons for dynamic content
- Progressive loading

Do not show a branded loading animation on every page.

---

# 55. DESIGN PRINCIPLES

The interface should feel:

Editorial
Human
Calm
Premium
Warm
Intelligent

Not:

SaaS
Corporate
Clinical
Gamified
Religious
Generic wellness

---

# 56. CARD USAGE

Do not put everything inside cards.

Cards should be used when grouping information improves comprehension.

Prefer:

- Editorial sections
- Large typography
- White space
- Images
- Horizontal relationships
- Journey-based layouts

Avoid:

"Everything is a rounded card."

---

# 57. CTA STRATEGY

Primary CTA:

Take the EQ Audit

Other CTAs:

Begin Your Journey
Explore Inner Compass
Explore Quiet Bloom
Discuss a Program
Join the Community

Do not create random CTA labels for every section.

---

# 58. CONTENT TONE

Copy should be:

- Human
- Clear
- Intelligent
- Warm
- Reflective
- Concise
- Non-preachy

Avoid:

- Hustle culture
- "Unlock your full potential"
- "Become the best version of yourself"
- Fake urgency
- Aggressive sales copy
- Spiritual clichés
- Overpromising transformation

---

# 59. IMPORTANT COPY PRINCIPLE

SoulfulI should never sound like it is telling the user:

"You are broken and we will fix you."

Instead:

"You are worth understanding."

The product is a mirror and guide, not an authority judging the user.

---

# 60. MVP FEATURE PRIORITY

## P0 — MUST HAVE

These features are required.

### Website

- Home
- Our Story
- What We Offer
- EQ Audit landing
- Inner Compass
- Quiet Bloom
- Schools & Colleges
- Organisations
- What Makes Us Different
- Community
- Contact

### Foundation

- Next.js
- TypeScript
- Tailwind
- Design system
- Responsive layout
- Accessibility
- SEO
- Sanity
- Supabase
- Vercel
- Analytics
- Error monitoring

### Forms

- Contact
- Organisation enquiry
- School enquiry
- Retreat enquiry
- Community/newsletter signup

### Performance

- Optimized images
- Server rendering
- Minimal JavaScript
- Core Web Vitals optimization
- Mobile optimization

---

# 61. P1 — IMPORTANT NEXT

After MVP foundation:

- Full EQ Audit
- 48-question engine
- Six-dimension scoring
- Results
- Inner Map
- Email results
- Optional user account
- Save results
- Inner Compass modules
- User progress

---

# 62. P2 — FUTURE

Only build after product validation.

Possible future features:

- Community accounts
- Events
- Retreat booking
- Payment integration
- Membership
- Digital programs
- Journal
- Personal reflection space
- Personalized recommendations

---

# 63. FEATURES THAT MUST NOT BE BUILT NOW

Do NOT build:

- AI chatbot
- AI therapist
- Custom social network
- Mobile app
- Gamification
- Points
- Badges
- Leaderboards
- Complex booking engine
- Microservices
- Kubernetes
- Custom CMS
- Complex CRM
- Custom payment infrastructure
- Complex recommendation engine
- Cryptocurrency
- NFT functionality
- Unnecessary dashboards
- Random productivity tools
- Habit tracker
- Meditation timer
- Generic blog platform
- Random quizzes
- Random calculators

Unless the product owner explicitly requests one of these later.

---

# 64. ANTI-RANDOM-FEATURE RULE

This is a critical development rule.

Before implementing ANY new feature, ask:

1. Which user problem does this solve?
2. Which existing PRD requirement does it support?
3. Is it required for MVP?
4. Does it support SoulfulI's core philosophy?
5. Does it improve conversion, understanding, experience, or operations?
6. Is there a simpler solution?

If the feature cannot answer these questions clearly:

DO NOT BUILD IT.

---

# 65. NO FEATURE INVENTION RULE

The developer/AI must NOT invent:

- Products
- Programs
- Pricing
- Retreat dates
- Testimonials
- Statistics
- Scientific claims
- Certifications
- Partnerships
- Reviews
- Customer logos
- User numbers
- Team members
- Locations
- Features
- Business claims

If information is unavailable:

Use a placeholder or CMS field.

Do not fabricate content.

---

# 66. CONTENT PLACEHOLDER RULE

When content is missing, use meaningful placeholders.

Example:

[RETREAT_DATE]

[RETREAT_PRICE]

[FACILITATOR_NAME]

Do NOT write fake information.

---

# 67. IMPLEMENTATION ORDER

Antigravity must follow this order.

## STEP 1

Understand this PRD completely.

Do not start coding immediately.

---

## STEP 2

Create the technical architecture.

Define:

- App structure
- Components
- Data model
- CMS model
- Environment variables
- Routes
- Dependencies

---

## STEP 3

Create the global design system.

Implement:

- Colors
- Typography
- Spacing
- Buttons
- Inputs
- Navigation
- Footer
- Basic components

---

## STEP 4

Build the global layout.

Header
Footer
Navigation
Responsive behavior

---

## STEP 5

Build marketing pages.

Recommended order:

1. Home
2. Our Story
3. What We Offer
4. What Makes Us Different
5. EQ Audit
6. Inner Compass
7. Quiet Bloom
8. Schools & Colleges
9. Organisations
10. Community
11. Contact

---

## STEP 6

Connect CMS.

Only after the layout and content structures are stable.

---

## STEP 7

Connect forms.

Implement:

Validation
Database storage
Email notification
Analytics
Success/error states

---

## STEP 8

Build EQ Audit engine.

Only after the marketing foundation is stable.

---

## STEP 9

Performance optimization.

Test:

Desktop
Mobile
Slow network
Large screen
Small screen

---

## STEP 10

Accessibility audit.

---

## STEP 11

SEO audit.

---

## STEP 12

End-to-end testing.

---

# 68. DEFINITION OF DONE

A feature is not finished simply because it visually works.

A feature is complete when:

- UI works
- Mobile works
- Accessibility works
- Error states exist
- Loading states exist
- Validation exists
- Analytics are implemented where relevant
- SEO is handled where relevant
- Performance is acceptable
- Tests exist where appropriate
- No console errors
- No TypeScript errors
- No broken links
- No fabricated content
- No unnecessary dependencies
- No security vulnerabilities introduced

---

# 69. QUALITY BAR

SoulfulI must feel:

"Premium but not expensive."

"Spiritual but not religious."

"Intelligent but not clinical."

"Warm but not childish."

"Modern but not trendy."

"Human but not amateur."

"Minimal but not empty."

---

# 70. DESIGN QUALITY BAR

Avoid:

- Generic AI landing page layouts
- Excessive gradients
- Excessive glassmorphism
- Giant rounded cards
- Excessive shadows
- SaaS dashboard aesthetics
- Stock-photo-heavy sections
- Excessive icon usage
- Overly animated pages
- Dense layouts
- Generic motivational copy

Prefer:

- Strong typography
- Editorial composition
- Natural imagery
- White space
- Asymmetric layouts where appropriate
- Quiet interactions
- Thoughtful transitions
- Warm materials
- Human photography

---

# 71. MOBILE QUALITY BAR

On mobile:

- Navigation must be simple
- CTA must be easy to reach
- Typography must remain elegant
- Sections must not feel cramped
- Images must load efficiently
- Forms must be easy to complete
- Audit must feel effortless
- Motion should be reduced when necessary

Never simply shrink the desktop design.

Recompose it for mobile.

---

# 72. SEO PAGE PRIORITY

Highest priority:

Home
EQ Audit
Inner Compass
Quiet Bloom
Organisations
Schools & Colleges

Secondary:

Our Story
What Makes Us Different
Community

---

# 73. CONVERSION PRIORITY

Primary conversion:

EQ Audit

Secondary conversions:

Inner Compass enquiry
Retreat enquiry
Organisation enquiry
School enquiry
Community signup

The website should guide users naturally toward the appropriate next step.

Do not use aggressive popups.

---

# 74. USER JOURNEY

Primary B2C journey:

Home
↓
Understand SoulfulI
↓
EQ Audit
↓
Results
↓
Inner Compass
↓
Community / Retreat

B2B journey:

Home
↓
Organisations / Schools
↓
Program understanding
↓
Enquiry
↓
Human follow-up

Retreat journey:

Home
↓
Quiet Bloom
↓
Experience
↓
Enquiry
↓
Human follow-up

---

# 75. PERSONALIZATION

Do not build sophisticated personalization in MVP.

Initial recommendation logic should be simple and deterministic.

Example:

EQ result
↓
Identify strongest/growth dimensions
↓
Suggest relevant next step

Do not introduce machine learning.

Do not introduce AI recommendations.

---

# 76. AI POLICY

AI is not a core feature of SoulfulI MVP.

Do not add an AI chatbot just because AI is popular.

AI may be considered in the future for:

- Reflection prompts
- Content recommendations
- Journaling assistance

But any AI feature requires a separate product requirement and privacy review.

---

# 77. PRODUCT PHILOSOPHY

The product should help the user:

Pause.
Notice.
Understand.
Choose.
Connect.
Grow.

It should not:

Pressure.
Judge.
Gamify.
Diagnose.
Overwhelm.

---

# 78. FINAL BRAND STATEMENT

The experience should communicate:

> The retreat ends.
> The workshop ends.
> The audit gives you a score and closes the tab.
>
> But the blooming continues.

This should inform the overall product experience.

---

# 79. DEVELOPMENT RULES FOR ANTIGRAVITY

These rules are mandatory.

## Rule 1

PRD.md is the source of truth.

## Rule 2

Do not invent features.

## Rule 3

Do not change the technology stack without justification.

## Rule 4

Do not create pages that are not defined in the PRD.

## Rule 5

Do not fabricate business information.

## Rule 6

Do not add AI features automatically.

## Rule 7

Do not over-engineer the application.

## Rule 8

Prefer the simplest architecture that solves the problem.

## Rule 9

Reuse components.

## Rule 10

Keep business logic separate from UI.

## Rule 11

Keep content separate from code where CMS is appropriate.

## Rule 12

Optimize for mobile.

## Rule 13

Accessibility is required, not optional.

## Rule 14

Performance is a feature.

## Rule 15

Every important interaction needs loading, success and error states.

## Rule 16

Do not expose secrets.

## Rule 17

Do not store unnecessary personal data.

## Rule 18

Do not claim scientific or medical validity unless verified.

## Rule 19

Do not create fake testimonials or statistics.

## Rule 20

When uncertain, prefer the smallest implementation consistent with this PRD.

---

# 80. FINAL INSTRUCTION TO ANTIGRAVITY

You are building SoulfulI, not a generic website.

Before writing code, understand:

- The brand
- The philosophy
- The audience
- The business model
- The information architecture
- The technical architecture
- The UX principles
- The performance requirements
- The accessibility requirements
- The feature priorities

Do not optimize for the number of features.

Optimize for:

Clarity
Trust
Depth
Performance
Simplicity
Emotional experience
Conversion
Maintainability

The website should feel like a quiet, intelligent place where someone can begin understanding themselves.

If a proposed feature does not clearly contribute to that goal, do not build it.

Build the smallest coherent version first.

Then expand only when the product requirement justifies it.

---

# END OF PRD
