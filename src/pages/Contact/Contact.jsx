import "./Contact.css";

function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="contact-hero">

        <div className="contact-overlay"></div>

        <div className="container contact-hero-content">

          <h1>Contact Us</h1>

          <p>
            Get in touch with Shri Krishna Enterprises
            for industrial products and solutions.
          </p>

        </div>

      </section>

      {/* Contact Info */}
      <section className="contact-info">

        <div className="container">

          <div className="contact-grid">

            <div className="contact-card">

              <h3>Phone</h3>

              <p>+91 9034958355 </p>

            </div>

            <div className="contact-card">

              <h3>Email</h3>

              <p>sales@skemro.com </p>

            </div>

            <div className="contact-card">

              <h3>Address</h3>

              <p>
                Address- Sector 115 , Sorkha , Noida 201301 , India
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Form */}
      <section className="contact-form-section">

        <div className="container">

          <div className="contact-form-wrapper">

            <div className="form-content">

              <h2>Send Us An Inquiry</h2>

              <p>
                Fill out the form below and our team
                will get back to you shortly.
              </p>

            </div>

            <form className="contact-form">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="Phone Number"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
              ></textarea>

              <button type="submit">
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* Business Hours */}
      <section className="business-hours">

        <div className="container">

          <h2>Business Hours</h2>

          <div className="hours-box">

            <p>Monday - Saturday : 9:00 AM - 7:00 PM</p>

            <p>Sunday : Closed</p>

          </div>

        </div>

      </section>

      {/* Map */}
      
    </>
  );
}

export default Contact;