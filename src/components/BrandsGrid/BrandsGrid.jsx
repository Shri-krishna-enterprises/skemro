import "./BrandsGrid.css";

const brands = [
  
];

function BrandsGrid() {
  return (
    <section className="brands-section">

      <div className="container">

        <div className="section-title">
          <h2>Brands We Supply</h2>
          <p>
            We work with leading industrial manufacturers to provide
            dependable products for every application.
          </p>
        </div>

        <div className="brands-grid">
          {brands.map((brand) => (
            <div className="brand-card" key={brand}>
              <h3>{brand}</h3>
            </div>
          ))}
        </div>

        <div className="brand-info">

          <h2>Why Choose Our Partner Brands?</h2>

          <p>
            Every brand we supply is selected based on product quality,
            industry reputation, technical support, and long-term
            reliability. Our objective is to help customers source
            genuine industrial products backed by trusted manufacturers.
          </p>

        </div>

      </div>

    </section>
  );
}

export default BrandsGrid;