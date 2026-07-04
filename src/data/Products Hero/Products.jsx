import { useSearchParams } from "react-router-dom";
import brandsData from "../../data/brands";
import brandLogos from "../../data/brandLogos";
import "./Products.css";

function Products() {

  const [searchParams] = useSearchParams();

  const selectedCategory =
    searchParams.get("category");

  const brands =
    brandsData[selectedCategory] || [];

  return (
    <>
      <section className="products-hero">

        <div className="overlay"></div>

        <div className="container hero-content">

          <h1>
            {selectedCategory || "Our Brands"}
          </h1>

          <p>
            Dealing in Multiple Brands
          </p>

        </div>

      </section>

      <section className="products-page">

        <div className="container">

          <div className="section-header">

            <span>OUR BRANDS</span>

            <h2>
              {selectedCategory}
            </h2>

          </div>

          <div className="brands-grid">

            {brands.length > 0 ? (

              brands.map((brand, index) => (

                <div
                  className="brand-card"
                  key={index}
                >

                  <img
                    src={
                      brandLogos[brand]
                        ? brandLogos[brand]
                        : `https://dummyimage.com/220x100/ffffff/000000.png&text=${encodeURIComponent(brand)}`
                    }
                    alt={brand}
                    className="brand-image"
                    onError={(e) => {
                      e.target.src =
                        `https://dummyimage.com/220x100/ffffff/000000.png&text=${encodeURIComponent(brand)}`;
                    }}
                  />

                  <h3>{brand}</h3>

                  <p>
                    Dealing in Multiple Brands
                  </p>

                </div>

              ))

            ) : (

              <div className="no-products">

                No Brands Available

              </div>

            )}

          </div>

        </div>

      </section>
    </>
  );
}

export default Products;