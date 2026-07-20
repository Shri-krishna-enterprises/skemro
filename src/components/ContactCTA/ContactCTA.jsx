import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="cta-container">

        <span className="cta-subtitle">
          LET'S WORK TOGETHER
        </span>

        <h2>
          Looking for Reliable Industrial Supply Solutions?
        </h2>

        <p>
          Whether you need industrial products, bulk procurement,
          or sourcing support, our team is ready to assist you.
          Send us your requirement and we'll get back to you by email.
        </p>

        <div className="cta-buttons">

          <Link
            to="/request-quote"
            className="primary-btn"
          >
            Request Quote
          </Link>

          <Link
            to="/contact"
            className="secondary-btn"
          >
            <FaEnvelope />
            Email Us
          </Link>

        </div>

      </div>
    </section>
  );
}

export default ContactCTA;