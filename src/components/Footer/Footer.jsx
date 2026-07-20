// 
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-col">

          <h2>SKEMRO</h2>

          <p>
            Your trusted partner for industrial
            procurement, engineering products, and
            sourcing solutions across multiple
            industries.
          </p>
          <p>
            All trademarks and logos are the property of their 
            respective owners and are used solely to identify 
            the products being sold.
          </p>
        </div>

        <div className="footer-col">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/services">Services</Link>
          <Link to="/brands">Brands</Link>
          <Link to="/contact">Contact</Link>

        </div>

        <div className="footer-col">

          <h3>Contact</h3>

          <p>
            <FaEnvelope />
            sales@skemro.com
          </p>

          <p>
            <FaMapMarkerAlt />
            Sector 115 , Sorkha , Noida 201301 , India
          </p>

        </div>

        <div className="footer-col">

          <h3>Follow Us</h3>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {year} SKEMRO Industrial Solutions. All
          Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;