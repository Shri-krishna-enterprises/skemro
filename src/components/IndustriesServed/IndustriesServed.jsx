import {
  FaIndustry,
  FaCar,
  FaBolt,
  FaOilCan,
  FaFlask,
  FaCogs,
  FaBuilding,
  FaBoxes,
} from "react-icons/fa";
import "./IndustriesServed.css";

const industries = [
  {
    icon: <FaIndustry />,
    title: "Steel Industry",
    desc: "Reliable industrial products for steel manufacturing and processing.",
  },
  {
    icon: <FaCar />,
    title: "Automobile",
    desc: "Components and industrial solutions for automotive manufacturing.",
  },
  {
    icon: <FaBolt />,
    title: "Power & Energy",
    desc: "Supplying electrical and mechanical products for power plants.",
  },
  {
    icon: <FaOilCan />,
    title: "Oil & Gas",
    desc: "Industrial procurement solutions for oil and gas operations.",
  },
  {
    icon: <FaFlask />,
    title: "Chemical",
    desc: "Quality industrial supplies for chemical processing industries.",
  },
  {
    icon: <FaCogs />,
    title: "Engineering",
    desc: "Industrial equipment and engineering support products.",
  },
  {
    icon: <FaBuilding />,
    title: "Infrastructure",
    desc: "Products supporting construction and infrastructure projects.",
  },
  {
    icon: <FaBoxes />,
    title: "Manufacturing",
    desc: "End-to-end sourcing solutions for manufacturing industries.",
  },
];

function IndustriesServed() {
  return (
    <section className="industries">
      <div className="container">

        <div className="section-title">
          <span>INDUSTRIES WE SERVE</span>

          <h2>Supporting Multiple Industrial Sectors</h2>

          <p>
            We provide reliable industrial products and
            procurement solutions for a wide range of industries.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((item, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default IndustriesServed;