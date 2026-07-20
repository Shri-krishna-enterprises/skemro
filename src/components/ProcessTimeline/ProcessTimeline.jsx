import "./ProcessTimeline.css";
import {
  FaClipboardList,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaShoppingCart,
  FaSearch,
  FaBoxOpen,
  FaTruck,
  FaMapMarkedAlt,
} from "react-icons/fa";

const processSteps = [
  {
    icon: <FaClipboardList />,
    title: "Requirement",
    description:
      "Share your product requirement, specifications, quantity and preferred brands.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Quotation",
    description:
      "Our team prepares a competitive quotation with product availability and delivery timeline.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Order Confirmation",
    description:
      "After approval, we confirm your order and initiate the procurement process.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Procurement",
    description:
      "Products are sourced from trusted manufacturers and verified supply partners.",
  },
  {
    icon: <FaSearch />,
    title: "Quality Inspection",
    description:
      "Products undergo quality verification before dispatch to ensure reliability.",
  },
  {
    icon: <FaBoxOpen />,
    title: "Packaging",
    description:
      "Items are securely packed to ensure safe transportation and delivery.",
  },
  {
    icon: <FaTruck />,
    title: "Dispatch",
    description:
      "Orders are dispatched through reliable logistics partners with shipment tracking.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Delivery",
    description:
      "Timely delivery across India with dedicated customer support throughout the process.",
  },
];

function ProcessTimeline() {
  return (
    <section className="process section">
      <div className="container">

        <div className="section-header">
          <span>OUR PROCESS</span>

          <h2>Simple & Efficient Procurement Process</h2>

          <p>
            From your initial enquiry to final delivery,
            SKEMRO ensures a transparent, reliable and
            hassle-free procurement experience.
          </p>
        </div>

        <div className="timeline">

          {processSteps.map((step, index) => (
            <div className="timeline-card" key={index}>

              <div className="timeline-number">
                {index + 1}
              </div>

              <div className="timeline-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProcessTimeline;