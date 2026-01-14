function SkillIcon({ name }) {
  const icons = {
    HTML5: "🌐",
    CSS3: "🎨",
    JavaScript: "⚡",
    "React.js": "⚛️",
    "Tailwind CSS": "💨",
    Bootstrap: "🅱️",
    MySQL: "🗄️",
    Python: "🐍",
    Java: "☕",

    Git: "🔧",
    GitHub: "🐙",
    Canva: "✨",
    Figma: "🖌️",
    "VS Code": "💻",
  };

  return <span className="ss-icon">{icons[name] || "⭐"}</span>;
}

export default function Skills() {
  const coreSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Bootstrap",
    "MySQL",
    "Python",
    "Java",
  ];

  const tools = ["Git", "GitHub", "Canva", "Figma", "VS Code"];

  return (
    <section className="section skillShowcase" id="skills">
      <div className="ss-head">
        <h2 className="ss-title">
          My <span>Skills</span>
        </h2>

        <p className="ss-sub">
          Here are the technologies and tools I use to build modern web applications.
        </p>
      </div>

      <div className="ss-board">
        <div className="ss-two">
          {/* LEFT: Core skills */}
          <div className="ss-col">
            <div className="ss-colTop">
              <h3>Core Skills</h3>
              <span className="ss-badge ss-badge1">Development</span>
            </div>

            <div className="ss-grid">
              {coreSkills.map((skill, i) => (
                <div className="ss-tile" key={i}>
                  <div className="ss-tileIcon">
                    <SkillIcon name={skill} />
                  </div>
                  <div className="ss-tileText">
                    <h4>{skill}</h4>
                    <p>Build & practice</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Tools */}
          <div className="ss-col">
            <div className="ss-colTop">
              <h3>Tools & Technologies</h3>
              <span className="ss-badge ss-badge2">Workspace</span>
            </div>

            <div className="ss-grid">
              {tools.map((tool, i) => (
                <div className="ss-tile" key={i}>
                  <div className="ss-tileIcon ss-tileIcon2">
                    <SkillIcon name={tool} />
                  </div>
                  <div className="ss-tileText">
                    <h4>{tool}</h4>
                    <p>Used in projects</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom highlight */}
        <div className="ss-footer">
          <div className="ss-glowDot"></div>
          <p>
            I love building clean UI, writing strong logic, and using creative tools to make
            websites look beautiful.
          </p>
        </div>
      </div>

      {/* Background glow */}
      <div className="ss-blob ss1"></div>
      <div className="ss-blob ss2"></div>
    </section>
  );
}
