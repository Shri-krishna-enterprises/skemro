import "./ClientsSection.css";

function ClientsSection() {

  const clients = [

    "https://cdn.moglix.com/online/prod/pwa/bundles/assets/img/Moglix_logo_new_animation-1.gif",
    "https://www.procmart.com/wp-content/uploads/2025/02/procmart-logo-only-01-1-Photoroom-e1740837941723.png",
    "https://static3.industrybuying.com/a-wk/images/webp/website-logo.webp",
    "https://www.heromotocorp.com/content/dam/hero-aem-website/brand/logo/logo.svg",
    "https://assets.tridentindia.com/Trident_Logo_Registered_489c31b1ff.svg",
    "https://d3l8d2poslghvh.cloudfront.net/storefront/images/svg/new-somany-logo.svg",
    "https://www.jubilantbhartia.com/images/logo.png",
    "https://www.noidapower.com/assets/img/logo.png",
    "https://www.subros.com/public/upload/logo/20251215131520.jpg",
  ];

  return (
    <section className="clients-section">

      <div className="container">

        <span className="section-tag">
          TRUSTED BY INDUSTRY LEADERS
        </span>

        <h2>Our Clients</h2>

        <div className="logo-slider">

          <div className="logo-track">

            {[...clients, ...clients].map(
              (logo, index) => (
                <div
                  className="logo-item"
                  key={index}
                >
<img
  src={logo}
  alt="client"
  loading="lazy"
  onError={(e) => {
    e.target.src =
      "https://via.placeholder.com/220x100?text=Client";
  }}
/>
                </div>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

export default ClientsSection;