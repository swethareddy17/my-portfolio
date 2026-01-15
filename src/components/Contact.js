export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    alert("✅ Message Sent! (Demo)");
  };

  return (
    <section className="section contactLite" id="contact">
      <div className="cl-head">
        <h2 className="cl-title">
          Contact <span>Me</span>
        </h2>
        <p className="cl-sub">
          Feel free to reach out for collaborations, internships or any opportunities.
        </p>
      </div>

      <div className="cl-card">
        {/* LEFT */}
        <div className="cl-left">
          <h3>Let’s Connect ✨</h3>
          <p>
            I’m open to developer roles, internships and AI projects. I’d love to hear from you.
          </p>

          <div className="cl-info">
            <div className="cl-row">
              <span className="cl-ic">📧</span>
              <div>
                <div className="cl-key">Email</div>
                <div className="cl-val">kamananagaswetha@gmail.com</div>
              </div>
            </div>

            <div className="cl-row">
              <span className="cl-ic">📍</span>
              <div>
                <div className="cl-key">Location</div>
                <div className="cl-val">Andhra Pradesh, India</div>
              </div>
            </div>

            <div className="cl-row">
              <span className="cl-ic">💼</span>
              <div>
                <div className="cl-key">LinkedIn</div>
                <a
                  className="cl-link"
                  href="https://www.linkedin.com/in/naga-swetha123/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Profile →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <form className="cl-form" onSubmit={onSubmit}>
          <h3>Send a Message</h3>

          <div className="cl-fields">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message..." required />
          </div>

          <button className="cl-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
