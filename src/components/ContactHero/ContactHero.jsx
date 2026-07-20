import "./ContactHero.css";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaClock
} from "react-icons/fa";

import office from "../../assets/hero/office.jpg";

function ContactHero() {
  return (
    <section className="contact-hero">

      <div className="contact-overlay"></div>

      <div className="container contact-container">

        {/* Left */}

        <div className="contact-left">

          <span className="contact-badge">
            CONTACT SKEMRO
          </span>

          <h1>
            Let's Build
            <span> Better Industrial</span>
            <br />
            Solutions Together
          </h1>

          <p>
            Whether you need industrial products, procurement support,
            or a customized quotation, our experienced team is ready
            to assist you with the right solution.
          </p>

          <div className="contact-info">

            <div className="info-card">
              <FaPhoneAlt />
              <div>
                <h4>Call Us</h4>
                <p>+91 9034958355</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope />
              <div>
                <h4>Email</h4>
                <p>sales@skemro.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt />
              <div>
                <h4>Location</h4>
                <p> Sector 115 , Sorkha , Noida 201301 , India</p>
              </div>
            </div>

            <div className="info-card">
              <FaClock />
              <div>
                <h4>Business Hours</h4>
                <p>Mon - Sat | 9:00 AM - 6:00 PM</p>
              </div>
            </div>

          </div>

          <div className="contact-buttons">

            <Link to="/request-quote" className="primary-btn">
              Request Quote
              <FaArrowRight />
            </Link>

            <Link to="/products" className="secondary-btn">
              Explore Products
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="contact-right">

          <img
            src={office}
            alt="SKEMRO Office"
          />

        </div>

      </div>

    </section>
  );
}

export default ContactHero;