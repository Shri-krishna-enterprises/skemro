import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({
  image,
  title,
  description
}) {
  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={image}
          alt={title}
        />
      </div>

      <div className="product-content">

        <h3>{title}</h3>

        <p>{description}</p>

        <Link
          to={`/products?category=${title}`}
          className="product-btn"
        >
          View Products
        </Link>

      </div>

    </div>
  );
}

export default ProductCard;