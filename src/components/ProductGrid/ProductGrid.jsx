import { useMemo, useState } from "react";
import "./ProductGrid.css";

import products from "../../data/products";
import ProductSidebar from "../ProductSidebar/ProductSidebar";
import ProductCatalogCard from "../ProductCatalogCard/ProductCatalogCard";

const PRODUCTS_PER_PAGE = 6;

const ProductGrid = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    ...new Set(products.map((item) => item.category)),
  ];

  const brands = [
    ...new Set(products.flatMap((item) => item.brands)),
  ].sort();

  const filteredProducts = useMemo(() => {
    let data = [...products];

    data = data.filter((product) => {
      const searchMatch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const categoryMatch =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const brandMatch =
        selectedBrand === "All" ||
        product.brands.includes(selectedBrand);

      return (
        searchMatch &&
        categoryMatch &&
        brandMatch
      );
    });

    if (sortBy === "name-asc") {
      data.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (sortBy === "name-desc") {
      data.sort((a, b) => b.name.localeCompare(a.name));
    }

    return data;
  }, [
    search,
    selectedCategory,
    selectedBrand,
    sortBy,
  ]);

  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <section className="product-grid-section">

      <div className="product-grid-header">

        <h2>Industrial Product Catalog</h2>

        <p>
          Discover premium industrial products sourced
          from trusted global manufacturers.
        </p>

      </div>

      <div className="catalog-layout">

        <ProductSidebar
          search={search}
          setSearch={(value) => {
            setCurrentPage(1);
            setSearch(value);
          }}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={(value) => {
            setCurrentPage(1);
            setSelectedCategory(value);
          }}
          brands={brands}
          selectedBrand={selectedBrand}
          setSelectedBrand={(value) => {
            setCurrentPage(1);
            setSelectedBrand(value);
          }}
        />

        <div className="catalog-content">

          <div className="catalog-toolbar">

            <div>
              <h3>{filteredProducts.length} Products</h3>
            </div>

            <select
              value={sortBy}
              onChange={(e) => {
                setCurrentPage(1);
                setSortBy(e.target.value);
              }}
            >
              <option value="name-asc">
                Name (A-Z)
              </option>

              <option value="name-desc">
                Name (Z-A)
              </option>
            </select>

          </div>

          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((product) => (
              <ProductCatalogCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <div className="empty-state">

              <h2>No Products Found</h2>

              <p>
                Please try another search or filter.
              </p>

            </div>
          )}

          {totalPages > 1 && (

            <div className="pagination">

              {Array.from({
                length: totalPages,
              }).map((_, index) => (

                <button
                  key={index}
                  className={
                    currentPage === index + 1
                      ? "page-btn active"
                      : "page-btn"
                  }
                  onClick={() =>
                    setCurrentPage(index + 1)
                  }
                >
                  {index + 1}
                </button>

              ))}

            </div>

          )}

        </div>

      </div>

    </section>
  );
};

export default ProductGrid;