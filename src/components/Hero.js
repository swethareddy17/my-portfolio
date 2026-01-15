export default function Hero() {
  const BASE = process.env.PUBLIC_URL;

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-img">
          <div className="hero-ring">
            <img src={`${BASE}/profile.jpg`} alt="Swetha" />
          </div>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span>Swetha</span>
        </h1>

        <p className="hero-subtitle">
          Full Stack Developer & UI/UX Designer passionate about creating
          beautiful, functional web experiences — and deeply interested in{" "}
          <span className="hl2">AI</span>.
        </p>

        <div className="hero-social">
          <a
            href="https://www.linkedin.com/in/naga-swetha123/"
            target="_blank"
            rel="noreferrer"
          >
            in
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            gh
          </a>
        </div>
      </div>
    </section>
  );
}
