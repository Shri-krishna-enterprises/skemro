import "./AboutHero.css";
import { FaIndustry, FaAward, FaUsers } from "react-icons/fa";
import factory from "../../assets/hero/factory.jpg";
function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-overlay"></div>

      <div className="container about-hero-container">

        <div className="about-left">

          <span className="about-badge">
            ABOUT SKEMRO
          </span>

          <h1>
            Building Strong Industrial
            <span> Partnerships</span>
          </h1>

          <p>
            SKEMRO Industrial Solutions is committed to delivering reliable
            industrial procurement solutions with quality products,
            trusted brands, and exceptional customer service across India.
          </p>

          <div className="about-highlights">

            <div className="highlight-card">
              <FaIndustry />
              <h3>Industrial Expertise</h3>
            </div>

            <div className="highlight-card">
              <FaAward />
              <h3>Quality Assurance</h3>
            </div>

            <div className="highlight-card">
              <FaUsers />
              <h3>Customer Focused</h3>
            </div>

          </div>

        </div>

        <div className="about-right">

          <img
                          src={factory}
                          alt="Industrial Factory"
                        />

        </div>

      </div>

    </section>
  );
}

export default AboutHero;