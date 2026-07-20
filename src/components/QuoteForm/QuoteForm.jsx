import "./QuoteForm.css";

function QuoteForm() {
  return (
    <section className="quote-section">

      <div className="container">

        <div className="quote-wrapper">

          <div className="quote-info">

            <h2>Why Request a Quote?</h2>

            <ul>
              <li>✔ Competitive Industrial Pricing</li>
              <li>✔ Genuine Products</li>
              <li>✔ Bulk Procurement Support</li>
              <li>✔ Trusted Global Brands</li>
              <li>✔ Fast Response from Our Team</li>
            </ul>

          </div>

          <div className="quote-form">

            <h2>Request Your Quote</h2>

            <form>

              <input
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                placeholder="Business Email"
                required
              />

              <input
                type="text"
                placeholder="Company Name"
              />

              <input
                type="text"
                placeholder="Required Product"
                required
              />

              <input
                type="number"
                placeholder="Estimated Quantity"
              />

              <textarea
                rows="6"
                placeholder="Describe your product requirements..."
              ></textarea>

              <button type="submit">
                Request Quote
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default QuoteForm;