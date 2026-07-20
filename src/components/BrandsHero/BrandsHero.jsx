import "./BrandsHero.css";
import { Link } from "react-router-dom";
import {
  FaHandshake,
  FaArrowRight,
  FaAward,
  FaIndustry,
  FaShieldAlt,
} from "react-icons/fa";

import brandImage from "../../assets/hero/factory.jpg";

function BrandsHero() {
  return (
    <section className="brands-hero">

      <div className="brands-overlay"></div>

      <div className="container brands-container">

        {/* Left */}

        <div className="brands-left">

          <span className="brands-badge">
            TRUSTED GLOBAL BRANDS
          </span>

          <h1>
            Partnering With
            <span> Industry Leaders</span>
          </h1>

          <p>
            SKEMRO Industrial Solutions works with leading global and
            Indian manufacturers to provide genuine industrial products,
            reliable supply, and consistent quality for businesses
            across multiple industries.
          </p>

          <div className="brands-features">

            <div>
              <FaAward />
              <span>250+ Trusted Brands</span>
            </div>

            <div>
              <FaIndustry />
              <span>Premium Industrial Products</span>
            </div>

            <div>
              <FaShieldAlt />
              <span>100% Genuine Products</span>
            </div>

            <div>
              <FaHandshake />
              <span>Long-Term Partnerships</span>
            </div>

          </div>

          <div className="brands-buttons">

            <Link to="/brands" className="primary-btn">
              Explore Brands
              <FaArrowRight />
            </Link>

            <Link
              to="/request-quote"
              className="secondary-btn"
            >
              Request Quote
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="brands-right">

          <img
            src={brandImage}
            alt="Industrial Brands"
          />

          <div className="brand-card">

            <h2>250+</h2>

            <span>
              Trusted Manufacturing Brands
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BrandsHero;