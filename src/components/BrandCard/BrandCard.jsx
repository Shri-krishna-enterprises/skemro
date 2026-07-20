import "./BrandCard.css";

function BrandCard({ brand, category }) {

  const getInitials = (name) => {

    const words = name.trim().split(" ");

    if (words.length === 1) {

      if (name.length <= 3) return name.toUpperCase();

      return name.substring(0, 2).toUpperCase();
    }

    return (
      words[0][0] +
      words[words.length - 1][0]
    ).toUpperCase();
  };

  return (

    <div className="brand-card">

      <div className="brand-badge">

        {getInitials(brand)}

      </div>

      <h3>{brand}</h3>

      <p>{category}</p>

      <div className="brand-divider"></div>

      <span className="brand-status">

        Trusted Industrial Brand

      </span>

    </div>

  );
}

export default BrandCard;