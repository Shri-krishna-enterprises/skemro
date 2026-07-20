import "./ServicesHero.css";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaIndustry,
  FaTools,
  FaTruck,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

import serviceImage from "../../assets/hero/engineer.jpg";

function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-overlay"></div>

      <div className="container services-container">
        {/* Left */}
        <div className="services-left">
          <span className="services-badge">
            <FaIndustry />
            OUR INDUSTRIAL SERVICES
          </span>

          <h1>
            Complete Industrial
            <span> Procurement</span>
            <br />
            & Supply Solutions
          </h1>

          <p>
            From product sourcing to on-time delivery, SKEMRO Industrial
            Solutions provides complete procurement support with trusted
            brands, technical assistance, and reliable customer service
            across India.
          </p>

          <div className="services-list">
            <div>
              <FaCheckCircle />
              <span>Industrial Product Sourcing</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Bulk Procurement</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Technical Product Support</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Pan India Delivery</span>
            </div>
          </div>

          <div className="services-buttons">
            <Link to="/contact" className="primary-btn">
              Contact Us
              <FaArrowRight />
            </Link>

            <Link to="/request-quote" className="secondary-btn">
              Request Quote
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="services-right">
          <img
            src={serviceImage}
            alt="Industrial Services"
          />

          <div className="service-card card-one">
            <FaTools />
            <div>
              <h3>Technical Support</h3>
              <span>Expert Assistance</span>
            </div>
          </div>

          <div className="service-card card-two">
            <FaTruck />
            <div>
              <h3>Fast Delivery</h3>
              <span>Across India</span>
            </div>
          </div>

          <div className="service-card card-three">
            <FaHeadset />
            <div>
              <h3>Customer Support</h3>
              <span>Quick Response</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;