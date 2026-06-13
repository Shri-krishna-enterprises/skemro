import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>

          <h2>Shri Krishna Enterprises</h2>

          <p>
            Trusted supplier of industrial products
            and engineering solutions.
          </p>

        </div>

        <div>

          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Industries</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

        </div>

        <div>

          <h3>Products</h3>

          <ul>
            <li>Pipes</li>
            <li>Flanges</li>
            <li>Valves</li>
            <li>Fittings</li>
            <li>Fasteners</li>
          </ul>

        </div>

        <div>

          <h3>Contact</h3>

          <p>+91 XXXXX XXXXX</p>

          <p>info@skeindia.com</p>

          <p>India</p>

        </div>

      </div>

      <div className="footer-bottom">

        © 2020 Shri Krishna Enterprises.
        All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;