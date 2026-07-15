export const TORCHIE_ASSET_URL = 'https://raw.githubusercontent.com/nawnie/ai-without-fear/main/AIWF_Atlas_VOL1_machine_facing_v3_3_api_cli_guide/16_VISUAL_ASSETS/torchie_callouts/Aiwf%20logo.png';
export const TRAINING_SOURCE_URL = 'https://github.com/nawnie/ai-without-fear/blob/agent/community-ai-readiness-lab-v0.1/training/community-ai-readiness-lab';
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'hello@ai-wf.org';
export const GITHUB_URL = 'https://github.com/nawnie/ai-without-fear';

export const audiences = [
  {
    slug: 'veterans',
    icon: 'service',
    title: 'Veterans & military families',
    short: 'Practical AI skills for career transitions, entrepreneurship, community service, and changing workplaces.',
    promise: 'Translate military judgment, discipline, and mission focus into safe, useful AI-assisted workflows.',
    useCases: ['Resume and interview preparation', 'Small-business planning', 'Public-benefit research', 'Workplace productivity'],
    boundary: 'No benefit, health, legal, or financial decision should be delegated to an AI system.',
    deliverable: 'A personal AI use plan with source-checking and privacy rules.',
  },
  {
    slug: 'educators',
    icon: 'education',
    title: 'Educators & school teams',
    short: 'Plain-language training for classroom, administrative, and professional use with strong student-data boundaries.',
    promise: 'Help educators use AI as a preparation and accessibility tool without treating student information as training fuel.',
    useCases: ['Lesson planning from approved sources', 'Reading-level adaptation', 'Administrative drafting', 'Tool-policy review'],
    boundary: 'Student, child, disability, disciplinary, and family records remain protected unless an approved system and policy explicitly allow use.',
    deliverable: 'A teacher-ready review checklist and draft responsible-use rule.',
  },
  {
    slug: 'government',
    icon: 'civic',
    title: 'Government & public service',
    short: 'Vendor-neutral readiness training that protects public trust, records, sensitive information, and accountability.',
    promise: 'Start with low-risk administrative work, clear records, human approval, and a named owner for every pilot.',
    useCases: ['Public information drafting', 'Meeting preparation', 'Accessibility support', 'Vendor and workflow review'],
    boundary: 'AI should not quietly become the final authority for eligibility, enforcement, employment, or public-safety decisions.',
    deliverable: 'A low-risk pilot charter with review gates and a human fallback.',
  },
  {
    slug: 'nonprofits',
    icon: 'community',
    title: 'Nonprofits & community groups',
    short: 'Capacity-building for organizations that need useful workflows and clear policy without a dedicated technology team.',
    promise: 'Turn informal AI use into a small, documented practice that protects clients, donors, staff, and the mission.',
    useCases: ['Public event copy', 'Volunteer materials', 'Board briefing drafts', 'Public research organization'],
    boundary: 'Client, donor, personnel, health, legal, and financial data stay out of unapproved tools.',
    deliverable: 'An interim AI policy, tool inventory, and one documented safe workflow.',
  },
];

export const sessions = [
  {
    number: '01',
    slug: 'session-1',
    title: 'AI Without the Fog Machine',
    summary: 'Replace fear, hype, and vague assumptions with a useful mental model and a human-review gate.',
    outcome: 'A use, verify, or stop decision rule',
    href: '/programs/session-1/',
    ready: true,
  },
  {
    number: '02',
    slug: 'session-2',
    title: 'The Data Traffic Light',
    summary: 'Classify information as green, yellow, or red before it reaches any AI tool.',
    outcome: 'A draft organizational data rule',
    href: '/programs/session-2/',
    ready: true,
  },
  {
    number: '03',
    slug: 'session-3',
    title: 'Prompt, Review, Verify',
    summary: 'Treat prompting as task specification and verification as part of the same workflow.',
    outcome: 'A reusable prompt and review checklist',
    ready: false,
  },
  {
    number: '04',
    slug: 'session-4',
    title: 'Tool and Vendor Check',
    summary: 'Inventory tools and evaluate account ownership, retention, training use, connectors, export, and fallback.',
    outcome: 'A completed tool review',
    ready: false,
  },
  {
    number: '05',
    slug: 'session-5',
    title: 'The Policy Sprint',
    summary: 'Turn learning into a one-page interim policy that leadership can review and use.',
    outcome: 'An interim AI policy',
    ready: false,
  },
  {
    number: '06',
    slug: 'session-6',
    title: 'One Safe Workflow',
    summary: 'Select, test, document, and govern one low-risk AI-assisted organizational workflow.',
    outcome: 'A documented workflow and 30-day plan',
    ready: false,
  },
];

export const programSteps = [
  { number: '01', title: 'Understand', copy: 'Learn what modern AI can do, where it fails, and why fluent output can still be wrong.' },
  { number: '02', title: 'Classify', copy: 'Decide what information can enter an approved tool and what requires protection or permission.' },
  { number: '03', title: 'Practice', copy: 'Test one low-risk task using public, fictional, or deliberately sanitized information.' },
  { number: '04', title: 'Govern', copy: 'Document ownership, human review, prohibited uses, incident response, and the next decision.' },
];

export const pilotTargets = [
  { value: '10', label: 'community organizations' },
  { value: '20–30', label: 'learners in one cohort' },
  { value: '8+', label: 'draft AI policies' },
  { value: '10', label: 'documented safe workflows' },
  { value: '30 / 90', label: 'day follow-up checkpoints' },
];

export const pathways = [
  { number: '01', title: 'Sponsor a pilot cohort', copy: 'Underwrite the six-session lab for organizations that would otherwise be priced out of practical training.' },
  { number: '02', title: 'Fund access seats', copy: 'Support veterans, educators, rural learners, and community leaders with no-cost participation and materials.' },
  { number: '03', title: 'Host a local lab', copy: 'Provide a trusted venue, recruitment support, connectivity, accommodations, or staff time.' },
  { number: '04', title: 'Become a formation partner', copy: 'Help with fiscal sponsorship, evaluation, curriculum review, governance, or nonprofit formation.' },
];

export const faqs = [
  {
    question: 'Is AI Without Fear already a 501(c)(3) nonprofit?',
    answer: 'Not yet. AI Without Fear is an emerging public-benefit education project preparing for nonprofit formation. We are seeking pilot partners, advisors, and fiscal-sponsorship conversations. Contributions are not represented as tax-deductible unless processed through an approved charitable sponsor.',
  },
  {
    question: 'Is the training tied to one AI company or product?',
    answer: 'No. The community curriculum is vendor-neutral. It teaches transferable practices such as source verification, data classification, human review, tool ownership, and workflow documentation.',
  },
  {
    question: 'Do participants need technical experience?',
    answer: 'No. The opening sessions are designed for beginners, decision-makers, educators, program staff, public servants, volunteers, and community members. Technical electives can be added later.',
  },
  {
    question: 'What does a pilot organization leave with?',
    answer: 'A tool inventory, Data Traffic Light, human-review checklist, draft interim AI policy, one documented low-risk workflow, leadership briefing, and a 30-day action plan.',
  },
];

export const resources = [
  {
    title: 'Sessions 1 & 2 demo deck',
    copy: 'A polished facilitator deck showing the first public demonstration sessions.',
    href: 'https://github.com/nawnie/ai-without-fear/blob/agent/community-ai-readiness-lab-v0.1/training/community-ai-readiness-lab/SLIDE_DECK_OUTLINE.md',
    type: 'Outline',
  },
  {
    title: 'Data Traffic Light kit',
    copy: 'The green, yellow, and red information-classification reference and policy template.',
    href: 'https://github.com/nawnie/ai-without-fear/blob/agent/community-ai-readiness-lab-v0.1/training/community-ai-readiness-lab/NONPROFIT_AI_SAFETY_KIT.md#2-data-traffic-light-card',
    type: 'Markdown',
  },
  {
    title: 'Learner workbook',
    copy: 'Participant worksheets for the two demonstration sessions.',
    href: 'https://github.com/nawnie/ai-without-fear/blob/agent/community-ai-readiness-lab-v0.1/training/community-ai-readiness-lab/LEARNER_WORKBOOK.md',
    type: 'Markdown',
  },
  {
    title: 'AIWF research and source layer',
    copy: 'The technical and governance foundation behind the wider AIWF teaching system.',
    href: 'https://github.com/nawnie/ai-without-fear',
    type: 'GitHub',
  },
];
