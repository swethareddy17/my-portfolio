export default function Projects() {
  const GitHubIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 19c-3 1-3-1-4-1"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M15 19v-2c0-.8.3-1.4.8-1.8 2.6-.3 5.2-1.3 5.2-6a4.6 4.6 0 0 0-1.2-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.4 11.4 0 0 0-6.8 0C7.3 2.3 6.3 2.6 6.3 2.6a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 5 9c0 4.7 2.6 5.7 5.2 6 .5.4.8 1 .8 1.8v2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );

  const LinkIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M14 5h5v5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 14L19 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M19 14v5H5V5h5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const projects = [
    {
      title: "Lung Cancer Prediction using ML",
      short: "ML model for cancer risk prediction",
      desc: "Machine learning based prediction system using medical & lifestyle attributes (preprocessing, training, evaluation).",
      tags: ["ML", "Python", "Classification"],
      status: "Completed",
      image: "/projects/lung-cancer.jpg",
      github: "https://github.com/",
      live: "#",
      size: "big", // featured
    },
    {
      title: "Personal Finance Tracker",
      short: "Track income & expenses",
      desc: "A finance tracker web app to manage income/expenses, categories & monthly summary insights.",
      tags: ["React", "UI", "JS"],
      status: "Completed",
      image: "/projects/finance-tracker.jpg",
      github: "https://github.com/",
      live: "#",
      size: "normal",
    },
    {
      title: "Personal Portfolio (Current)",
      short: "My official portfolio website",
      desc: "My modern portfolio website showcasing skills, internships, certifications and projects (blue/pink theme).",
      tags: ["React", "Frontend", "Design"],
      status: "In Progress",
      image: "/projects/my-portfolio.jpg", // ✅ your real image only
      github: "https://github.com/",
      live: "#",
      size: "normal",
    },
    {
      title:
        "Hybrid Facial Recognition for Driver’s License Authentication",
      short: "Final Year Project (Deep Learning)",
      desc: "Deep learning powered hybrid facial recognition pipeline to enhance driver’s license authentication security.",
      tags: ["Deep Learning", "Computer Vision", "Security"],
      status: "Ongoing",
      image: null,
      github: "https://github.com/",
      live: "#",
      size: "wide", // wide placeholder
    },
  ];

  return (
    <section className="section projBento" id="projects">
      <div className="pb-head">
        <h2 className="pb-title">
          Projects <span>Gallery</span>
        </h2>
        <p className="pb-sub">
          A few key projects that reflect my interest in web development, machine learning and deep learning.
        </p>
      </div>

      <div className="pb-grid">
        {projects.map((p, i) => (
          <article
            key={i}
            className={`pb-card ${p.size === "big" ? "big" : ""} ${
              p.size === "wide" ? "wide" : ""
            } ${p.image ? "" : "wip"}`}
          >
            {/* Image */}
            {p.image ? (
              <div className="pb-media">
                <img src={p.image} alt={p.title} className="pb-img" />
                <div className={`pb-status ${p.status === "Completed" ? "done" : "prog"}`}>
                  {p.status}
                </div>
              </div>
            ) : (
              <div className="pb-media pb-wip">
                <div className="pb-wipTag">Ongoing</div>
                <div className="pb-wipTitle">Final Year Project</div>
                <div className="pb-wipText">
                  Working on deep learning facial recognition for license authentication.
                  Preview will be added soon.
                </div>
              </div>
            )}

            {/* Content */}
            <div className="pb-body">
              <div className="pb-top">
                <div>
                  <h3 className="pb-name">{p.title}</h3>
                  <p className="pb-short">{p.short}</p>
                </div>

                {/* small icons */}
                <div className="pb-links">
                  <a
                    className="pb-ic"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    className="pb-ic pb-ic2"
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    title="Live"
                  >
                    <LinkIcon />
                  </a>
                </div>
              </div>

              <p className="pb-desc">{p.desc}</p>

              <div className="pb-tags">
                {p.tags.map((t, k) => (
                  <span key={k}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="pb-blob b1"></div>
      <div className="pb-blob b2"></div>
    </section>
  );
}
