import "./Hero.css";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaIndustry,
  FaTruck,
  FaAward,
} from "react-icons/fa";

import factory from "../../assets/hero/factory.jpg";
import warehouse from "../../assets/hero/warehouse.jpg";
import engineer from "../../assets/hero/engineer.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-container">

        {/* LEFT */}

        <div className="hero-left">

          <span className="hero-badge">
            <FaIndustry />
            Trusted Industrial Procurement Partner
          </span>

          <h1>
            Your Trusted Partner for
            <span> Industrial Products</span>
            <br />
            & Engineering Solutions
          </h1>

          <p>
            SKEMRO Industrial Solutions delivers high-quality industrial
            products, engineering components, electrical solutions,
            automation equipment, safety products, and maintenance
            supplies from leading global brands for businesses across India.
          </p>

          <div className="hero-features">

            <div>
              <FaCheckCircle />
              Genuine Products
            </div>

            <div>
              <FaCheckCircle />
              250+ Trusted Brands
            </div>

            <div>
              <FaCheckCircle />
              Pan India Delivery
            </div>

          </div>

          <div className="hero-buttons">

            <Link to="/products" className="primary-btn">
              Explore Products
              <FaArrowRight />
            </Link>

            <Link
              to="/request-quote"
              className="secondary-btn"
            >
              Request Quote
            </Link>

          </div>

          <div className="hero-stats">

            <div className="stat-card">
              <FaIndustry />
              <h2>5000+</h2>
              <span>Products</span>
            </div>

            <div className="stat-card">
              <FaAward />
              <h2>250+</h2>
              <span>Brands</span>
            </div>

            <div className="stat-card">
              <FaTruck />
              <h2>1000+</h2>
              <span>Clients Served</span>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="hero-image-grid">

            <div className="hero-image large">
              <img
                src={factory}
                alt="Industrial Factory"
              />
            </div>

            <div className="hero-image">
              <img
                src={warehouse}
                alt="Warehouse"
              />
            </div>

            <div className="hero-image">
              <img
                src={engineer}
                alt="Industrial Engineer"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;