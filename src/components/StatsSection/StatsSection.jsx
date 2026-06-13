import "./StatsSection.css";

function StatsSection() {
  const stats = [
    {
      number: "10+",
      title: "Years Experience"
    },
    
    {
      number: "5000+",
      title: "Products Available"
    },
    
  ];

  return (
    <section className="stats-section">

      <div className="container">

        <div className="stats-grid">

          {stats.map((item, index) => (
            <div className="stat-card" key={index}>

              <h2>{item.number}</h2>

              <p>{item.title}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default StatsSection;