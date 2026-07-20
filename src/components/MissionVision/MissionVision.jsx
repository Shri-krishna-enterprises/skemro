import {
  FaBullseye,
  FaEye,
  FaHandshake,
} from "react-icons/fa";
import "./MissionVision.css";

function MissionVision() {
  return (
    <section className="mission-section">
      <div className="container">

        <div className="section-heading">
          <span>OUR VALUES</span>

          <h2>Driven by Quality, Trust & Commitment</h2>

          <p>
            We are committed to building long-term relationships by
            delivering reliable industrial products and dependable
            procurement solutions.
          </p>
        </div>

        <div className="mission-grid">

          <div className="mission-card">
            <div className="mission-icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              To provide quality industrial products through trusted
              sourcing, ensuring customer satisfaction with reliable
              procurement solutions and responsive service.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become a trusted industrial supply partner recognized
              for reliability, integrity, product quality and long-term
              customer relationships.
            </p>
          </div>

          <div className="mission-card">
            <div className="mission-icon">
              <FaHandshake />
            </div>

            <h3>Our Commitment</h3>

            <p>
              We are committed to providing timely support, dependable
              sourcing and customer-focused solutions that add value to
              every business we serve.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default MissionVision;