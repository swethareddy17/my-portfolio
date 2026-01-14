export default function Navbar({ theme, toggleTheme }) {
  return (
    <header className="navWrap">
      <nav className="navbar">
        <a className="brand" href="#home">
          Swetha<span></span>
        </a>

        <div className="navLinks">
          <a className="navLink" href="#home">Home</a>
          <a className="navLink" href="#about">About</a>
          <a className="navLink" href="#skills">Skills</a>
          <a className="navLink" href="#internships">Internships</a>
          <a className="navLink" href="#projects">Projects</a>
          <a className="navLink" href="#services">Services</a>
          <a className="navLink" href="#contact">Contact</a>
        </div>

        <button className="themeBtn" onClick={toggleTheme} title="Toggle theme">
          {theme === "dark" ? "🌙" : "☀️"}
        </button>
      </nav>
    </header>
  );
}
