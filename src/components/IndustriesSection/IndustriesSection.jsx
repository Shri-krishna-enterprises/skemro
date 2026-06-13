import "./IndustriesSection.css";

function IndustriesSection() {

  const industries = [
    "Oil & Gas",
    "Petrochemical",
    "Power Generation",
    "Water Treatment",
    "Manufacturing",
    "Construction",
    "Steel Industry",
    "Pharmaceutical"
  ];

  return (
    <section className="industries-section">

      <div className="container">

        <div className="section-header">

          <span>INDUSTRIES WE SERVE</span>

          <h2>
            Supporting Diverse Industrial Sectors
          </h2>

          <p>
            Delivering quality products and solutions
            to industries across India.
          </p>

        </div>

        <div className="industries-grid">

          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <h3>{industry}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default IndustriesSection;