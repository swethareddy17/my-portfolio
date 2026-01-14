export default function About() {
  // ✅ Internships info kept for FUTURE use (not displayed now)
  // const internships = [
  //   {
  //     role: "Full Stack Development Intern",
  //     company: "SureTrust ProEd",
  //     mode: "Ongoing",
  //   },
  //   {
  //     role: "AI/ML Intern",
  //     company: "SkillDzire Technologies",
  //     mode: "Remote",
  //   },
  // ];

  return (
    <section className="section about" id="about">
      <div className="about-grid">
        {/* Left Side */}
        <div className="about-left">
          <h2 className="section-title">About Me</h2>

          <p className="about-intro">
            I’m <span className="about-name">Kamana Naga Swetha</span>, a{" "}
            <b>4th-year CSE (AI)</b> student who loves building real-world
            applications with modern technologies.
          </p>

          <p className="about-line">
            My interest lies in <span className="about-highlight2">Full Stack Development</span>{" "}
            and <span className="about-highlight">Artificial Intelligence</span>, where I enjoy
            combining problem-solving with creative UI thinking.
          </p>

          <p className="about-line">
            Along with development, I’m also passionate about{" "}
            <span className="about-highlight">mobile photography</span>,{" "}
            <span className="about-highlight2">video editing</span>, and digital design —
            which helps me create clean and attractive user experiences.
          </p>

          {/* Removed Projects + Skills + Internship section UI as you asked */}
        </div>

        {/* Right Side */}
        <div className="about-right">
          <div className="about-cards">
            <div className="about-card">
              <span>🎓</span>
              <h3>4th Year</h3>
              <p>CSE (AI)</p>
            </div>

            <div className="about-card">
              <span>💻</span>
              <h3>Developer</h3>
              <p>Frontend & Full Stack</p>
            </div>

            <div className="about-card">
              <span>🤖</span>
              <h3>AI/ML</h3>
              <p>AI Projects & Learning</p>
            </div>

            <div className="about-card">
              <span>🎨</span>
              <h3>Creative</h3>
              <p>Editing & UI Design</p>
            </div>
          </div>

          <div className="about-strengths">
            <h3>Strengths</h3>
            <ul>
              <li>✅ Problem Solving</li>
              <li>✅ Creativity & UI Sense</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
