import "./RequestQuoteHero.css";
import { FaClipboardCheck, FaShippingFast, FaIndustry } from "react-icons/fa";
import requestQuote from "../../assets/hero/request-quote.jpg";
function RequestQuoteHero() {
  return (
    <section className="quote-hero">

      <div className="container quote-hero-container">

        <div className="quote-content">

          <span className="quote-badge">
            REQUEST A QUOTATION
          </span>

          <h1>
            Get the <span>Best Industrial Quote</span> for Your Business
          </h1>

          <p>
            Whether you need industrial products, engineering components,
            safety equipment, or bulk procurement solutions, our team
            provides competitive pricing, genuine products, and timely delivery
            across India.
          </p>

          <div className="quote-features">

            <div>
              <FaClipboardCheck />
              <span>Quick Response</span>
            </div>

            <div>
              <FaIndustry />
              <span>Bulk Orders</span>
            </div>

            <div>
              <FaShippingFast />
              <span>Pan India Delivery</span>
            </div>

          </div>

        </div>

        <div className="quote-image">

           <img
                                    src={requestQuote}
                                    alt="Industrial Factory"
                                  />

        </div>

      </div>

    </section>
  );
}

export default RequestQuoteHero;