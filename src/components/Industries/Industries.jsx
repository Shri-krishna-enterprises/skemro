import "./Industries.css";
import {
  FaIndustry,
  FaCar,
  FaBolt,
  FaFlask,
  FaCapsules,
  FaTools,
  FaWarehouse,
  FaCogs
} from "react-icons/fa";

const industries = [
  {
    icon: <FaCar />,
    title: "Automobile",
    description:
      "Supplying industrial consumables, tools and MRO products for automotive manufacturers."
  },
  {
    icon: <FaCapsules />,
    title: "Pharmaceutical",
    description:
      "Reliable sourcing solutions for pharmaceutical manufacturing facilities."
  },
  {
    icon: <FaBolt />,
    title: "Power & Energy",
    description:
      "Industrial electrical, automation and maintenance products."
  },
  {
    icon: <FaFlask />,
    title: "Chemical",
    description:
      "Products for chemical processing plants and industrial operations."
  },
  {
    icon: <FaIndustry />,
    title: "Steel & Metal",
    description:
      "Engineering products, bearings, hydraulics and safety equipment."
  },
  {
    icon: <FaWarehouse />,
    title: "Warehousing",
    description:
      "Material handling, storage and logistics equipment."
  },
  {
    icon: <FaTools />,
    title: "Manufacturing",
    description:
      "Complete industrial procurement solutions for production facilities."
  },
  {
    icon: <FaCogs />,
    title: "Engineering",
    description:
      "Automation, electrical, pneumatics and mechanical products."
  }
];

function Industries() {
  return (
    <section className="industries section">
      <div className="container">

        <div className="section-header">
          <span>INDUSTRIES WE SERVE</span>

          <h2>Supporting Every Industrial Sector</h2>

          <p>
            SKEMRO Industrial Solutions delivers trusted
            procurement solutions across multiple industries,
            ensuring quality products, timely delivery and
            dependable service.
          </p>
        </div>

        <div className="industries-grid">

          {industries.map((industry, index) => (

            <div className="industry-card" key={index}>

              <div className="industry-icon">
                {industry.icon}
              </div>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Industries;