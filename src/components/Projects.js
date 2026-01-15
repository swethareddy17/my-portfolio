export default function Projects() {
  const BASE = process.env.PUBLIC_URL;

  const projects = [
    {
      title: "Lung Cancer Prediction using ML",
      desc: "A Machine Learning-based system to predict lung cancer risk using user input features and model evaluation.",
      img: `${BASE}/projects/lung.jpg`,
      status: "Completed",
      tags: ["Python", "ML", "Sklearn", "Data"],
      github: "https://github.com/",
      live: "#",
    },
    {
      title: "Personal Finance Tracker",
      desc: "Track income, expenses and savings goals with a structured finance dashboard & analytics.",
      img: `${BASE}/projects/finance.jpg`,
      status: "Completed",
      tags: ["React", "JavaScript", "UI"],
      github: "https://github.com/",
      live: "#",
    },
    {
      title: "Personal Portfolio Website",
      desc: "My premium portfolio built with React, showcasing skills, internships, and projects.",
      img: `${BASE}/projects/portfolio.jpg`,
      status: "Completed",
      tags: ["React", "CSS", "Design"],
      github: "https://github.com/swethareddy17/my-portfolio",
      live: "https://swethareddy17.github.io/my-portfolio/",
    },
    {
      title:
        "Deep Learning-powered Hybrid Facial Recognition for Enhanced Driver's License Authentication",
      desc: "Ongoing 4th year project focused on secure identity verification using hybrid deep learning models.",
      img: null,
      status: "In Progress",
      tags: ["Deep Learning", "Face Recognition", "Research"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="section projBento" id="projects">
      <div className="pb-head">
        <h2 className="pb-title">
          My <span>Projects</span>
        </h2>
        <p className="pb-sub">Some of my best academic + personal projects.</p>
      </div>

      <div className="pb-grid">
        {projects.map((p, i) => (
          <div key={i} className={`pb-card ${i === 3 ? "wide" : ""}`}>
            {p.img ? (
              <div className="pb-media">
                <img src={p.img} className="pb-img" alt={p.title} />
                <span
                  className={`pb-status ${
                    p.status === "Completed" ? "done" : "prog"
                  }`}
                >
                  {p.status}
                </span>
              </div>
            ) : (
              <div className="pb-wip">
                <div className="pb-wipTag">Ongoing Project</div>
                <div className="pb-wipTitle">{p.title}</div>
                <div className="pb-wipText">{p.desc}</div>
              </div>
            )}

            {p.img && (
              <div className="pb-body">
                <div className="pb-top">
                  <div>
                    <h3 className="pb-name">{p.title}</h3>
                    <p className="pb-short">{p.desc}</p>
                  </div>

                  <div className="pb-links">
                    {p.github !== "#" && (
                      <a
                        className="pb-ic"
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        title="GitHub"
                      >
                        ⛓
                      </a>
                    )}
                    {p.live !== "#" && (
                      <a
                        className="pb-ic pb-ic2"
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        title="Live"
                      >
                        ↗
                      </a>
                    )}
                  </div>
                </div>

                <div className="pb-tags">
                  {p.tags.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pb-blob b1"></div>
      <div className="pb-blob b2"></div>
    </section>
  );
}
