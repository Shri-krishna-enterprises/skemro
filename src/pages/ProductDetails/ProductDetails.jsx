import "./ProductDetails.css";
import { useParams, Link } from "react-router-dom";
import products from "../../data/products";

function ProductDetails() {

  const { id } = useParams();

  const product = products.find(
    item => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <section className="product-detail">

      <div className="container">

        <div className="detail-top">

          <div className="detail-image">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="detail-content">

            <span className="product-category">
              {product.category}
            </span>

            <h1>{product.name}</h1>

            <p>{product.shortDesc}</p>
<button className="quote-btn">
  Request Quote
</button>

          </div>

        </div>

        {/* Specifications */}

        <div className="specifications">

          <h2>Technical Specifications</h2>

          <table className="spec-table">

            <tbody>

              <tr>
                <td>Material</td>
                <td>Stainless Steel</td>
              </tr>

              <tr>
                <td>Grade</td>
                <td>SS304 / SS316</td>
              </tr>

              <tr>
                <td>Size</td>
                <td>1/2" - 24"</td>
              </tr>

              <tr>
                <td>Pressure Rating</td>
                <td>ANSI Standards</td>
              </tr>

            </tbody>

          </table>

        </div>

        {/* Applications */}

        <div className="applications">

          <h2>Applications</h2>

          <div className="application-grid">

            <div>Oil & Gas</div>
            <div>Power Plants</div>
            <div>Water Treatment</div>
            <div>Manufacturing</div>

          </div>

        </div>

        {/* Features */}

        <div className="features-section">

          <h2>Key Features</h2>

          <div className="feature-grid">

            <div className="feature-item">
              Corrosion Resistant
            </div>

            <div className="feature-item">
              High Durability
            </div>

            <div className="feature-item">
              Precision Engineered
            </div>

            <div className="feature-item">
              Industry Standard Quality
            </div>

          </div>

        </div>

        {/* Inquiry CTA */}

        <div className="inquiry-box">

          <h2>Need More Information?</h2>

          <p>
            Contact our team for pricing,
            availability and technical support.
          </p>

          <Link
            to="/contact"
            className="inquiry-btn"
          >
            Request Quote
          </Link>

        </div>

        {/* Related Products */}

        <div className="related-products">

          <h2>Related Products</h2>

          <div className="related-grid">

            <div className="related-card">
              Pipe Fittings
            </div>

            <div className="related-card">
              Flanges
            </div>

            <div className="related-card">
              Valves
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;