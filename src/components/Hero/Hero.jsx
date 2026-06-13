import "./Hero.css";
// import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content container">
        <span className="hero-tag">
          SHRI KRISHNA ENTERPRISES
        </span>

        <h1>
          Engineering Quality.
          <br />
          Delivering Reliability.
        </h1>

        <p>
          Supplying premium industrial products and
          engineering solutions across India.
        </p>

        <div className="hero-buttons">
          {/* <Link to="/products" className="primary-btn">
            Explore Products
          </Link> */}
{/* 
          <Link to="/contact" className="secondary-btn">
            Request Quote
          </Link> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;