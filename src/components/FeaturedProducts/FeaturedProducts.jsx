import "./FeaturedProducts.css";
import {
  FaArrowRight,
  FaShieldAlt,
  FaIndustry
} from "react-icons/fa";

const products = [
  {
    title: "Bearings",
    category: "Mechanical",
    description:
      "High-performance bearings for industrial and manufacturing applications."
  },
  {
    title: "Electricals",
    category: "Electrical",
    description:
      "Switchgear, cables, industrial components and electrical accessories."
  },
  {
    title: "Hydraulics",
    category: "Industrial",
    description:
      "Hydraulic pumps, valves, cylinders and industrial fluid solutions."
  },
  {
    title: "Automation",
    category: "Automation",
    description:
      "Sensors, PLCs, drives and industrial automation products."
  },
  {
    title: "Safety Equipment",
    category: "Safety",
    description:
      "PPE, helmets, gloves, safety shoes and workplace protection solutions."
  },
  {
    title: "Lubricants",
    category: "Maintenance",
    description:
      "Industrial oils, greases and lubrication solutions."
  }
];

function FeaturedProducts() {
  return (
    <section className="featured section">
      <div className="container">

        <div className="section-header">
          <span>FEATURED PRODUCTS</span>

          <h2>Industrial Products We Supply</h2>

          <p>
            We supply a comprehensive range of industrial products
            from trusted manufacturers for maintenance, repair and
            operational requirements.
          </p>
        </div>

        <div className="featured-grid">

          {products.map((item, index) => (

            <div className="featured-card" key={index}>

              <div className="featured-icon">
                <FaIndustry />
              </div>

              <span className="featured-category">
                {item.category}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <div className="featured-footer">

                <div className="quality">
                  <FaShieldAlt />
                  Genuine Products
                </div>

                <button className="learn-btn">
                  Learn More
                  <FaArrowRight />
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;