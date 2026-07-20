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