export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "I create responsive, modern websites using React.js with clean UI and smooth user experience.",
      icon: "🌐",
      tags: ["React.js", "UI Design", "Responsive"],
    },
    {
      title: "Thumbnail Designing",
      desc: "I design attractive thumbnails for YouTube and Reels covers with clean typography and creative layouts.",
      icon: "🖼️",
      tags: ["YouTube", "Reels Cover", "Canva"],
    },
    {
      title: "Frontend UI/UX",
      desc: "I build beautiful user interfaces with proper spacing, color combinations and premium design style.",
      icon: "✨",
      tags: ["Figma", "Canva", "Design"],
    },
    {
      title: "AI/ML Projects",
      desc: "I implement ML/DL mini projects and continuously explore AI tools for solving real-world problems.",
      icon: "🤖",
      tags: ["Python", "ML", "Deep Learning"],
    },
    {
      title: "Photo & Video Editing",
      desc: "I edit photos and short videos (reels) with creative effects, smooth transitions and aesthetic edits.",
      icon: "🎬",
      tags: ["Editing", "Short Videos", "Creative"],
    },
  ];

  return (
    <section className="section servicesPro" id="services">
      <div className="srv-head">
        <h2 className="srv-title">
          Services <span>I Offer</span>
        </h2>
        <p className="srv-sub">
          A mix of development + creativity — I love building and designing impactful digital content.
        </p>
      </div>

      <div className="srv-grid">
        {services.map((s, i) => (
          <article className="srv-card" key={i}>
            <div className="srv-top">
              <div className="srv-icon">{s.icon}</div>
              <div className="srv-num">{String(i + 1).padStart(2, "0")}</div>
            </div>

            <h3 className="srv-name">{s.title}</h3>
            <p className="srv-desc">{s.desc}</p>

            <div className="srv-tags">
              {s.tags.map((t, k) => (
                <span key={k}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="srv-blob b1"></div>
      <div className="srv-blob b2"></div>
    </section>
  );
}
