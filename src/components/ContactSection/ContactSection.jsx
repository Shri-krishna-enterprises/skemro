import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section">

      <div className="container">

        <div className="contact-grid">

          <div className="contact-info">

            <h2>Get In Touch</h2>

            <p>
              We'd love to hear from you. Send us your inquiry and our
              team will respond as soon as possible.
            </p>

            <div className="info-card">
              <h4>Email</h4>
              <p>sales@skemro.com</p>
            </div>

            <div className="info-card">
              <h4>Business Hours</h4>
              <p>Monday – Saturday</p>
              <p>9:00 AM – 6:00 PM</p>
            </div>

            <div className="info-card">
              <h4>Address</h4>
              <p>
                Your Office Address<br />
                City, State, India
              </p>
            </div>

          </div>

          <div className="contact-form">

            <h2>Send an Inquiry</h2>

            <form>

              <input
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                type="text"
                placeholder="Company Name"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Tell us about your requirements..."
              ></textarea>

              <button type="submit">
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;