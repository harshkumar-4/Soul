# SOULFULI — MASTER ANTIGRAVITY IMPLEMENTATION PROMPT

You are the lead engineer and product implementation agent for the SoulfulI website.

Your job is to implement the SoulfulI product **faithfully from the existing project instructions, PRD, AGENTS rules, installed frontend skill, and Stitch design**.

This is NOT a request to invent a new website.

The existing PRD, AGENTS instructions, Stitch project, downloaded Stitch files, and installed frontend skill are the sources of truth.

---

# 0. CRITICAL RULE — PLAN FIRST, CODE LATER

## DO NOT IMPLEMENT ANYTHING YET.

Your first task is **discovery, inspection, analysis, and planning only**.

Before creating or modifying anything:

- Read `PRD.md` completely.
- Read `AGENTS.md` completely.
- Inspect the entire existing project.
- Inspect the entire `design/` directory.
- Read/use the installed frontend skill in this project.
- Inspect the existing `package.json`.
- Inspect all existing configuration files.
- Inspect the existing routes.
- Inspect existing components.
- Inspect existing styles and design tokens.
- Inspect existing assets.
- Inspect existing dependencies.
- Inspect existing tests.
- Inspect build/lint/typecheck configuration.
- Inspect environment-variable examples if present.
- Inspect the connected Stitch MCP project.
- Inspect every Stitch screen listed below.
- Understand the existing project before making architectural decisions.

### ABSOLUTELY DO NOT:

- create production code
- modify production code
- delete files
- rename files
- refactor files
- install packages
- change `package.json`
- change configuration
- create database tables
- create migrations
- create Sanity schemas
- create Supabase schemas
- create API routes
- create components
- create pages
- create features
- modify the Stitch project
- modify Stitch screens
- overwrite existing assets
- run destructive commands

during the discovery/planning stage.

Your first response must be a **complete implementation plan**.

Then STOP and wait for my approval.

---

# 1. PRODUCT SOURCE OF TRUTH

Treat the following hierarchy as authoritative:

1. `PRD.md`
2. `AGENTS.md`
3. Existing project architecture
4. Existing installed frontend skill
5. Stitch UI/design
6. Existing project conventions

If two sources conflict:

- identify the conflict
- explain it
- do not silently choose
- do not invent a solution
- recommend the smallest reasonable resolution
- wait for approval when the conflict materially affects implementation

---

# 2. SOULFULI PRODUCT IDENTITY

SoulfulI is a human-development platform focused on helping people understand themselves deeply and live differently.

The core philosophy is:

**Mind + Heart + Spirit → One Journey → A More Whole You**

The product should connect:

- Emotional Intelligence
- Mindfulness
- Spirituality
- Self-awareness
- Relationships
- Meaning
- Purpose
- Intentional living

These must feel like **one continuous human journey**, not unrelated products.

The central journey is:

**NOISE → PAUSE → AWARENESS → UNDERSTANDING → DIRECTION → CONNECTION → BLOOM**

The core promise is:

**Understand yourself. Connect more deeply. Live with intention.**

The website should feel:

- calm
- intelligent
- human
- grounded
- premium
- deeply personal
- editorial
- reflective
- modern
- emotionally meaningful

It must NOT look like:

- a generic wellness website
- a meditation app
- a yoga website
- a corporate HR consultancy
- a generic self-help platform
- a religious website
- a generic AI-generated landing page
- a generic SaaS dashboard

Do not accidentally turn SoulfulI into one of those categories.

---

# 3. STITCH PROJECT — VISUAL SOURCE OF TRUTH

The connected Stitch project is:

**Title:** SoulfulI UI Design System

**Project ID:**
`11996648940747702580`

The following screens are authoritative visual references.

## Screen 1 — Design System

ID:

`asset-stub-assets_1ab046a7aed448bdb8ca9f9e695ce96f`

Use this to understand:

- colors
- typography
- spacing
- buttons
- cards
- forms
- borders
- radii
- shadows
- layout rules
- responsive behavior
- visual hierarchy
- interaction patterns
- component patterns

---

## Screen 2 — SoulfulI Home Page

ID:

`2479e72b49ce43278bb6acec1ca82c49`

---

## Screen 3 — SoulfulI Our Story

ID:

`203ef26e4d2543e29edbcce6061c9d07`

---

## Screen 4 — SoulfulI What We Offer

ID:

`e992063c1ec649b8b8817b99aa4699dc`

---

## Screen 5 — SoulfulI EQ Audit

ID:

`3d373ad1e7f14348aeb54a8467f51d50`

---

## Screen 6 — SoulfulI Inner Compass

ID:

`aeccbbc36c9a4efd9ee6503f3661f3f0`

---

## Screen 7 — SoulfulI Quiet Bloom

ID:

`10ede9f64a40469fbb48a3caef76623e`

---

## Screen 8 — SoulfulI Schools & Colleges

ID:

`ab293b070a3043f3b5f5f4601564352c`

---

## Screen 9 — SoulfulI Organisations

ID:

`903a6ecf6cec4b27b86135712f98d1e8`

---

## Screen 10 — SoulfulI What Makes Us Different

ID:

`66376e6b039a4fb3bd9c4a91fa7ca771`

---

## Screen 11 — SoulfulI Community

ID:

`b497300377cf4b1982a6fc72b0443826`

---

## Screen 12 — SoulfulI Contact

ID:

`c67d45c5d7b946a3890040b2b7b61793`

---

# 4. STITCH ASSET AND CODE HANDLING

Use the connected Stitch MCP whenever available.

For every Stitch screen:

1. Inspect the screen.
2. Inspect its generated code.
3. Inspect its hosted assets.
4. Identify images.
5. Identify fonts.
6. Identify icons.
7. Identify layout patterns.
8. Identify reusable components.
9. Identify responsive behavior.
10. Identify interactions.
11. Identify animation/motion.
12. Identify any external asset URLs.

If Stitch provides hosted URLs, use an appropriate utility such as:

```bash
curl -L
```

to download required assets/code when appropriate.

Do NOT blindly download everything.

Determine which assets are actually required by the final implementation.

Store project assets according to the existing project structure and `AGENTS.md`.

Do not overwrite existing assets without understanding their purpose.

If an asset is missing, do not invent a replacement unless the PRD explicitly allows a placeholder.

---

# 5. DESIGN FIDELITY RULE

The final implementation should be a **faithful implementation of the Stitch design**.

Do not reinterpret the design into your own preferred design system.

Do not replace the design with:

- generic Tailwind layouts
- generic shadcn dashboards
- generic SaaS components
- generic wellness UI
- generic AI landing-page patterns

Preserve:

- composition
- spacing
- typography
- hierarchy
- visual rhythm
- image treatment
- card proportions
- button treatment
- section structure
- color relationships
- editorial feeling
- whitespace
- motion
- interaction patterns

You may improve:

- semantic HTML
- accessibility
- keyboard navigation
- responsive behavior
- performance
- code quality
- maintainability
- loading states
- error states

But improvements must preserve the visual intent of Stitch.

---

# 6. DO NOT INVENT FEATURES

This is extremely important.

Before implementing anything that is not explicitly present in the PRD, ask:

1. What user problem does this solve?
2. Which PRD requirement does it support?
3. Is it required for MVP?
4. Is it represented in Stitch?
5. Does it support SoulfulI's core philosophy?
6. Is there a simpler implementation?

If the answer is unclear:

**DO NOT BUILD IT.**

Do not invent:

- products
- services
- pricing
- testimonials
- statistics
- certifications
- partnerships
- team members
- claims
- features
- programs
- retreat dates
- locations
- user accounts
- AI assistants
- social networks
- gamification
- habit trackers
- meditation timers
- calculators
- quizzes
- recommendation engines
- booking engines
- payment systems

unless explicitly required by the PRD or approved by me.

---

# 7. DESIGN VS PRODUCT CONFLICTS

For every Stitch feature, classify it as one of:

### A. PRD REQUIRED

The PRD explicitly requires it.

Implement it.

### B. DESIGN SUPPORTING PRD

The PRD does not describe it word-for-word, but it is clearly necessary to faithfully implement the design.

Document the assumption.

### C. DESIGN-ONLY

The Stitch design contains something that is not supported by the PRD.

Do NOT automatically turn it into a product feature.

Flag it as:

**DESIGN-ONLY / REQUIRES PRODUCT DECISION**

### D. PRD REQUIRED BUT MISSING FROM STITCH

The PRD requires functionality that is not represented in the Stitch design.

Use the closest existing visual pattern and clearly document the extension.

If the extension is materially different, stop and request approval.

---

# 8. PAGE MAPPING

Create a mapping between the PRD and Stitch.

At minimum map:

| Product Page | Stitch Screen | Route | Main Purpose |
|---|---|---|---|
| Home | Home Page | `/` | Emotional introduction |
| Our Story | Our Story | `/our-story` | Philosophy and story |
| What We Offer | What We Offer | `/what-we-offer` | Offerings |
| EQ Audit | EQ Audit | `/eq-audit` | Core product |
| Inner Compass | Inner Compass | `/inner-compass` | Deeper development |
| Quiet Bloom | Quiet Bloom | `/quiet-bloom` | Retreat experience |
| Schools & Colleges | Schools | `/schools-colleges` | Institutional offering |
| Organisations | Organisations | `/organisations` | B2B offering |
| What Makes Us Different | Difference | `/what-makes-us-different` | Differentiation |
| Community | Community | `/community` | Community/ecosystem |
| Contact | Contact | `/contact` | Enquiries |
| Design System | Design System | global | UI foundation |

Verify these routes against `PRD.md` and existing project structure before implementation.

---

# 9. GLOBAL DESIGN SYSTEM

Extract the real design system from Stitch.

Document:

### Colors

Identify actual:

- background colors
- foreground colors
- primary colors
- secondary colors
- accent colors
- borders
- muted colors
- interactive states

Likely SoulfulI visual direction includes:

- warm ivory
- soft sand
- muted sage
- deep forest
- terracotta
- charcoal

But **use the actual Stitch values as the implementation source of truth**.

### Typography

Identify:

- display font
- heading font
- body font
- label font
- caption font
- font weights
- line heights
- letter spacing
- responsive sizes

### Spacing

Extract the spacing scale and section rhythm.

### Components

Identify reusable:

- Header
- Navigation
- Button
- Input
- Select
- Accordion
- Modal
- SectionHeading
- EditorialText
- ImageTextBlock
- QuoteBlock
- JourneyCard
- JourneyTimeline
- JourneyStep
- OfferingCard
- ProgramCard
- AuditQuestion
- ProgressIndicator
- InnerMap
- ResultsChart
- ContactForm
- EnquiryForm
- NewsletterForm

Only create components that are actually needed.

---

# 10. ARCHITECTURE

Before implementation, inspect the existing stack.

Expected direction:

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- shadcn/ui where appropriate
- Sanity where required
- Supabase where required
- Resend
- PostHog
- Sentry
- Vitest
- Playwright

But do NOT assume these are installed.

Inspect the actual project first.

Do not install packages simply because they are mentioned in the PRD.

Reuse existing dependencies whenever possible.

Prefer:

**simple monolithic Next.js architecture**

Do not introduce:

- microservices
- Kubernetes
- GraphQL
- Kafka
- Redis
- complex backend services
- unnecessary state-management frameworks
- custom CMS
- unnecessary infrastructure

unless explicitly required.

---

# 11. COMPONENT ARCHITECTURE

Before coding, identify:

### Global components

- Header
- Navigation
- Footer
- Button
- Typography
- Section heading
- Container
- Image treatment
- Form controls

### Shared editorial components

- Image + text
- Quote
- Journey step
- Timeline
- Offering card
- Program card
- CTA section

### Product components

- Audit question
- Progress indicator
- Results visualization
- Inner Map
- Recommendation/next-step section

### Form components

- Contact form
- Organisation enquiry
- School enquiry
- Retreat enquiry
- Newsletter/community signup

Avoid creating duplicate components that differ only slightly.

---

# 12. EQ AUDIT

Treat EQ Audit as a real product experience, not a simple form.

The PRD defines:

**48 questions**

across six dimensions:

1. Emotional Awareness
2. Emotional Regulation
3. Pattern Recognition
4. Empathy
5. Social Intelligence
6. Intentional Communication

Expected conceptual flow:

```text
EQ Audit Landing
      ↓
Start Audit
      ↓
Questions
      ↓
Progress
      ↓
Completion
      ↓
Secure Scoring
      ↓
Inner Map
      ↓
Results
      ↓
Recommended Next Step
```

Do not expose sensitive scoring logic unnecessarily on the client.

Do not claim clinical diagnosis.

Do not invent psychological claims.

Do not implement the full scoring engine during the planning stage.

---

# 13. INNER COMPASS

Inner Compass should communicate the deeper development journey.

Core pillars:

1. Know Yourself
2. Choose Yourself
3. See Others
4. Read the Room
5. Speak with Intention

Do not overbuild the product unless explicitly required.

The initial implementation should match the PRD and Stitch design.

---

# 14. QUIET BLOOM

Quiet Bloom is a premium retreat experience.

The initial product flow should remain simple unless the PRD explicitly requires more:

```text
Retreat information
        ↓
Interest / enquiry
        ↓
Human follow-up
```

Do not invent:

- retreat dates
- prices
- availability
- booking engine
- payment flow

unless provided in the PRD or approved later.

---

# 15. B2B

Schools & Colleges and Organisations are lead-generation experiences.

Respect the existing PRD forms.

Typical organisation enquiry data may include:

- name
- organisation/institution
- role
- email
- phone
- program interest
- audience size
- message

Do not add unnecessary fields.

---

# 16. COMMUNITY

Community should remain intentionally simple for MVP.

Do not build a custom social network.

Possible MVP functionality:

- newsletter/community signup
- events
- announcements
- registrations

Only implement what the PRD explicitly requires.

---

# 17. RESPONSIVE DESIGN

Inspect Stitch's desktop and mobile behavior if available.

The implementation must work properly on:

- mobile
- tablet
- desktop
- large desktop

Do not simply shrink desktop layouts.

Pay special attention to:

- typography
- section spacing
- navigation
- image cropping
- cards
- buttons
- forms
- horizontal overflow
- hero sections
- sticky elements
- touch targets

Mobile must feel intentionally designed.

---

# 18. ACCESSIBILITY

Maintain WCAG 2.2 AA principles.

Implement:

- semantic HTML
- keyboard navigation
- visible focus states
- correct labels
- accessible forms
- appropriate alt text
- sufficient contrast
- screen-reader support
- reduced-motion support
- accessible buttons
- accessible navigation
- accessible error messages

Do not sacrifice accessibility to reproduce a visual design.

---

# 19. PERFORMANCE

Target:

**Lighthouse Performance 90+**

and strong Core Web Vitals.

Use:

- Next/Image
- responsive images
- explicit image dimensions
- lazy loading
- appropriate image formats
- minimal client JavaScript
- Server Components where possible
- code splitting
- lightweight animation
- optimized fonts

Do not add huge autoplay background videos.

Do not load unnecessary libraries.

Do not use heavy animation everywhere.

---

# 20. MOTION

SoulfulI motion should feel:

- calm
- subtle
- slow
- intentional
- reflective

Prefer:

- fade
- reveal
- gentle movement
- subtle parallax
- restrained transitions

Avoid:

- aggressive scroll effects
- excessive bouncing
- flashy gradients
- gimmicky interactions
- excessive animation

Respect:

`prefers-reduced-motion`

---

# 21. SEO

Plan technical SEO for every public page:

- metadata
- title
- description
- canonical
- Open Graph
- semantic headings
- sitemap
- robots
- structured data where appropriate
- internal linking
- image alt text

Do not invent SEO claims or content.

---

# 22. SECURITY

Follow the security requirements in `AGENTS.md`.

Pay particular attention to:

- environment variables
- server-side secrets
- input validation
- form validation
- rate limiting
- secure cookies
- Supabase RLS where applicable
- authorization
- sensitive EQ results
- privacy
- database access
- API security

Never expose secret keys in client-side code.

---

# 23. DATA / CMS

Inspect the current project before deciding what belongs in:

### Sanity

Potential content:

- pages
- programs
- retreats
- stories/articles
- events
- testimonials
- FAQs
- people/facilitators

### Supabase

Potential product/application data:

- users
- audit sessions
- audit answers
- audit results
- program enquiries
- retreat enquiries
- organisation enquiries
- school enquiries
- community members
- newsletter subscribers
- registrations

Do not create schemas during the planning phase.

Do not create unnecessary tables.

---

# 24. ANALYTICS

Use the PRD's analytics requirements.

Potential events include:

- `page_view`
- `hero_cta_clicked`
- `eq_audit_started`
- `eq_audit_question_answered`
- `eq_audit_completed`
- `eq_results_viewed`
- `inner_compass_clicked`
- `quiet_bloom_clicked`
- `retreat_enquiry_started`
- `retreat_enquiry_submitted`
- `organization_enquiry_submitted`
- `school_enquiry_submitted`
- `community_signup`
- `newsletter_signup`

Do not track sensitive information unnecessarily.

---

# 25. IMPLEMENTATION PHASES

After inspecting the project, create a phased implementation plan.

Recommended structure:

## Phase 0 — Discovery

Read-only inspection.

## Phase 1 — Foundation

- design tokens
- typography
- global styles
- layout primitives
- shared components
- navigation
- responsive foundation

## Phase 2 — Marketing Pages

- Home
- Our Story
- What We Offer
- What Makes Us Different
- Contact

## Phase 3 — Product Experiences

- EQ Audit
- Inner Compass

## Phase 4 — Experiences

- Quiet Bloom
- Community

## Phase 5 — B2B

- Schools & Colleges
- Organisations

## Phase 6 — Integrations

Only where required:

- CMS
- database
- forms
- email
- analytics
- monitoring

## Phase 7 — EQ Audit Engine

Only after the UI and flow are approved.

## Phase 8 — Quality

- responsive QA
- accessibility
- performance
- SEO
- tests
- error handling
- design fidelity

Adjust these phases if inspection shows a better sequence.

---

# 26. TESTING PLAN

Before implementation, define:

### Unit tests

For:

- scoring logic
- utilities
- transformations
- validation

### Integration tests

For:

- forms
- database operations
- audit flow
- authentication where applicable

### E2E tests

At minimum:

- homepage
- navigation
- mobile navigation
- EQ Audit critical path
- enquiry forms
- community signup
- critical CTA flows

Use Playwright where available.

Use Vitest where appropriate.

---

# 27. DESIGN FIDELITY QA

After implementation, every Stitch screen must be compared against the implemented page.

Check:

### Layout

- section order
- widths
- spacing
- alignment
- image placement
- card sizes

### Typography

- font
- size
- weight
- line height
- letter spacing

### Colors

- backgrounds
- text
- borders
- accents

### Components

- buttons
- cards
- inputs
- navigation
- forms

### Responsive

- desktop
- tablet
- mobile

### Motion

- transitions
- reveals
- scroll behavior

The goal is:

**Stitch design intent → production implementation**

not:

**Stitch inspiration → completely new design.**

---

# 28. FILE/DIRECTORY DISCOVERY

During Phase 0 inspect at minimum:

```text
PRD.md
AGENTS.md
package.json
design/
src/
app/
components/
public/
styles/
lib/
hooks/
tests/
```

Only inspect paths that actually exist.

Also inspect:

- `next.config.*`
- `tailwind.config.*`
- `tsconfig.json`
- lint config
- prettier config
- environment examples
- testing config
- build scripts

Do not assume a particular directory structure.

---

# 29. EXISTING PROJECT FIRST

Before changing anything, answer:

- What already exists?
- What is already implemented?
- What is incomplete?
- What is reusable?
- What conflicts with the PRD?
- What conflicts with Stitch?
- What should remain untouched?
- What dependencies are already installed?
- What architecture is already established?
- What technical debt exists?
- What can be implemented without adding dependencies?

Do not rewrite working code unnecessarily.

---

# 30. REQUIRED PLANNING OUTPUT

After inspection, produce a detailed plan with these exact sections:

## A. PROJECT AUDIT

Describe the existing project.

## B. PRD SUMMARY

Summarize the actual product requirements.

## C. AGENTS RULES SUMMARY

List the implementation constraints.

## D. STITCH ANALYSIS

Analyze all 12 Stitch screens.

## E. STITCH ASSET ANALYSIS

List important images, icons, fonts, and external assets.

## F. DESIGN SYSTEM

Document:

- colors
- typography
- spacing
- components
- layout
- motion
- responsive behavior

## G. PAGE MAPPING

Map every PRD page to:

- Stitch screen
- route
- components
- assets
- interactions

## H. COMPONENT ARCHITECTURE

Show shared vs page-specific components.

## I. ROUTE ARCHITECTURE

Show the proposed route structure.

## J. DATA ARCHITECTURE

Describe what belongs in:

- static content
- Sanity
- Supabase
- server actions/API

## K. EQ AUDIT ARCHITECTURE

Describe the product flow and technical approach.

## L. FORM ARCHITECTURE

Describe:

- validation
- submission
- success
- error
- email
- persistence

## M. RESPONSIVE PLAN

Explain desktop/tablet/mobile behavior.

## N. ACCESSIBILITY PLAN

Explain WCAG implementation.

## O. PERFORMANCE PLAN

Explain image/font/JS/animation strategy.

## P. SEO PLAN

Explain page-level SEO.

## Q. SECURITY PLAN

Explain sensitive data and server-side handling.

## R. ANALYTICS PLAN

List events and where they occur.

## S. TESTING PLAN

List unit/integration/E2E coverage.

## T. IMPLEMENTATION PHASES

Give the exact order of implementation.

## U. DEPENDENCIES

List dependencies that are actually required.

Do NOT install them yet.

## V. RISKS

Identify technical/design/product risks.

## W. DESIGN/PRD CONFLICTS

Explicitly list every conflict.

## X. DESIGN-ONLY FEATURES

List Stitch features that are not supported by the PRD.

## Y. OPEN QUESTIONS

Only include questions that materially affect implementation.

## Z. FINAL RECOMMENDATION

Explain the recommended implementation strategy.

---

# 31. STOP CONDITION

After producing the plan:

**STOP.**

Do not continue automatically.

Do not start implementation.

Do not create files.

Do not modify files.

Do not install packages.

Do not run migrations.

Do not create database schemas.

Do not create CMS schemas.

Do not modify Stitch.

Do not write production code.

End your response with exactly:

> **Plan ready for approval. I have not modified the project.**

Wait for my explicit approval.

---

# 32. AFTER I APPROVE

Only after I explicitly approve the plan may you begin implementation.

When approved:

1. Re-read the relevant PRD sections.
2. Re-read the relevant AGENTS rules.
3. Re-check the Stitch screen being implemented.
4. Implement only the approved phase.
5. Use the Stitch design as the visual source of truth.
6. Reuse existing code where possible.
7. Keep changes minimal and focused.
8. Do not invent features.
9. Run typecheck.
10. Run lint.
11. Run relevant tests.
12. Check responsive behavior.
13. Check accessibility.
14. Check design fidelity.
15. Check performance.
16. Report exactly what changed.

Then wait for the next phase approval if requested.

---

# 33. IMPLEMENTATION REPORT FORMAT

After each approved implementation phase, report:

## Implemented

- ...

## Files Changed

- ...

## Components Added

- ...

## Routes Added

- ...

## Assets Added

- ...

## Dependencies Added

- ...

## Tests

- ...

## Accessibility

- ...

## Performance

- ...

## Stitch Fidelity

- ...

## PRD Requirements Completed

- ...

## Remaining Work

- ...

## Decisions / Assumptions

- ...

Do not hide deviations from the Stitch design or PRD.

---

# 34. FINAL QUALITY BAR

The finished SoulfulI product must satisfy all of these:

### Product

- follows PRD
- follows AGENTS
- no invented features
- correct user journeys
- correct business priorities

### Design

- faithful to Stitch
- consistent design system
- premium editorial quality
- calm and human
- responsive
- polished

### UX

- intuitive
- emotionally coherent
- clear CTA hierarchy
- excellent forms
- useful feedback
- no confusing interactions

### Engineering

- maintainable
- typed
- reusable
- minimal complexity
- secure
- tested

### Performance

- fast
- optimized images
- optimized fonts
- minimal JS
- strong Core Web Vitals

### Accessibility

- keyboard accessible
- semantic
- screen-reader friendly
- correct contrast
- reduced-motion support

### SEO

- metadata
- semantic structure
- indexable pages
- sitemap
- structured data where appropriate

### Brand

The site must feel like:

**SoulfulI**

not:

- a template
- a generic wellness app
- a SaaS dashboard
- an AI-generated website
- a meditation platform
- a corporate consultancy

The website should communicate:

**Understand yourself. Connect more deeply. Live with intention.**

---

# FINAL COMMAND

Start now with **DISCOVERY ONLY**.

Read and inspect:

- `PRD.md`
- `AGENTS.md`
- the entire `design/` directory
- the installed frontend skill
- the existing project
- the connected Stitch project
- all 12 Stitch screens
- their code
- their assets
- their visual system

Use Stitch MCP and `curl -L` where appropriate to inspect/download hosted assets.

Do NOT modify anything.

Do NOT create anything.

Do NOT install anything.

Do NOT implement anything.

Produce the complete planning report described above.

Then STOP.

**Plan ready for approval. I have not modified the project.**