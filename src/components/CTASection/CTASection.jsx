import "./CTASection.css";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="cta-section">

      <div className="container">

        <h2>
          Ready To Discuss Your Industrial Requirements?
        </h2>

        <p>
          Connect with Shri Krishna Enterprises
          for reliable industrial solutions.
        </p>

        <div className="cta-buttons">

          <Link to="/contact" className="cta-primary">
            Contact Us
          </Link>

          <Link to="/products" className="cta-secondary">
            Explore Products
          </Link>

        </div>

      </div>

    </section>
  );
}

export default CTASection;