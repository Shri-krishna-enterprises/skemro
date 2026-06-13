import "./StatsCounter.css";

function StatsCounter() {
  return (
    <section className="stats-counter">

      <div className="container">

        <div className="stats-grid">

          <div className="stat-box">
            <h2>20+</h2>
            <p>Years Experience</p>
          </div>

          <div className="stat-box">
            <h2>500+</h2>
            <p>Products</p>
          </div>

          <div className="stat-box">
            <h2>100+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="stat-box">
            <h2>15+</h2>
            <p>States Served</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default StatsCounter;