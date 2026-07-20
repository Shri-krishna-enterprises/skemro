import "./BrandsSection.css";

const brands = [
  
];

function BrandsSection() {
  return (
    <section className="brands-section">
      <div className="container">

        <div className="section-title">
          <span>OUR BRANDS</span>
          <h2>Trusted Global Brands</h2>
          <p>
            We supply industrial products from globally
            recognized manufacturers to ensure quality,
            reliability and performance.
          </p>
        </div>

        <div className="brands-grid">
          {brands.map((brand) => (
            <div className="brand-card" key={brand}>
              <h3>{brand}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BrandsSection;