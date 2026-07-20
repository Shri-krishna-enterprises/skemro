import { Link } from "react-router-dom";
import "./ProductCatalogCard.css";

const ProductCatalogCard = ({ product }) => {
  return (
    <article className="catalog-card">

      <div className="catalog-image">

        <div className="catalog-icon">
          {product.icon}
        </div>

      </div>

      <div className="catalog-content">

        <span className="catalog-category">
          {product.category}
        </span>

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <div className="catalog-info">

          <div>

            <h4>Brands</h4>

            <div className="catalog-chips">

              {product.brands.map((brand) => (

                <span key={brand}>{brand}</span>

              ))}

            </div>

          </div>

          <div>

            <h4>Applications</h4>

            <div className="catalog-chips">

              {product.applications.map((item) => (

                <span key={item}>{item}</span>

              ))}

            </div>

          </div>

        </div>

        <ul className="catalog-features">

          <li>✔ Genuine Products</li>

          <li>✔ Bulk Industrial Supply</li>

          <li>✔ Technical Support</li>

          <li>✔ Fast Delivery</li>

        </ul>

        <div className="catalog-buttons">

          <Link
            to={`/products/${product.id}`}
            className="view-btn"
          >
            View Details
          </Link>

          <Link
            to="/quote"
            className="quote-btn"
          >
            Request Quote
          </Link>

        </div>

      </div>

    </article>
  );
};

export default ProductCatalogCard;