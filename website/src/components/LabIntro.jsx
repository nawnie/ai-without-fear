export default function LabIntro() {
  return (
    <section className="lab-intro" id="lab" aria-labelledby="lab-title">
      <div className="shell lab-intro-layout">
        <div>
          <h2 id="lab-title">What is the lab?</h2>
          <p>
            AI Without Fear is a proposed learning lab for rural and resource-constrained nonprofits,
            libraries, workforce partners, community organizations, and adult learners.
          </p>
        </div>
        <div className="community-line" aria-hidden="true">
          <svg viewBox="0 0 680 150">
            <path d="M4 111c82-49 126-31 179 4 57 38 110-64 177-44 37 11 54 55 105 28 66-35 104-39 211 12" />
            <path d="M252 113v-38l18-14 18 14v38m-31-23h26m83 25V69l15-21 15 21v46m-11-51h22m39 50V83l19-15 19 15v31m-32-19h25" />
            <circle cx="270" cy="83" r="3" />
            <circle cx="380" cy="78" r="3" />
            <circle cx="445" cy="91" r="3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
