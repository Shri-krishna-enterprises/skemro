import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import brandsData from "../../data/brands";
import "./Products.css";
import brandLogos from "../../data/brandLogos";

function Products() {

  const [searchParams] = useSearchParams();

  const selectedCategory =
    searchParams.get("category");

  const [search, setSearch] = useState("");

  useEffect(() => {

    if (selectedCategory) {

      const element =
        document.getElementById(selectedCategory);

      if (element) {

        setTimeout(() => {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }, 300);

      }

    }

  }, [selectedCategory]);

  const filteredCategories = Object.entries(
    brandsData
  ).filter(([category, brands]) => {

    if (!search) return true;

    return (

      category
        .toLowerCase()
        .includes(search.toLowerCase()) ||

      brands.some((brand) =>
        brand
          .toLowerCase()
          .includes(search.toLowerCase())
      )

    );

  });

  return (
    <>
      <section className="products-hero">

        <div className="overlay"></div>

        <div className="container hero-content">

          <h1>Our Brand Partners</h1>

          <p>
            Trusted industrial brands across
            all product categories.
          </p>

        </div>

      </section>

      <section className="products-page">

        <div className="container">

          <div className="section-header">

            <span>OUR BRANDS</span>

            <h2>
              Authorized Brand Partners
            </h2>

          </div>

          <div className="search-box">

            <input
              type="text"
              placeholder="Search Category or Brand..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          {filteredCategories.map(
            ([category, brands]) => (

              <div
                className={`category-section ${
                  selectedCategory === category
                    ? "active-category-section"
                    : ""
                }`}
                key={category}
                id={category}
              >

                <h2 className="category-title">
                  {category}
                </h2>

                <div className="brands-grid">

                  {brands.map(
                    (brand, index) => (

                      <div
                        className="brand-card"
                        key={index}
                      >

                        <img
  src={
    brandLogos[brand] ||
    `https://dummyimage.com/220x100/ffffff/000000.png&text=${encodeURIComponent(brand)}`
  }
  alt={brand}
  className="brand-image"
/>

<h3>{brand}</h3>


                      </div>

                    )
                  )}

                </div>

              </div>

            )
          )}

        </div>

      </section>
    </>
  );
}

export default Products;