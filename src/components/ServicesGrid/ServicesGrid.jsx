import "./ServicesGrid.css";
import {
  FaIndustry,
  FaTruck,
  FaBoxes,
  FaHandshake,
  FaClipboardCheck,
  FaWarehouse,
  FaTools,
  FaGlobeAsia,
} from "react-icons/fa";

const services = [
  {
    icon: <FaIndustry />,
    title: "Industrial Product Supply",
    description:
      "Supplying high-quality industrial products from trusted manufacturers across multiple industries.",
  },
  {
    icon: <FaTruck />,
    title: "Bulk Procurement",
    description:
      "Reliable procurement solutions for bulk industrial requirements with competitive pricing.",
  },
  {
    icon: <FaHandshake />,
    title: "Vendor Sourcing",
    description:
      "Connecting businesses with trusted OEMs and global industrial brands.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Project Procurement",
    description:
      "End-to-end procurement support for manufacturing, infrastructure, and industrial projects.",
  },
  {
    icon: <FaWarehouse />,
    title: "Inventory Support",
    description:
      "Helping industries maintain uninterrupted operations through timely product availability.",
  },
  {
    icon: <FaTools />,
    title: "Technical Product Assistance",
    description:
      "Expert guidance in selecting the right industrial products for your application.",
  },
  {
    icon: <FaBoxes />,
    title: "OEM Product Supply",
    description:
      "Supply of genuine OEM products from leading global and Indian manufacturers.",
  },
  {
    icon: <FaGlobeAsia />,
    title: "Pan India Industrial Supply",
    description:
      "Efficient delivery network serving industries across India with dependable logistics.",
  },
];

function ServicesGrid() {
  return (
    <section className="services-grid-section">
      <div className="container">

        <div className="section-title">
          <h2>Our Industrial Services</h2>
          <p>
            We deliver complete industrial sourcing and procurement solutions
            tailored to your business requirements.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesGrid;