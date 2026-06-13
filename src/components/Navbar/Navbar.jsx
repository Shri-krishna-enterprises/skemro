import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
function Navbar() {
  return (
    <header className="navbar">

      <div className="logo-section">
<img
  src={logo}
  alt="Shri Krishna Enterprises"
/>

        <div className="company-name">
          <h3>Shri Krishna Enterprises</h3>
        </div>

      </div>

      <nav>

        <NavLink to="/">Home</NavLink>

        <NavLink to="/products">Products</NavLink>

        <NavLink to="/industries">Industries</NavLink>

        <NavLink to="/about">About Us</NavLink>


      </nav>

      <a href="/contact" className="quote-btn">
        Contact Us
      </a>

    </header>
  );
}

export default Navbar;