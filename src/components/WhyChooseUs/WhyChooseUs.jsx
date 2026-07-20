import {
  FaCheckCircle,
  FaBoxes,
  FaGlobe,
  FaUsers,
  FaHeadset,
  FaShippingFast,
} from "react-icons/fa";
import "./WhyChooseUs.css";

const features = [
  {
    icon: <FaCheckCircle />,
    title: "Quality Assured Products",
    desc: "We source products from trusted manufacturers to ensure reliability and consistent quality.",
  },
  {
    icon: <FaGlobe />,
    title: "Trusted Global Brands",
    desc: "Access to a wide range of internationally recognized industrial brands.",
  },
  {
    icon: <FaBoxes />,
    title: "Bulk Supply",
    desc: "Efficient procurement and timely supply for projects of every scale.",
  },
  {
    icon: <FaShippingFast />,
    title: "Fast Procurement",
    desc: "Quick sourcing and delivery support to minimize project delays.",
  },
  {
    icon: <FaUsers />,
    title: "Industry Expertise",
    desc: "Experienced team helping you select the right industrial products.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    desc: "Professional customer support from inquiry to order completion.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">

        <div className="section-title">
          <span>WHY CHOOSE SKEMRO</span>

          <h2>Your Reliable Industrial Supply Partner</h2>

          <p>
            We combine quality products, trusted brands, and responsive
            service to support your industrial procurement requirements.
          </p>
        </div>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;