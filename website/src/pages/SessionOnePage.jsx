import { useState } from 'react';
import { CONTACT_EMAIL, TRAINING_SOURCE_URL } from '../data.js';
import { ButtonLink, Icon, PageHero, PageShell, PartnerStrip, SectionHeading, TextLink } from '../components.jsx';

const quizTasks = [
  {
    task: 'Draft three public event descriptions from already-approved facts.',
    answer: 'useful',
    feedback: 'Suitable low-risk work when the tool is approved and a person checks every fact before publishing.',
  },
  {
    task: 'Summarize a public city-council agenda for a community newsletter.',
    answer: 'safeguards',
    feedback: 'Potentially useful, but the summary must be compared with the original agenda and clearly separated from official records.',
  },
  {
    task: 'Decide whether a client qualifies for emergency assistance.',
    answer: 'stop',
    feedback: 'Do not delegate a high-impact eligibility decision. An accountable human process must remain in control.',
  },
  {
    task: 'Rewrite a published handout at a lower reading level.',
    answer: 'safeguards',
    feedback: 'Useful with safeguards. A qualified reviewer must confirm that meaning, safety information, and source attribution were preserved.',
  },
  {
    task: 'Upload donor records to generate a fundraising plan.',
    answer: 'stop',
    feedback: 'Stop. Donor identities and financial context are sensitive data and should not enter an unapproved AI system.',
  },
  {
    task: 'Brainstorm volunteer-recruitment themes using fictional examples.',
    answer: 'useful',
    feedback: 'A good low-risk starting point. The organization still chooses the message and reviews tone before use.',
  },
];

const answers = [
  { id: 'useful', label: 'Useful now' },
  { id: 'safeguards', label: 'Needs safeguards' },
  { id: 'stop', label: 'Do not use yet' },
];

function SessionAside() {
  return (
    <div className="session-meta-card session-meta-card--one">
      <div><Icon name="clock" size={22} /><span><strong>90 minutes</strong><small>Facilitated workshop</small></span></div>
      <div><Icon name="people" size={22} /><span><strong>Beginner-safe</strong><small>No technical background required</small></span></div>
      <div><Icon name="shield" size={22} /><span><strong>Sanitized practice</strong><small>No confidential data or personal account required</small></span></div>
      <a href={`${TRAINING_SOURCE_URL}/SLIDE_DECK_OUTLINE.md`} target="_blank" rel="noreferrer">Open the demo deck <Icon name="download" size={17} /></a>
    </div>
  );
}

function MentalModel() {
  return (
    <section className="section section--paper">
      <div className="shell model-layout">
        <div>
          <SectionHeading
            eyebrow="The usable mental model"
            title="AI creates an output. A human decides what happens next."
            body="The workshop removes the mythology and replaces it with four visible stages. The human-review gate is not decorative. It is where organizational responsibility lives."
          />
          <div className="field-note field-note--paper">
            <Icon name="info" size={21} />
            <p><strong>Capability does not equal permission.</strong> A tool may be able to perform a task that the organization should not allow it to perform.</p>
          </div>
        </div>
        <div className="model-flow" aria-label="Input to model and tools to output to human review">
          <div><span>01</span><Icon name="file" size={25} /><strong>Input</strong><small>Prompt, file, image, or data</small></div>
          <Icon name="arrow" size={21} />
          <div><span>02</span><Icon name="spark" size={25} /><strong>Model & tools</strong><small>The system transforms the input</small></div>
          <Icon name="arrow" size={21} />
          <div><span>03</span><Icon name="book" size={25} /><strong>Output</strong><small>Text, image, code, summary, or action</small></div>
          <Icon name="arrow" size={21} />
          <div className="model-flow__review"><span>04</span><Icon name="shield" size={25} /><strong>Human review</strong><small>Verify, approve, revise, or stop</small></div>
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const steps = [
    ['00–10', 'Welcome and confidence check', 'Where is AI already touching your work, officially or informally?'],
    ['10–30', 'Plain-language lesson', 'What generative AI does, what it does not know, and why fluent output can still be wrong.'],
    ['30–65', 'Useful, risky, or unclear', 'Classify realistic tasks and explain the human responsibility in each case.'],
    ['65–80', 'Organizational application', 'Name one safe assist, one informal use, and one task that should pause.'],
    ['80–90', 'Debrief and exit check', 'Complete the decision rule: use, verify, or stop.'],
  ];

  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Workshop flow"
          title="A complete 90-minute demonstration"
          body="Short instruction, visible failure examples, guided decisions, and one documented takeaway."
        />
        <div className="timeline-list">
          {steps.map(([time, title, copy], index) => (
            <div className="timeline-row" key={time}>
              <span className="timeline-row__time">{time}</span>
              <span className="timeline-row__marker">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{title}</h3><p>{copy}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TaskQuiz() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const task = quizTasks[index];
  const correct = choice === task.answer;

  function choose(answer) {
    setChoice(answer);
  }

  function next() {
    setIndex((current) => (current + 1) % quizTasks.length);
    setChoice(null);
  }

  return (
    <section className="section section--paper section--interactive">
      <div className="shell interactive-layout">
        <div>
          <SectionHeading
            eyebrow="Try a piece of the workshop"
            title="Useful now, needs safeguards, or do not use yet?"
            body="Choose the safest organizational answer. The exercise is local to this page and does not collect or send your response."
          />
          <p className="progress-label">Scenario {index + 1} of {quizTasks.length}</p>
        </div>
        <div className="quiz-card">
          <div className="quiz-card__prompt"><Icon name="target" size={24} /><p>{task.task}</p></div>
          <div className="quiz-options" role="group" aria-label="Choose a risk category">
            {answers.map((answer) => (
              <button
                key={answer.id}
                type="button"
                className={`quiz-option quiz-option--${answer.id} ${choice === answer.id ? 'quiz-option--selected' : ''}`}
                onClick={() => choose(answer.id)}
                aria-pressed={choice === answer.id}
              >
                {answer.label}
              </button>
            ))}
          </div>
          {choice ? (
            <div className={`quiz-feedback ${correct ? 'quiz-feedback--correct' : 'quiz-feedback--review'}`} aria-live="polite">
              <strong>{correct ? 'Good call.' : 'Take another look.'}</strong>
              <p>{task.feedback}</p>
              <button type="button" onClick={next}>Next scenario <Icon name="arrow" size={17} /></button>
            </div>
          ) : (
            <div className="quiz-hint"><Icon name="info" size={18} /> Ask: Is the work low impact, reversible, based on allowed data, and easy for a human to review?</div>
          )}
        </div>
      </div>
    </section>
  );
}

function Takeaway() {
  return (
    <section className="section">
      <div className="shell takeaway-layout">
        <div className="takeaway-card">
          <p className="eyebrow">Session takeaway</p>
          <h2>Use. Verify. Stop.</h2>
          <div className="takeaway-rule">
            <div><strong>Use</strong><p>Low-impact work using allowed information and an approved tool.</p></div>
            <div><strong>Verify</strong><p>Factual, public-facing, or consequential output before it is used.</p></div>
            <div><strong>Stop</strong><p>Sensitive data, high-impact decisions, unclear permission, or no accountable reviewer.</p></div>
          </div>
        </div>
        <div className="takeaway-copy">
          <SectionHeading
            eyebrow="What learners leave with"
            title="A decision rule they can explain to someone else"
            body="The goal is not to memorize architecture. It is to recognize a safe assist, a risky shortcut, and the moment a human must take control."
            compact
          />
          <ul className="check-list">
            <li><Icon name="check" size={18} /> One useful low-risk task</li>
            <li><Icon name="check" size={18} /> One informal use to review</li>
            <li><Icon name="check" size={18} /> One prohibited or paused use</li>
            <li><Icon name="check" size={18} /> A plain-language explanation of human review</li>
          </ul>
          <TextLink href="/programs/session-2/">Continue to the Data Traffic Light</TextLink>
        </div>
      </div>
    </section>
  );
}

export default function SessionOnePage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Session 01 • Demonstration ready"
        title="AI Without the Fog Machine"
        body="A plain-language orientation to what generative AI does, what it does not reliably do, and why human judgment remains the final control surface."
        aside={<SessionAside />}
      >
        <ButtonLink href={`mailto:${CONTACT_EMAIL}?subject=Host%20AIWF%20Session%201`}>Ask about hosting</ButtonLink>
        <ButtonLink href={`${TRAINING_SOURCE_URL}/LEARNER_WORKBOOK.md`} variant="secondary" icon="download" external>Open learner handouts</ButtonLink>
      </PageHero>
      <MentalModel />
      <Timeline />
      <TaskQuiz />
      <Takeaway />
      <PartnerStrip title="Ready to show this session to your team or community?" copy="The demonstration can be delivered alone or paired with Session 2 for a practical half-day introduction." />
    </PageShell>
  );
}
