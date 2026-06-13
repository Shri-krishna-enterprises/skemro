import "./Industries.css";

const industries = [
  {
    title: "Oil & Gas",
    description:
      "Supplying industrial pipes, flanges and valves for oil & gas operations."
  },
  {
    title: "Power Plants",
    description:
      "Reliable industrial products for thermal and renewable energy plants."
  },
  {
    title: "Water Treatment",
    description:
      "Corrosion resistant solutions for water treatment facilities."
  },
  {
    title: "Chemical Industry",
    description:
      "Industrial-grade products built for harsh environments."
  },
  {
    title: "Construction",
    description:
      "Engineering products supporting infrastructure projects."
  },
  {
    title: "Manufacturing",
    description:
      "Trusted components for manufacturing facilities."
  }
];

function Industries() {
  return (
    <>
      <section className="industries-hero">

        <div className="overlay"></div>

        <div className="container industries-content">

          <h1>Industries We Serve</h1>

          <p>
            Supporting multiple industries with
            premium industrial products.
          </p>

        </div>

      </section>

      <section className="industries-section">

        <div className="container">

          <div className="section-header">

            <span>OUR INDUSTRIES</span>

            <h2>Trusted Across Industries</h2>

          </div>

          <div className="industry-grid">

            {industries.map((item,index)=>(
              <div className="industry-card" key={index}>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

    </>
  );
}

export default Industries;