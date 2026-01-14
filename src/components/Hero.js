export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-img">
          <div className="hero-ring">
            <img src="/profile.jpg" alt="Swetha" />
          </div>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span>Swetha Reddy</span>
        </h1>

        <p className="hero-subtitle">
          Full Stack Developer & UI/UX Designer passionate about creating{" "}
          <span className="hl">beautiful, functional web experiences</span>. <br />
          Also passionate about <span className="hl2">Artificial Intelligence</span>, ML
          projects, and smart tech solutions.
        </p>

        {/* Social icons */}
        <div className="hero-social">
          <a href="https://github.com/" target="_blank" rel="noreferrer" title="GitHub">
            ⌂
          </a>
          <a href="https://www.linkedin.com/in/naga-swetha123/" target="_blank" rel="noreferrer" title="LinkedIn">
            in
          </a>
          <a href="mailto:kamananagaswetha@gmail.com" title="Email">
            ✉
          </a>
        </div>
      </div>

      <div className="hero-glow"></div>
    </section>
  );
}
