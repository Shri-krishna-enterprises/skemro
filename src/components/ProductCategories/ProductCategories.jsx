import "./ProductCategories.css";
import {
  FiTool,
  FiSettings,
  FiDroplet,
  FiCpu,
  FiPackage,
  FiShield,
  FiArrowRight,
  FiTruck,
} from "react-icons/fi";

const categories = [
  {
    icon: <FiTool />,
    title: "Industrial Tools",
    description: "Hand tools, power tools and workshop equipment.",
  },
  {
    icon: <FiSettings />,
    title: "Engineering Components",
    description: "Bearings, belts, couplings, fasteners and hardware.",
  },
  {
    icon: <FiDroplet />,
    title: "Lubricants & Chemicals",
    description: "Industrial oils, greases, cleaners and maintenance chemicals.",
  },
  {
    icon: <FiCpu />,
    title: "Electrical & Automation",
    description: "Switchgear, sensors, cables and automation products.",
  },
  {
    icon: <FiPackage />,
    title: "Safety Products",
    description: "PPE, helmets, gloves, safety shoes and workplace protection.",
  },
  {
    icon: <FiTruck />,
    title: "Material Handling",
    description: "Storage, lifting and warehouse handling equipment.",
  },
  {
    icon: <FiShield />,
    title: "MRO Consumables",
    description: "Daily industrial maintenance and repair consumables.",
  },
  {
    icon: <FiSettings />,
    title: "Industrial Supplies",
    description: "Complete sourcing solutions for manufacturing industries.",
  },
];

function ProductCategories() {
  return (
    <section className="categories-section">

      <div className="container">

        <div className="section-header">
          <span>OUR CATEGORIES</span>

          <h2>Comprehensive Industrial Procurement Solutions</h2>

          <p>
            We source and supply a wide range of industrial products from
            trusted manufacturers to support uninterrupted operations across
            multiple industries.
          </p>
        </div>

        <div className="categories-grid">

          {categories.map((item, index) => (
            <div className="category-card" key={index}>

              <div className="category-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <button>
                Explore Category
                <FiArrowRight />
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductCategories;