import "./CompanyOverview.css";

function CompanyOverview() {
  return (
    <section className="company-overview">
      <div className="container">

        <div className="overview-grid">

          <div className="overview-content">

            <span>WHO WE ARE</span>

            <h2>
              Your Trusted Industrial Procurement Partner
            </h2>

            <p>
              SKEMRO Industrial Solutions is dedicated to supplying
              high-quality industrial products sourced from trusted
              global manufacturers. We support industries with reliable
              procurement solutions, helping businesses maintain smooth
              operations through quality products and dependable service.
            </p>

            <p>
              With a customer-focused approach, we strive to build
              long-term relationships by providing the right products,
              timely support, and efficient sourcing solutions.
            </p>

          </div>

          <div className="overview-card">

            <div className="info-box">
              <h3>Our Commitment</h3>

              <ul>
                <li>✔ Quality Products</li>
                <li>✔ Trusted Brand Partners</li>
                <li>✔ Industrial Procurement</li>
                <li>✔ Timely Delivery Support</li>
                <li>✔ Customer-Focused Service</li>
              </ul>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CompanyOverview;