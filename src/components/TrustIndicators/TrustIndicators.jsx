import "./TrustIndicators.css";
import {
  FiPackage,
  FiShield,
  FiTruck,
  FiUsers,
} from "react-icons/fi";

function TrustIndicators() {
  const data = [
    {
      icon: <FiPackage />,
      title: "5000+",
      subtitle: "Industrial Products",
    },
    {
      icon: <FiShield />,
      title: "100+",
      subtitle: "Trusted Brands",
    },
    {
      icon: <FiTruck />,
      title: "Pan India",
      subtitle: "Supply Network",
    },
    {
      icon: <FiUsers />,
      title: "500+",
      subtitle: "Satisfied Clients",
    },
  ];

  return (
    <section className="trust-section">
      <div className="container">

        <div className="trust-grid">

          {data.map((item, index) => (
            <div className="trust-card card" key={index}>

              <div className="trust-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.subtitle}</p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default TrustIndicators;