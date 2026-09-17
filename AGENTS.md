# SoulfulI — AGENTS.md

## 1. PURPOSE

You are the development agent responsible for building and maintaining the SoulfulI website and product.

SoulfulI is a modern human-development platform focused on:

> Understanding yourself deeply enough to live differently.

The product combines:

- Emotional Intelligence
- Mindfulness
- Spirituality
- Self-awareness
- Human connection
- Meaning
- Intentional living

The product philosophy is:

> Mind + Heart + Spirit → One Journey → A More Whole You

The primary emotional experience should be:

> "This is a quiet place where I can understand myself."

---

# 2. SOURCE OF TRUTH

The project contains a `PRD.md`.

`PRD.md` is the primary source of truth for:

- Product requirements
- Features
- Pages
- User journeys
- Technology
- UX
- Design direction
- Architecture
- Performance
- Accessibility
- Feature priorities

Before implementing any meaningful feature:

1. Read `PRD.md`.
2. Identify the requirement being implemented.
3. Check the feature priority.
4. Check whether an existing component or utility can be reused.
5. Implement the smallest solution that satisfies the requirement.

Do not contradict the PRD without documenting the reason.

---

# 3. NO RANDOM FEATURES

This is one of the most important rules.

DO NOT invent product features.

Do not add functionality simply because:

- It is trendy.
- Another website has it.
- AI tools commonly generate it.
- It looks impressive.
- It makes the page longer.
- It is easy to implement.
- It might be useful someday.
- A generic website template contains it.

Before adding a feature, answer:

1. What user problem does this solve?
2. Which PRD requirement does it satisfy?
3. Is it required for the current product phase?
4. Does it support SoulfulI's philosophy?
5. Is there a simpler implementation?

If the answer is unclear:

> DO NOT BUILD THE FEATURE.

---

# 4. DO NOT CHANGE THE PRODUCT

Do not transform SoulfulI into:

- A SaaS dashboard
- A meditation app
- A yoga platform
- A generic wellness website
- A therapy platform
- A religious website
- A social media platform
- A productivity app
- An AI chatbot website
- A generic self-help platform
- A corporate HR portal

SoulfulI must remain:

- Human
- Calm
- Intelligent
- Grounded
- Premium
- Reflective
- Personal
- Editorial

---

# 5. TECHNOLOGY STACK

Use the following stack unless the project owner explicitly approves a change.

## Frontend

- Next.js
- React
- TypeScript
- App Router

## Styling

- Tailwind CSS

## UI Foundation

- shadcn/ui

shadcn/ui is only a technical component foundation.

Do not make SoulfulI visually resemble the default shadcn design.

## CMS

- Sanity

## Database

- Supabase PostgreSQL

## Authentication

- Supabase Auth when authentication becomes necessary

Do not force authentication onto the public website.

## Hosting

- Vercel

## Email

- Resend

## Analytics

- PostHog

## Error Monitoring

- Sentry

## Testing

- Vitest
- Playwright

---

# 6. ARCHITECTURE PRINCIPLE

Follow:

> Premium on the surface. Simple underneath. Scalable when proven.

Prefer a simple monolithic Next.js architecture.

Do NOT introduce:

- Microservices
- Kubernetes
- GraphQL
- Redis
- Kafka
- Complex event buses
- Multiple databases
- Custom backend frameworks

unless a real requirement makes them necessary.

Complexity must be justified.

---

# 7. NEXT.JS RULES

Use the App Router.

Prefer Server Components.

Use Client Components only when required for:

- User interaction
- Browser APIs
- Interactive forms
- Animation
- Local state
- Client-side product experiences

Do not add `"use client"` to entire pages unnecessarily.

Keep client-side JavaScript minimal.

---

# 8. TYPESCRIPT RULES

Use strict TypeScript.

Avoid:

```ts
any;
```

unless absolutely unavoidable.

Prefer:

- Explicit interfaces
- Type aliases
- Shared types
- Type-safe API responses
- Type-safe database access

Do not silence TypeScript errors just to make builds pass.

---

# 9. COMPONENT ARCHITECTURE

Build reusable components.

Expected categories:

```text
components/
├── ui/
├── layout/
├── sections/
├── forms/
├── audit/
└── shared/
```

Reuse components whenever possible.

Examples:

- Button
- Input
- Textarea
- Select
- Modal
- Accordion
- SectionHeading
- ImageTextBlock
- QuoteBlock
- OfferingCard
- ProgramCard
- JourneyStep
- JourneyTimeline
- FormField
- AuditQuestion
- AuditProgress
- InnerMap

Do not create duplicate components with slightly different names.

Before creating a component:

> Search the existing component library first.

---

# 10. DESIGN SYSTEM

SoulfulI's visual system must remain consistent.

Core palette:

- Warm Ivory
- Soft Sand
- Muted Sage
- Deep Forest
- Terracotta
- Charcoal

Typography:

- Elegant serif for major emotional/editorial headings
- Clean sans-serif for body and interface

Design qualities:

- Generous whitespace
- Strong typography
- Editorial composition
- Natural imagery
- Soft transitions
- Calm interaction
- Human photography

Avoid:

- Excessive gradients
- Excessive shadows
- Excessive rounded cards
- Glassmorphism
- Neon colors
- Loud UI
- Generic SaaS aesthetics
- Excessive icons

---

# 11. DESIGN TOKENS

Do not hard-code colors throughout the codebase.

Use centralized design tokens.

Example conceptual tokens:

```text
--color-background
--color-surface
--color-foreground
--color-muted
--color-primary
--color-secondary
--color-accent
--color-border
--color-error
--color-success
```

Typography and spacing should also use a consistent scale.

---

# 12. CONTENT RULES

Never fabricate business content.

Do NOT invent:

- Testimonials
- Customer logos
- Statistics
- Reviews
- Team members
- Partnerships
- Certifications
- Scientific claims
- Retreat dates
- Retreat pricing
- Program pricing
- Facilitator information
- Locations
- User counts
- Awards

If information is missing, use a CMS field or explicit placeholder.

Example:

```text
[RETREAT_DATE]
[RETREAT_PRICE]
[FACILITATOR_NAME]
```

Never present placeholder information as real information.

---

# 13. COPYWRITING RULES

SoulfulI copy must feel:

- Human
- Warm
- Intelligent
- Reflective
- Clear
- Grounded
- Non-preachy

Avoid:

- Hustle language
- Aggressive sales language
- Fake urgency
- Empty motivational clichés
- "Unlock your full potential"
- "Become the best version of yourself"
- Overpromising transformation
- Clinical psychological language without justification

Never communicate:

> "You are broken and we will fix you."

Prefer:

> "You are worth understanding."

---

# 14. SPIRITUALITY RULE

SoulfulI may discuss spirituality.

However, spirituality must never become:

- Religious preaching
- Religious conversion
- Mystical clichés
- Fake enlightenment claims
- Generic spiritual stock imagery

The intended framing is:

- Meaning
- Purpose
- Connection
- Inner life
- Reflection
- Awareness

---

# 15. EMOTIONAL INTELLIGENCE RULE

The EQ Audit is a self-reflection and development experience.

Do not present it as:

- Medical diagnosis
- Psychiatric diagnosis
- Clinical assessment
- Mental health diagnosis
- Guaranteed psychological measurement

Unless explicitly supported by validated research and approved product requirements, do not make scientific validation claims.

The positioning is:

> A mirror, not a verdict.

---

# 16. EQ AUDIT DEVELOPMENT

The EQ Audit contains:

48 questions.

Six dimensions:

1. Emotional Awareness
2. Emotional Regulation
3. Pattern Recognition
4. Empathy
5. Social Intelligence
6. Intentional Communication

The audit should feel:

- Reflective
- Calm
- Personal
- Easy to complete
- Non-judgmental

Avoid:

- Countdown timers
- Competitive scoring
- Gamification
- Badges
- Leaderboards
- Pressure

---

# 17. EQ SCORING SECURITY

Scoring logic must not unnecessarily live entirely in the browser.

Where appropriate:

User answers
↓
Server
↓
Scoring logic
↓
Results
↓
Database

Do not expose sensitive scoring logic unnecessarily.

Validate all submitted answers server-side.

Do not trust client-provided scores.

---

# 18. USER DATA

Collect the minimum amount of personal information required.

Do not store unnecessary personal information.

Do not log sensitive assessment answers unnecessarily.

Use secure database access.

Use Row Level Security where appropriate.

Never expose private user information through public APIs.

---

# 19. DATABASE RULES

Use Supabase PostgreSQL.

Keep the schema simple.

Only create tables that support actual product requirements.

Potential tables include:

```text
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
```

Do not create speculative tables for features that do not exist.

---

# 20. SANITY CMS RULES

Use Sanity for editable marketing/content information.

Potential content types:

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

Do not hard-code frequently changing marketing content inside React components.

Do not build a custom CMS.

---

# 21. FORM RULES

All forms must have:

- Labels
- Validation
- Loading state
- Success state
- Error state
- Accessible feedback
- Mobile-friendly layout
- Duplicate-submit protection

Validate data on the server.

Use a schema validation library such as Zod where appropriate.

---

# 22. FORM SUBMISSION FLOW

Preferred flow:

```text
User
↓
Form
↓
Client validation
↓
Server validation
↓
Database
↓
Email notification
↓
Analytics
↓
Success state
```

Do not rely only on client-side validation.

---

# 23. EMAIL

Use Resend.

Emails may include:

- Contact notification
- Organisation enquiry
- School enquiry
- Retreat enquiry
- Newsletter confirmation
- EQ Audit results

Do not build custom email infrastructure.

---

# 24. ANALYTICS

Use PostHog.

Track meaningful events such as:

```text
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
```

Do not send sensitive assessment responses as analytics properties.

---

# 25. ERROR MONITORING

Use Sentry.

Track:

- Client errors
- Server errors
- Important failed requests
- Application failures

Do not expose internal error information to users.

Bad:

```text
SupabaseError: 23505
```

Good:

```text
Something went wrong. Please try again.
```

---

# 26. PERFORMANCE

Performance is a product requirement.

Target:

> Lighthouse Performance 90+

Prioritize:

- LCP
- CLS
- INP
- TTFB

Always consider:

- Image optimization
- Server rendering
- Bundle size
- JavaScript usage
- Font loading
- Network requests
- Layout stability

Do not add libraries without considering their bundle impact.

---

# 27. IMAGE PERFORMANCE

Use Next.js Image.

Requirements:

- Responsive image sizes
- Proper dimensions
- Modern formats
- Lazy loading below the fold
- Optimized assets
- Appropriate quality settings

Avoid giant unoptimized images.

Avoid unnecessary background images.

---

# 28. ANIMATION

Animation should be subtle.

Preferred:

- Fade
- Reveal
- Gentle movement
- Small hover transitions
- Soft image movement
- Subtle scroll storytelling

Avoid:

- Excessive parallax
- Constant movement
- Bouncing UI
- Gaming effects
- Excessive scroll-jacking
- Animation everywhere

Respect:

```css
prefers-reduced-motion
```

---

# 29. MOBILE

Mobile is a first-class experience.

Do not simply shrink desktop layouts.

Recompose layouts for mobile.

Requirements:

- Touch-friendly controls
- No horizontal scrolling
- Readable typography
- Efficient images
- Simple navigation
- Accessible forms
- Appropriate spacing
- Reduced animation

Test important flows on mobile.

---

# 30. ACCESSIBILITY

Follow WCAG 2.2 AA principles.

Requirements:

- Semantic HTML
- Proper headings
- Keyboard navigation
- Focus states
- Accessible labels
- Accessible forms
- Sufficient contrast
- Alt text
- Reduced motion
- Screen reader support

Use ARIA only when semantic HTML cannot solve the problem.

---

# 31. SEO

Every public page should have:

- Unique title
- Meta description
- Canonical URL
- Open Graph metadata
- Proper headings
- Semantic HTML
- Internal links
- Sitemap
- robots.txt

Use structured data where appropriate.

Do not keyword-stuff content.

---

# 32. ROUTING

Only build routes defined by the PRD.

Current routes:

```text
/
 /our-story
 /what-we-offer
 /eq-audit
 /inner-compass
 /quiet-bloom
 /schools-colleges
 /organisations
 /what-makes-us-different
 /community
 /contact
 /privacy
 /terms
```

Future routes should only be added when approved.

---

# 33. NAVIGATION

Primary navigation:

- Home
- Our Story
- What We Offer
- What Makes Us Different
- Community

Primary CTA:

> Take the EQ Audit

Do not overcrowd the navigation.

Do not add random navigation links.

---

# 34. CTA RULES

Preferred CTA language:

- Take the EQ Audit
- Begin Your Journey
- Explore Inner Compass
- Explore Quiet Bloom
- Discuss a Program
- Join the Community

Avoid:

- Buy Now
- Act Now
- Limited Time
- Unlock Now
- Transform Your Life Today

unless specifically required by an approved campaign.

---

# 35. COMMUNITY RULE

The MVP community must remain simple.

Do not build:

- Social feeds
- Followers
- Likes
- Comments
- Direct messaging
- Chat rooms
- User profiles
- Leaderboards

Initial community functionality may include:

- Newsletter
- Events
- Announcements
- Reflections
- Community invitations

---

# 36. RETREAT RULE

Quiet Bloom is initially an enquiry-driven experience.

Do not build a complex booking engine unless explicitly requested.

Do not invent:

- Dates
- Prices
- Availability
- Room types
- Schedules
- Capacity

Use CMS content where available.

---

# 37. B2B RULE

Organisation and school pages should prioritize:

1. Understanding the problem
2. Explaining SoulfulI's approach
3. Showing relevant programs
4. Communicating outcomes
5. Enquiry

Do not create an enterprise dashboard.

Do not create complicated proposal-generation tools.

---

# 38. AI RULE

AI is NOT a core MVP feature.

Do not automatically add:

- AI chatbot
- AI coach
- AI therapist
- AI-generated journal
- AI recommendations
- AI assistant

AI may be considered in a future phase only with explicit product requirements.

---

# 39. NO OVER-ENGINEERING

Prefer:

```text
Simple solution
```

over:

```text
Technically impressive solution
```

Example:

If a server action solves a problem, do not create a separate microservice.

If a simple PostgreSQL query works, do not introduce another database.

If CSS handles an animation, do not add a library.

If a reusable component works, do not create five variants of the same component.

---

# 40. DEPENDENCY RULE

Before installing a new dependency, ask:

1. Is it required?
2. Can existing project tools solve it?
3. What is the bundle impact?
4. Is it maintained?
5. Does it introduce unnecessary complexity?

Avoid dependency bloat.

---

# 41. SECURITY RULES

Never:

- Commit secrets
- Expose API keys
- Expose database credentials
- Trust client-provided scores
- Trust client-provided permissions
- Skip server validation
- Log sensitive user data
- Return raw database errors

Use environment variables.

---

# 42. ENVIRONMENT VARIABLES

Secrets belong in environment variables.

Example:

```text
NEXT_PUBLIC_...
SUPABASE_...
SANITY_...
RESEND_...
POSTHOG_...
SENTRY_...
```

Never hard-code secrets.

Never commit `.env.local`.

Provide `.env.example` with placeholder values where appropriate.

---

# 43. ERROR STATES

Every important interactive experience must account for:

```text
Loading
Success
Error
Empty
Retry
```

Do not leave users staring at a blank screen.

---

# 44. EMPTY STATES

Empty states should be calm and useful.

Example:

> Nothing here yet.
> New reflections and events will appear here soon.

Do not create unnecessary illustrations or animations.

---

# 45. CODE STYLE

Prefer:

- Small functions
- Clear names
- Single responsibility
- Reusable utilities
- Typed interfaces
- Predictable data flow

Avoid:

- Huge components
- Deep nesting
- Duplicate logic
- Magic numbers
- Hard-coded business rules scattered throughout the UI

---

# 46. BUSINESS LOGIC

Business logic should not be buried inside UI components.

Prefer:

```text
lib/
  audit/
  validation/
  analytics/
  email/
```

For example:

EQ scoring should be isolated from:

- UI
- Styling
- Page layout

This makes it testable.

---

# 47. TESTING

Use Vitest for:

- Scoring
- Validation
- Utilities
- Business logic

Use Playwright for:

- Navigation
- Critical user journeys
- Forms
- EQ Audit
- Mobile behavior

Do not create meaningless tests simply to increase test count.

Test important behavior.

---

# 48. PRE-COMMIT CHECK

Before committing:

- TypeScript passes
- Lint passes
- Tests pass
- No obvious accessibility errors
- No console errors
- No broken imports
- No secrets
- No fake content
- No unnecessary feature additions

---

# 49. BUILD CHECK

Before declaring a task complete:

```text
npm run lint
npm run typecheck
npm run test
npm run build
```

If the project uses different commands, follow the existing project configuration.

Do not claim success if the build is failing.

---

# 50. GIT RULES

Use small, logical commits.

Good:

```text
feat: add EQ audit landing page
feat: add organisation enquiry form
fix: improve mobile navigation
perf: optimize hero images
a11y: improve audit keyboard navigation
```

Avoid:

```text
update
changes
stuff
final
final-final
```

---

# 51. CHANGE SAFETY

Before modifying an existing component:

1. Search where it is used.
2. Understand dependencies.
3. Check whether the change affects other pages.
4. Make the smallest safe change.
5. Test affected flows.

Do not break existing pages to solve one page's problem.

---

# 52. DO NOT REWRITE WORKING SYSTEMS

If something already works:

Do not rewrite it simply because you prefer another approach.

Only refactor when there is a clear benefit:

- Bug
- Performance issue
- Maintainability issue
- Security issue
- Accessibility issue
- Clear architectural problem

---

# 53. DESIGN CONSISTENCY

When creating a new page:

Reuse:

- Header
- Footer
- Typography
- Buttons
- Spacing
- Colors
- Form components
- Animation patterns
- Image treatment

The website should feel like one product.

Not a collection of independent AI-generated pages.

---

# 54. PAGE CREATION RULE

Before building a new page:

1. Check whether the route exists in the PRD.
2. Identify its purpose.
3. Identify its primary user.
4. Identify its primary CTA.
5. Identify the required sections.
6. Reuse existing components.
7. Do not add unrelated sections.

---

# 55. HOME PAGE RULE

The homepage must communicate:

```text
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
```

It should not become a generic:

```text
Hero
Features
Testimonials
Pricing
FAQ
CTA
```

template.

---

# 56. BRAND EXPERIENCE RULE

The website itself should demonstrate SoulfulI's philosophy.

The interface should encourage:

Pause.
Notice.
Understand.
Choose.
Connect.

Do not overwhelm the user with:

- Popups
- Notifications
- Aggressive CTAs
- Excessive content
- Excessive animation

---

# 57. CONTENT HIERARCHY

Prefer:

Large editorial headline
↓
Short explanation
↓
Visual or meaningful interaction
↓
Supporting detail
↓
Clear CTA

Avoid huge walls of text.

---

# 58. CARDS

Do not put every piece of content inside a card.

Use cards only when they improve:

- Grouping
- Comparison
- Navigation
- Scanning

Prefer editorial layouts when possible.

---

# 59. IMAGES

Images should support the story.

Preferred:

- Authentic humans
- Indian environments
- Himalayan landscapes
- Quiet spaces
- Conversations
- Reflection
- Writing
- Walking
- Human connection

Avoid:

- Generic meditation stock images
- Lotus clichés
- Fake corporate teams
- Generic smiling office workers
- Artificial spiritual imagery

---

# 60. PERFORMANCE VS BEAUTY

Never sacrifice major performance for visual decoration.

If a visual effect:

- Adds significant JavaScript
- Slows LCP
- Causes layout shift
- Hurts mobile performance

then simplify it.

SoulfulI should feel premium because of:

- Typography
- Composition
- Content
- Photography
- Whitespace
- Interaction quality

Not because of heavy effects.

---

# 61. RESPONSIVE RULE

Every new component must be considered at:

```text
320px+
375px+
768px+
1024px+
1440px+
```

Do not assume desktop-first layouts will automatically work.

---

# 62. BROWSER QUALITY

Critical functionality should work in modern:

- Chrome
- Safari
- Firefox
- Edge

Pay special attention to:

- iOS Safari
- Mobile Safari
- Android Chrome

---

# 63. FEATURE PRIORITY

Follow the PRD priority:

## P0

Build now.

## P1

Build after P0 foundation is stable.

## P2

Future.

Never pull P2 features into P0 simply because they are easy to build.

---

# 64. MVP BOUNDARY

MVP should focus on:

- Beautiful website
- Clear storytelling
- EQ Audit foundation
- Program discovery
- Lead generation
- Community signup
- Retreat enquiry
- B2B enquiry
- CMS
- Analytics
- SEO
- Accessibility
- Performance

MVP does NOT require:

- Social network
- Mobile app
- AI coach
- Complex booking
- Membership platform
- Digital course platform
- Advanced personalization

---

# 65. WHEN REQUIREMENTS ARE AMBIGUOUS

Do not invent a large solution.

Choose the smallest reasonable interpretation.

If ambiguity materially affects architecture or user experience:

Pause and document the assumption before implementation.

Example:

```text
Assumption:
Retreat booking is enquiry-based for MVP because no confirmed payment/availability requirement exists in PRD.md.
```

---

# 66. WHEN A FEATURE IS REQUESTED LATER

When the product owner requests a new feature:

1. Understand the request.
2. Check whether it conflicts with the PRD.
3. Identify affected systems.
4. Estimate complexity.
5. Implement the smallest useful version.
6. Update documentation if the feature becomes part of the product.

Do not silently introduce large architectural changes.

---

# 67. DOCUMENTATION

Important architecture decisions should be documented.

If architecture changes significantly, update:

```text
PRD.md
```

or create:

```text
docs/
```

Do not let implementation drift away from documentation.

---

# 68. FINAL QUALITY STANDARD

Before shipping, ask:

### Product

Does this solve a real user problem?

### Brand

Does this feel like SoulfulI?

### UX

Is it calm and understandable?

### Design

Does it follow the design system?

### Mobile

Does it work beautifully on mobile?

### Accessibility

Can people with different abilities use it?

### Performance

Is it fast?

### Security

Is user data protected?

### Maintainability

Will another developer understand this?

### Scope

Did we build only what was required?

---

# 69. FINAL AGENT COMMAND

Your job is NOT to build the maximum number of features.

Your job is to build the RIGHT product.

When in doubt:

> Read the PRD.

When something is missing:

> Do not invent it.

When something can be simpler:

> Choose the simpler solution.

When something looks impressive but does not solve a real problem:

> Do not build it.

When choosing between more features and a better experience:

> Choose the better experience.

When choosing between complexity and simplicity:

> Choose simplicity.

The final product should feel like:

> A quiet, intelligent place where someone can begin understanding themselves.

Build SoulfulI with intention.
