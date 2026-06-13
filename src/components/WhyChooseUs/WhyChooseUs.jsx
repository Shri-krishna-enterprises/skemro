import "./WhyChooseUs.css";
import { FaAward, FaTruck, FaUsers, FaTools } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaAward />,
      title: "Quality Products",
      description: "Premium industrial products that meet industry standards."
    },
    {
      icon: <FaTruck />,
      title: "Timely Delivery",
      description: "Efficient logistics and on-time project deliveries."
    },
    {
      icon: <FaTools />,
      title: "Wide Product Range",
      description: "Complete industrial solutions under one roof."
    },
    {
      icon: <FaUsers />,
      title: "Customer Focus",
      description: "Dedicated support and long-term business relationships."
    }
  ];

  return (
    <section className="why-choose">

      <div className="container">

        <div className="section-header">

          <span>WHY CHOOSE US</span>

          <h2>
            Trusted Industrial Supply Partner
          </h2>

          <p>
            We provide reliable products and professional service
            to industries across India.
          </p>

        </div>

        <div className="why-grid">

          {features.map((item, index) => (
            <div className="why-card" key={index}>

              <div className="icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;