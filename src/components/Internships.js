export default function Internships() {
  const internships = [
    {
      role: "Full Stack Development Intern",
      company: "SureTrust ProEd",
      mode: "Online",
      status: "Ongoing",
      domain: "Full Stack Development",
      gradient: "g1",
      points: [
        "Working on responsive UI development and reusable components",
        "Improved frontend logic implementation and integration workflow",
        "Built confidence in real-world development practices",
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Git"],
    },
    {
      role: "AI/ML Intern",
      company: "SkillDzire Technologies",
      mode: "Remote",
      status: "Completed",
      domain: "AI / Machine Learning",
      gradient: "g2",
      points: [
        "Explored datasets and applied basic ML workflows",
        "Practiced model-building and evaluation concepts",
        "Worked on mini AI tasks using Python and ML basics",
      ],
      tech: ["Python", "ML Basics", "Data Handling", "GitHub"],
    },
  ];

  return (
    <section className="section internSpotlight" id="internships">
      <div className="internS-head">
        <h2 className="internS-title">
          Internships <span>& Experience</span>
        </h2>
        <p className="internS-sub">
          Practical experiences that strengthened my development foundation and AI interest.
        </p>
      </div>

      <div className="internS-grid">
        {internships.map((it, idx) => (
          <article className={`internS-card ${it.gradient}`} key={idx}>
            {/* gradient strip */}
            <div className="internS-strip"></div>

            {/* header */}
            <div className="internS-top">
              <div className="internS-left">
                <div className="internS-badge">{idx + 1}</div>
                <div>
                  <h3 className="internS-role">{it.role}</h3>
                  <p className="internS-company">{it.company}</p>
                </div>
              </div>

              <div className="internS-status">
                <span className={`statusDot ${it.status === "Ongoing" ? "on" : "off"}`}></span>
                {it.status}
              </div>
            </div>

            {/* quick facts */}
            <div className="internS-facts">
              <div className="fact">
                <span className="factKey">Domain</span>
                <span className="factVal">{it.domain}</span>
              </div>
              <div className="fact">
                <span className="factKey">Mode</span>
                <span className="factVal">{it.mode}</span>
              </div>
            </div>

            {/* highlights */}
            <div className="internS-mid">
              <h4>Highlights</h4>
              <ul>
                {it.points.map((p, i) => (
                  <li key={i}>✨ {p}</li>
                ))}
              </ul>
            </div>

            {/* tech */}
            <div className="internS-tech">
              {it.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* glow background */}
      <div className="internS-blob b1"></div>
      <div className="internS-blob b2"></div>
    </section>
  );
}
