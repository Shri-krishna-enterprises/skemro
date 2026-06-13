import "./About.css";
import ClientsSection from "../../components/ClientsSection/ClientsSection";
function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-overlay"></div>

        <div className="container about-hero-content">
          <h1>About Us</h1>

          <p>
            Delivering quality industrial solutions
            with reliability and excellence.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">

            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c"
                alt="Industry"
              />
            </div>

            <div className="about-content">
              <h2>Shri Krishna Enterprises</h2>

              <p>
    Shri Krishna Enterprises is a trusted industrial solutions and MRO supplier dedicated to supporting manufacturing plants, engineering industries, infrastructure projects, and commercial organizations across India. We provide a comprehensive range of industrial products, including abrasives, bearings, lubricants, electricals, automation solutions, safety equipment, hydraulics, pneumatics, and material handling products from globally recognized brands.

With a strong commitment to quality, reliability, and customer satisfaction, we strive to be a one-stop procurement partner for businesses seeking efficient and cost-effective industrial solutions.
              </p>

              <br />

              <p>
                Our focus is on customer satisfaction, quality
                assurance and timely delivery for every project.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">

          <div className="mission-grid">

            <div className="mission-card">
              <h3>Our Mission</h3>

              <p>
To deliver high-quality industrial products and innovative procurement solutions that help our customers improve productivity, reduce downtime, and achieve operational excellence.

We aim to build long-term partnerships by offering:

Genuine branded products
Competitive pricing
Timely deliveries
Technical support
Exceptional customer service
              </p>
            </div>

            <div className="mission-card">
              <h3>Our Vision</h3>

              <p>
To become one of India's most trusted and preferred industrial supply partners by providing world-class products, reliable service, and sustainable business solutions.

We envision:

Expanding our industrial product portfolio
Serving industries across India
Building strong relationships with global brands
Driving growth through innovation and customer-centric solutions
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Strengths */}
      <section className="strengths">
        <div className="container">

          <div className="section-header">
            <span>OUR STRENGTHS</span>

            <h2>Why Clients Trust Us</h2>
          </div>

          <div className="strength-grid">

            <div className="strength-card">
              Quality Products
            </div>

            <div className="strength-card">
              Timely Delivery
            </div>

            <div className="strength-card">
              Wide Product Range
            </div>

            <div className="strength-card">
              Customer Satisfaction
            </div>

          </div>

        </div>
      </section>
      <ClientsSection />
      {/* CTA */}
      <section className="about-cta">
        <div className="container">

          <h2>
            Looking For Industrial Solutions?
          </h2>

          <p>
            Connect with Shri Krishna Enterprises today.
          </p>

          <a href="/contact" className="about-btn">
            Contact Us
          </a>

        </div>
      </section>
    </>
  );
}

export default About;