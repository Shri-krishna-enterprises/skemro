import { Link, useParams } from "react-router-dom";
import products from "../../data/products";
import ContactCTA from "../../components/ContactCTA/ContactCTA";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The requested product does not exist.</p>

        <Link to="/products" className="back-btn">
          Back to Products
        </Link>
      </section>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <>
      <section className="product-details">

        <div className="container">

          <div className="product-header">

            <div className="product-icon">
              {product.icon}
            </div>

            <div>

              <span className="product-category">
                {product.category}
              </span>

              <h1>{product.name}</h1>

              <p>{product.description}</p>

              <Link
                to="/request-quote"
                className="quote-btn"
              >
                Request Quote
              </Link>

            </div>

          </div>

          <div className="details-grid">

            <div className="details-card">

              <h2>Available Brands</h2>

              <ul>
                {product.brands.map((brand) => (
                  <li key={brand}>{brand}</li>
                ))}
              </ul>

            </div>

            <div className="details-card">

              <h2>Applications</h2>

              <ul>
                {product.applications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

            </div>

            <div className="details-card">

              <h2>Industries Served</h2>

              <ul>
                {product.industries.map((industry) => (
                  <li key={industry}>{industry}</li>
                ))}
              </ul>

            </div>

            <div className="details-card">

              <h2>Key Features</h2>

              <ul>
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

            </div>

          </div>
                    <section className="related-products">

            <div className="section-title">
              <h2>Related Products</h2>
              <p>Explore other industrial products from our portfolio.</p>
            </div>

            <div className="related-grid">
              {relatedProducts.length > 0 ? (
                relatedProducts.map((item) => (
                  <div className="related-card" key={item.id}>

                    <div className="related-icon">
                      {item.icon}
                    </div>

                    <h3>{item.name}</h3>

                    <p>{item.description}</p>

                    <Link
                      to={`/products/${item.id}`}
                      className="details-btn"
                    >
                      View Details
                    </Link>

                  </div>
                ))
              ) : (
                <div className="no-related">
                  <p>No related products available.</p>
                </div>
              )}
            </div>

          </section>

        </div>

      </section>

      <ContactCTA />

    </>
  );
}

export default ProductDetails;