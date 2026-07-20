import "./ProductSidebar.css";

function ProductSidebar({
  search,
  setSearch,
  categories,
  selectedCategory,
  setSelectedCategory,
  brands,
  selectedBrand,
  setSelectedBrand,
}) {
  return (
    <aside className="product-sidebar">

      <div className="sidebar-card">

        <h3>Search Product</h3>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <div className="sidebar-card">

        <h3>Categories</h3>

        <button
          className={selectedCategory === "All" ? "active" : ""}
          onClick={() => setSelectedCategory("All")}
        >
          All Products
        </button>

        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? "active" : ""
            }
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}

      </div>

      <div className="sidebar-card">

        <h3>Brands</h3>

        <button
          className={selectedBrand === "All" ? "active" : ""}
          onClick={() => setSelectedBrand("All")}
        >
          All Brands
        </button>

        {brands.map((brand) => (
          <button
            key={brand}
            className={
              selectedBrand === brand ? "active" : ""
            }
            onClick={() => setSelectedBrand(brand)}
          >
            {brand}
          </button>
        ))}

      </div>

    </aside>
  );
}

export default ProductSidebar;