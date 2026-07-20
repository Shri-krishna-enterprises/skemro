import "./ProductModal.css";

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="modal-icon">
          {product.icon}
        </div>

        <span className="modal-category">
          {product.category}
        </span>

        <h2>{product.name}</h2>

        <p>{product.description}</p>

        <div className="modal-section">

          <h3>Available Brands</h3>

          <div className="modal-chips">

            {product.brands.map((brand, index) => (
              <span key={index}>{brand}</span>
            ))}

          </div>

        </div>

        <div className="modal-section">

          <h3>Applications</h3>

          <div className="modal-chips">

            {product.applications.map((item, index) => (
              <span key={index}>{item}</span>
            ))}

          </div>

        </div>

        <div className="modal-buttons">

          <button className="quote-button">
            Request Quote
          </button>

          <button
            className="close-button"
            onClick={onClose}
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductModal;