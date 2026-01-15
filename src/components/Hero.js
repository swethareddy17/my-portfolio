import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

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
          Hi, I’m <span>Swetha Reddy</span>
        </h1>

        <p className="hero-subtitle">
          Full Stack Developer & UI/UX Designer passionate about creating{" "}
          <span className="hl">beautiful</span>, functional web experiences —
          and also deeply interested in <span className="hl2">AI</span>.
        </p>

        {/* ✅ Social Icons */}
        <div className="hero-social">
          <a
            href="https://www.linkedin.com/in/naga-swetha123/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:kamananagaswetha@gmail.com"
            aria-label="Email"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
}
