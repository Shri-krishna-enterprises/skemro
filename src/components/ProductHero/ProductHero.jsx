import "./ProductHero.css";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBoxes,
  FaIndustry,
  FaShieldAlt,
  FaTruckMoving
} from "react-icons/fa";

import warehouse from "../../assets/hero/warehouse.jpg";

function ProductsHero() {
  return (
    <section className="products-hero">

      <div className="products-overlay"></div>

      <div className="container products-hero-container">

        {/* Left */}

        <div className="products-left">

          <span className="products-badge">
            INDUSTRIAL PRODUCTS
          </span>

          <h1>
            Premium Industrial
            <span> Products</span>
            <br />
            From Trusted Brands
          </h1>

          <p>
            Explore our comprehensive range of industrial products including
            bearings, power tools, electrical equipment, safety solutions,
            automation products, pipes, valves, fasteners and engineering
            supplies for every industry.
          </p>

          <div className="products-features">

            <div>
              <FaBoxes />
              <span>5000+ Products</span>
            </div>

            <div>
              <FaIndustry />
              <span>250+ Brands</span>
            </div>

            <div>
              <FaTruckMoving />
              <span>Pan India Supply</span>
            </div>

            <div>
              <FaShieldAlt />
              <span>Quality Assured</span>
            </div>

          </div>

          <div className="products-buttons">

            <Link to="/products" className="primary-btn">
              View Products
              <FaArrowRight />
            </Link>

            <Link
              to="/request-quote"
              className="secondary-btn"
            >
              Request Quote
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="products-right">

          <img
            src={warehouse}
            alt="Industrial Warehouse"
          />

          <div className="experience-card">

            <h2>5000+</h2>

            <span>
              Industrial Products
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductsHero;