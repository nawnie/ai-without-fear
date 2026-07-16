export const contactEmail = 'sohagan.dev@aiembeddedsystems.com'

export function makeContactHref(subject, bodyLines = []) {
  const body = bodyLines.join('\n')
  return `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const contactHref = makeContactHref('Community AI Readiness Lab information request', [
  'Hi Shawn,',
  '',
  'I would like more information about the Community AI Readiness Lab.',
  '',
  'Organization or community:',
  'Who we serve:',
  'What our team wants help with:',
  'What would make participation possible:',
])

export const sessions = [
  {
    number: '01',
    slug: 'session-1',
    title: 'AI Without the Fog Machine',
    detail: 'Build a plain-language picture of what current AI tools can and cannot do.',
    purpose: 'Replace fear, hype, and vague assumptions with a useful mental model.',
    outcome: 'A use, verify, or stop decision rule',
    resourceHref: '/programs/session-1/',
    resourceLabel: 'Open the Session 1 guide',
    objectives: [
      'Describe generative AI as a system that constructs output from learned patterns.',
      'Separate a fluent response from verified knowledge.',
      'Name the human responsibilities that remain after AI is introduced.',
      'Identify low-risk tasks and tasks that need more review.',
    ],
    agenda: [
      ['Start with the room', 'Ask where AI already touches the work, including built-in and informal use.'],
      ['Build the mental model', 'Walk from input to model and tools, output, then human review.'],
      ['Sort the work', 'Classify example tasks as useful now, needs safeguards, or do not use yet.'],
      ['Name the decision', 'Write down one safe assist, one use to review, and one task to pause.'],
    ],
    worksheet: [
      'Where may AI already appear in our work?',
      'What low-risk task might it assist with?',
      'What task should we pause, and why?',
    ],
  },
  {
    number: '02',
    slug: 'session-2',
    title: 'The Data Traffic Light',
    detail: 'Sort information before deciding what should ever enter an AI tool.',
    purpose: 'Give teams a quick way to pause, classify information, and ask for authority.',
    outcome: 'A draft organizational data rule',
    resourceHref: '/programs/session-2/',
    resourceLabel: 'Open the Session 2 guide',
    objectives: [
      'Classify information as green, yellow, or red.',
      'Separate public availability from organizational permission.',
      'Notice when harmless facts become identifying after they are combined.',
      'Pause and escalate uncertain cases.',
    ],
    agenda: [
      ['Show the combination problem', 'Join names, dates, locations, and circumstances to show how context changes risk.'],
      ['Classify examples', 'Sort public, internal, sensitive, fictional, and uncertain information.'],
      ['Use the uncertainty rule', 'Treat unclear information as yellow or red until someone with authority reviews it.'],
      ['Map organizational data', 'List categories only. Do not copy the underlying data into the worksheet.'],
    ],
    worksheet: [
      'List three examples of green information.',
      'List three yellow information categories and the role that may approve them.',
      'List three red categories without writing any sensitive information.',
    ],
  },
  {
    number: '03',
    slug: 'session-3',
    title: 'Prompt, Review, Verify',
    detail: 'Write reviewable instructions and check the result before anyone relies on it.',
    purpose: 'Teach prompting as task specification and verification as part of the same job.',
    outcome: 'A reusable prompt and review checklist',
    resourceHref: '/programs/session-3/',
    resourceLabel: 'Open the Session 3 guide',
    objectives: [
      'Write a prompt with task, context, audience, constraints, sources, and output format.',
      'Separate creative generation from factual retrieval.',
      'Identify claims that need outside verification.',
      'Improve an output by changing one instruction at a time.',
    ],
    agenda: [
      ['Compare two prompts', 'Find which instructions make the work easier to review.'],
      ['Run one guided task', 'Use the same approved source material to create a short public draft.'],
      ['Review in pairs', 'Mark altered facts, vague wording, unsupported additions, and missing context.'],
      ['Change one thing', 'Revise one instruction, then compare the result.'],
    ],
    worksheet: [
      'Write the task, audience, constraints, allowed sources, and output format.',
      'List the names, dates, numbers, quotes, and links a person must check.',
      'Record one instruction change and what it changed in the output.',
    ],
  },
  {
    number: '04',
    slug: 'session-4',
    title: 'Tool and Vendor Check',
    detail: 'Review account ownership, data handling, cost, export, and fallback before approval.',
    purpose: 'Help organizations choose tools from evidence instead of familiarity or sales copy.',
    outcome: 'A dated tool review and owner',
    resourceHref: '/programs/session-4/',
    resourceLabel: 'Open the Session 4 guide',
    objectives: [
      'Inventory AI tools used by staff or volunteers.',
      'Compare tools with the same questions.',
      'Check account ownership, retention, training use, deletion, export, and admin controls.',
      'Separate what a tool can do from what the organization permits.',
    ],
    agenda: [
      ['Inventory the tools', 'Include AI built into office suites, browsers, phones, design tools, and customer systems.'],
      ['Check one tool', 'Use current vendor documentation and record the date checked.'],
      ['Name the risks', 'Review actions, connectors, records, account recovery, and the human fallback.'],
      ['Make a dated decision', 'Approve, limit, pilot, prohibit, or request more information.'],
    ],
    worksheet: [
      'Who owns the account, and can the organization recover it?',
      'What happens to prompts, uploads, history, and deleted content?',
      'Who approves the decision, and when will it be checked again?',
    ],
  },
  {
    number: '05',
    slug: 'session-5',
    title: 'The Policy Sprint',
    detail: 'Draft a short interim policy that tells people what to do at work.',
    purpose: 'Turn the prior decisions into a policy that leadership can review and revise.',
    outcome: 'A one-page interim AI policy',
    resourceHref: '/programs/session-5/',
    resourceLabel: 'Open the Session 5 guide',
    objectives: [
      'Define approved, restricted, and prohibited uses.',
      'Assign ownership for tool approval.',
      'Set human review and disclosure rules.',
      'Name an incident reporting path and review date.',
    ],
    agenda: [
      ['Read the policy anatomy', 'Cover purpose, tools, data, decisions, review, disclosure, incidents, and ownership.'],
      ['Draft one section at a time', 'Use the decisions already made in Sessions 1 through 4.'],
      ['Test three cases', 'Check personal accounts, internal notes, and high-impact recommendations.'],
      ['Ask the Monday question', 'Would a new staff member know what to do at the start of the week?'],
    ],
    worksheet: [
      'Which uses are approved, restricted, or prohibited?',
      'Which role approves tools and output?',
      'How are incidents reported, and when is the policy reviewed?',
    ],
  },
  {
    number: '06',
    slug: 'session-6',
    title: 'One Safe Workflow',
    detail: 'Test one low-risk use with allowed inputs, named review, and a fallback.',
    purpose: 'Finish with a small workflow that a team can explain, review, and stop.',
    outcome: 'A documented workflow and 30-day plan',
    resourceHref: '/programs/session-6/',
    resourceLabel: 'Open the Session 6 guide',
    objectives: [
      'Choose a low-impact, reversible, reviewable workflow.',
      'Define inputs, outputs, tools, review steps, records, and fallback.',
      'Test with public, fictional, or sanitized information.',
      'Document what worked, what failed, and what happens next.',
    ],
    agenda: [
      ['Pick the workflow', 'Choose work based on green data that is small enough to test in one session.'],
      ['Generate options', 'Create several drafts from the same approved inputs.'],
      ['Select and refine', 'Score the options, choose one, and correct one problem at a time.'],
      ['Finish the record', 'Name the owner, checks, approval, storage, retention, fallback, and next review.'],
    ],
    worksheet: [
      'What is the purpose, owner, approved tool, and allowed input?',
      'Which checks and approval step are required?',
      'Where is the output kept, what is retained, and what is the fallback?',
    ],
  },
]

export const outcomes = [
  'A simple data classification',
  'An AI tool inventory',
  'An interim AI policy',
  'A named human owner',
  'One documented low-risk workflow',
  'A 30-day next-step plan',
]

export const guideLibrary = [
  {
    title: 'Facilitator guide',
    description: 'Room setup, delivery rules, accessibility, sensitive-information response, and closeout.',
    href: '/guides/facilitator/',
    format: 'Read and download',
  },
  {
    title: 'Learner workbook',
    description: 'Print-ready worksheets for all six sessions and the 30-day action plan.',
    href: '/guides/workbook/',
    format: 'Print and download',
  },
  {
    title: 'Nonprofit AI safety kit',
    description: 'An interim policy starter, Data Traffic Light, review checklist, tool review, and incident log.',
    href: '/guides/safety-kit/',
    format: 'Copy and adapt',
  },
  {
    title: 'Presentation starter',
    description: 'A browser outline and editable PowerPoint draft for running your own community workshop.',
    href: '/guides/presentation/',
    format: 'View and download',
  },
  {
    title: 'Model parameter explainer',
    description: 'A plain-language analogy followed by the technical details for learners who want them.',
    href: '/guides/parameters/',
    format: 'Technical guide',
  },
  {
    title: 'Sources and further reading',
    description: 'Current first-party references used for risk, privacy, vendor, and verification guidance.',
    href: '/guides/sources/',
    format: 'External references',
  },
]

export const audiences = [
  {
    id: 'nonprofits',
    title: 'Nonprofits and community groups',
    copy: 'Small teams can document tool use, protect client and donor information, and test one low-risk workflow without hiring a technology department.',
  },
  {
    id: 'libraries',
    title: 'Libraries and adult learners',
    copy: 'Public learning settings need plain explanations, account-free participation options, and examples that do not expose anyone’s private information.',
  },
  {
    id: 'workforce',
    title: 'Workforce and education partners',
    copy: 'Teams can teach useful drafting and research habits while keeping student, applicant, and employee decisions with responsible people.',
  },
  {
    id: 'public-service',
    title: 'Public-service teams',
    copy: 'Administrative uses need records, source checks, approved tools, and a clear line between assistance and public authority.',
  },
]

export const sourceLinks = [
  {
    title: 'NIST AI Risk Management Framework',
    href: 'https://www.nist.gov/itl/ai-risk-management-framework',
    note: 'A voluntary framework for governing, mapping, measuring, and managing AI risk.',
  },
  {
    title: 'NIST Generative AI Profile',
    href: 'https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf',
    note: 'Risk considerations and suggested actions specific to generative AI.',
  },
  {
    title: 'FTC: Keep your AI claims in check',
    href: 'https://www.ftc.gov/business-guidance/blog/2023/02/keep-your-ai-claims-check',
    note: 'Why AI performance and benefit claims need evidence.',
  },
  {
    title: 'CISA: Stay safe online when using AI',
    href: 'https://www.cisa.gov/sites/default/files/2024-09/Secure-Our-World-Using-AI-Tip-Sheet.pdf',
    note: 'A short public guide to protecting personal information and checking AI output.',
  },
  {
    title: 'Microsoft 365 Copilot enterprise data protection',
    href: 'https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection',
    note: 'Current Microsoft documentation on commercial terms, data use, permissions, and plan-dependent controls.',
  },
]
