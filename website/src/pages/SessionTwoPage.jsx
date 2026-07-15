import { useState } from 'react';
import { CONTACT_EMAIL, TRAINING_SOURCE_URL } from '../data.js';
import { ButtonLink, Icon, PageHero, PageShell, PartnerStrip, SectionHeading, TextLink } from '../components.jsx';

const dataScenarios = [
  {
    item: 'Published event date, time, location, and accessibility details',
    answer: 'green',
    feedback: 'Green when the information is already approved for public use and the tool itself is approved.',
  },
  {
    item: 'Draft budget with no names, account numbers, or protected program details',
    answer: 'yellow',
    feedback: 'Yellow. It is internal and context-sensitive. Use requires an approved tool, defined purpose, and organizational permission.',
  },
  {
    item: 'Client intake form containing contact and health information',
    answer: 'red',
    feedback: 'Red. This contains identifying and health information and should not enter an unapproved AI system.',
  },
  {
    item: 'Fictional volunteer schedule created only for a workshop exercise',
    answer: 'green',
    feedback: 'Green. Fictional and sanitized examples are preferred for training and testing.',
  },
  {
    item: 'Internal meeting notes about a possible program expansion',
    answer: 'yellow',
    feedback: 'Yellow. The notes are non-public and may contain strategic or identifying context.',
  },
  {
    item: 'Password, API key, access token, or recovery code',
    answer: 'red',
    feedback: 'Red. Credentials should never be placed into a general AI prompt or workshop exercise.',
  },
];

const categories = [
  { id: 'green', label: 'Green', copy: 'Public, fictional, sanitized, or already approved' },
  { id: 'yellow', label: 'Yellow', copy: 'Internal, uncertain, or context-sensitive' },
  { id: 'red', label: 'Red', copy: 'Sensitive, regulated, confidential, identifying, or credential data' },
];

function SessionAside() {
  return (
    <div className="session-meta-card session-meta-card--two">
      <div><Icon name="clock" size={22} /><span><strong>90 minutes</strong><small>Facilitated workshop</small></span></div>
      <div><Icon name="shield" size={22} /><span><strong>Classification first</strong><small>Data rules before prompt technique</small></span></div>
      <div><Icon name="people" size={22} /><span><strong>Organization-ready</strong><small>Ends with an approval owner and draft rule</small></span></div>
      <a href={`${TRAINING_SOURCE_URL}/NONPROFIT_AI_SAFETY_KIT.md#2-data-traffic-light-card`} target="_blank" rel="noreferrer">Open the printable poster <Icon name="download" size={17} /></a>
    </div>
  );
}

function TrafficModel() {
  return (
    <section className="section section--paper">
      <div className="shell">
        <SectionHeading
          eyebrow="The classification model"
          title="Decide what the information is before deciding what the tool can do"
          body="The Data Traffic Light is a fast pause mechanism. It does not replace privacy, legal, security, contractual, or professional review. It makes the need for that review visible."
        />
        <div className="traffic-columns">
          {categories.map((category) => (
            <article className={`traffic-column traffic-column--${category.id}`} key={category.id}>
              <div className="traffic-column__header"><span className="traffic-lamp" /><h3>{category.label}</h3></div>
              <p>{category.copy}</p>
              <ul>
                {category.id === 'green' ? <>
                  <li>Public website text</li><li>Approved event details</li><li>Fictional examples</li><li>Sanitized templates</li>
                </> : null}
                {category.id === 'yellow' ? <>
                  <li>Unpublished plans</li><li>Internal procedures</li><li>Draft budgets</li><li>Meeting notes</li>
                </> : null}
                {category.id === 'red' ? <>
                  <li>Credentials and access tokens</li><li>Health or student information</li><li>Donor, client, or personnel identities</li><li>Banking, tax, legal, or investigation details</li>
                </> : null}
              </ul>
              <strong className="traffic-column__rule">
                {category.id === 'green' ? 'Use only in approved tools.' : category.id === 'yellow' ? 'Pause, define the purpose, and get permission.' : 'Do not enter without explicit authorization and appropriate controls.'}
              </strong>
            </article>
          ))}
        </div>
        <div className="uncertainty-rule"><Icon name="info" size={22} /><p><strong>Uncertain means yellow or red until reviewed.</strong> “Probably fine” is not a data-classification method. It is a small sentence wearing a hard hat it did not earn.</p></div>
      </div>
    </section>
  );
}

function CombinedRisk() {
  return (
    <section className="section">
      <div className="shell combined-risk-layout">
        <div>
          <SectionHeading
            eyebrow="The combination problem"
            title="Harmless pieces can become sensitive when joined"
            body="A first name may be harmless. A date may be harmless. A location may be harmless. Together with a circumstance, they may identify a vulnerable person."
          />
          <TextLink href={`${TRAINING_SOURCE_URL}/NONPROFIT_AI_SAFETY_KIT.md#2-data-traffic-light-card`} icon="download" external>Download the classroom poster</TextLink>
        </div>
        <div className="combination-diagram" aria-label="Individual data points combining into sensitive information">
          <div className="combination-chips"><span>First name</span><span>Date</span><span>Location</span><span>Program</span><span>Circumstance</span></div>
          <Icon name="arrow" size={25} />
          <div className="combination-result"><Icon name="lock" size={30} /><strong>Potentially identifying record</strong><small>Classify the combination, not only each piece.</small></div>
        </div>
      </div>
    </section>
  );
}

function DataQuiz() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState(null);
  const scenario = dataScenarios[index];
  const correct = choice === scenario.answer;

  function next() {
    setIndex((current) => (current + 1) % dataScenarios.length);
    setChoice(null);
  }

  return (
    <section className="section section--paper section--interactive">
      <div className="shell interactive-layout">
        <div>
          <SectionHeading
            eyebrow="Try the classifier"
            title="Green, yellow, or red?"
            body="Choose the safest category. This exercise stays in your browser and does not collect or transmit your response."
          />
          <p className="progress-label">Example {index + 1} of {dataScenarios.length}</p>
        </div>
        <div className="quiz-card quiz-card--traffic">
          <div className="quiz-card__prompt"><Icon name="file" size={24} /><p>{scenario.item}</p></div>
          <div className="traffic-quiz-options" role="group" aria-label="Choose a data category">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`traffic-quiz-option traffic-quiz-option--${category.id} ${choice === category.id ? 'traffic-quiz-option--selected' : ''}`}
                onClick={() => setChoice(category.id)}
                aria-pressed={choice === category.id}
              >
                <span className="traffic-lamp" />
                <strong>{category.label}</strong>
                <small>{category.copy}</small>
              </button>
            ))}
          </div>
          {choice ? (
            <div className={`quiz-feedback ${correct ? 'quiz-feedback--correct' : 'quiz-feedback--review'}`} aria-live="polite">
              <strong>{correct ? 'Correct classification.' : 'Pause and reconsider.'}</strong>
              <p>{scenario.feedback}</p>
              <button type="button" onClick={next}>Next example <Icon name="arrow" size={17} /></button>
            </div>
          ) : (
            <div className="quiz-hint"><Icon name="info" size={18} /> When the purpose, tool, account, or permission is unclear, classify upward and ask.</div>
          )}
        </div>
      </div>
    </section>
  );
}

function OrganizationRule() {
  return (
    <section className="section">
      <div className="shell rule-layout">
        <div className="rule-card">
          <p className="eyebrow">Session takeaway</p>
          <h2>A draft rule your organization can actually use</h2>
          <div className="rule-lines">
            <p><strong>Green data</strong> may be used in approved tools for approved purposes.</p>
            <p><strong>Yellow data</strong> requires a named purpose, approved tool, permission, and reviewer.</p>
            <p><strong>Red data</strong> stays out unless an explicitly authorized workflow has appropriate controls and qualified review.</p>
            <p><strong>Uncertain data</strong> is treated as yellow or red until someone with authority decides.</p>
          </div>
        </div>
        <div>
          <SectionHeading
            eyebrow="What learners leave with"
            title="A data map and an approval owner"
            body="Participants list the information categories their organization handles without copying the underlying data into the workbook."
            compact
          />
          <ul className="check-list">
            <li><Icon name="check" size={18} /> Three green-data examples</li>
            <li><Icon name="check" size={18} /> Three yellow-data examples</li>
            <li><Icon name="check" size={18} /> Three red-data categories</li>
            <li><Icon name="check" size={18} /> The person or role authorized to approve yellow-data use</li>
          </ul>
          <TextLink href="/programs/">Return to the full program</TextLink>
        </div>
      </div>
    </section>
  );
}

export default function SessionTwoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Session 02 • Demonstration ready"
        title="The Data Traffic Light"
        body="A memorable information-classification system that helps teams decide what may enter an AI tool, what requires approval, and what stays out."
        aside={<SessionAside />}
      >
        <ButtonLink href={`mailto:${CONTACT_EMAIL}?subject=Host%20AIWF%20Session%202`}>Ask about hosting</ButtonLink>
        <ButtonLink href={`${TRAINING_SOURCE_URL}/NONPROFIT_AI_SAFETY_KIT.md#2-data-traffic-light-card`} variant="secondary" icon="download" external>Open the poster</ButtonLink>
      </PageHero>
      <TrafficModel />
      <CombinedRisk />
      <DataQuiz />
      <OrganizationRule />
      <PartnerStrip title="Pair Session 2 with the AI orientation for a practical half-day demo." copy="Participants leave with a shared language for information handling and a visible list of decisions their organization still needs to make." />
    </PageShell>
  );
}
