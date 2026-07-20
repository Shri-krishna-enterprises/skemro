import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-icon">
        {product.icon}
      </div>

      <div className="product-content">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-section">
          <h4>Brands</h4>

          <div className="chip-container">
            {product.brands.slice(0, 4).map((brand, index) => (
              <span key={index} className="chip">
                {brand}
              </span>
            ))}
          </div>
        </div>

        <div className="product-section">
          <h4>Applications</h4>

          <div className="chip-container">
            {product.applications.slice(0, 4).map((app, index) => (
              <span key={index} className="chip application">
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="product-actions">
        <Link
          to={`/products/${product.id}`}
          className="details-btn"
        >
          View Details →
        </Link>

        <Link
          to="/quote"
          state={{ product }}
          className="quote-btn"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;