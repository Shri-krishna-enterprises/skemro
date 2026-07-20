import "./AboutSection.css";
import {
  FiCheckCircle,
  FiArrowRight,
  FiShield,
  FiPackage,
  FiTrendingUp,
} from "react-icons/fi";

function AboutSection() {
  return (
    <section className="about-section">

      <div className="container about-container">

        {/* Left Side */}

        <div className="about-image">

          <div className="experience-card">
            <h2>Trusted</h2>
            <p>B2B Procurement Partner</p>
          </div>

          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80"
              alt="Industrial Procurement"
            />
          </div>

        </div>

        {/* Right Side */}

        <div className="about-content">

          <span className="section-tag">
            ABOUT SKEMRO
          </span>

          <h2>
            Your Reliable Partner for Industrial Procurement &
            MRO Solutions
          </h2>

          <p>
            SKEMRO Industrial Solutions is a trusted B2B MRO consolidator
            helping industries simplify procurement by sourcing high-quality
            industrial products from leading manufacturers and authorized
            suppliers.
          </p>

          <div className="about-features">

            <div>
              <FiShield />
              <span>Trusted Industrial Brands</span>
            </div>

            <div>
              <FiPackage />
              <span>Extensive Product Portfolio</span>
            </div>

            <div>
              <FiTrendingUp />
              <span>Reliable Procurement Support</span>
            </div>

            <div>
              <FiCheckCircle />
              <span>Quality & Timely Delivery</span>
            </div>

          </div>

          <a href="/about" className="btn-primary">
            Learn More
            <FiArrowRight />
          </a>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;