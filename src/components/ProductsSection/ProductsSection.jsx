import "./ProductsSection.css";
import { Link } from "react-router-dom";

function ProductsSection() {

const categories = [
  {
    id: 1,
    title: "Abrasives",
    image: "https://cdn.shopify.com/s/files/1/0792/0874/3193/articles/Types_of_abrasives_2.webp?v=1758885454"
  },
  {
    id: 2,
    title: "Appliances",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSg9XMYs7qwQZ9SHHs6l6s8Uhdf5gKiWHEg&s"
  },
  {
    id: 3,
    title: "Oils & Lubricants",
    image: "https://abro.com/wp-content/uploads/2020/07/Lubricant-Group-2018.png"
  },
  {
    id: 4,
    title: "Bearings",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMesCrwSTDXt7TmIIWaFl3pBrh9bs27hFJw&s"
  },
  {
    id: 5,
    title: "Transmission",
    image: "https://coastlineautomatics.com.au/wp-content/uploads/2025/08/Automatic-Transmission-Components.webp"
  },

  {
    id: 6,
    title: "Chemical Reagents",
    image: "https://cpimg.tistatic.com/11345278/b/4/Ion-Exchange-Resin-FFIP..jpg"
  },
  {
    id: 7,
    title: "ETP/STP/RO Plant Supplies",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT43n7H4LdD0FZmYUeKfBpfkNFb5gWwXywoDg&s"
  },
  {
    id: 8,
    title: "Wires & Cables",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJMHqZMOLecAjtzqkB2k592N20zMXW0QV9eg&s"
  },
  {
    id: 9,
    title: "Automation & Sensors",
    image: "https://www.sensorsite.com/images/home.png"
  },
  {
    id: 10,
    title: "LED & Lighting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf6E6x59mIwkC6M8fTzwrk4VVCbAg2vy_v0g&s"
  },
  {
    id: 11,
    title: "Hydraulics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5EOMPXOe5LjeoPsRz3ln_IYsS-VfL91CYA&s"
  },
  {
    id: 12,
    title: "Hardwares",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UlsoNFTqBF9Wv-DeGy8CHYwWaZXmTw0Jjw&s"
  },
  {
    id: 13,
    title: "Pipe & Fittings",
    image: "https://5.imimg.com/data5/SELLER/Default/2024/11/463615250/RL/FU/EE/40630879/upvc-pipe-fittings.jpg"
  },
  {
    id: 14,
    title: "Material Handling",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXctj0btAE7PPqw_7HgtaveeFgzVEJKWHnLg&s"
  },
  {
    id: 15,
    title: "Measurement & Testing",
    image: "https://5.imimg.com/data5/SELLER/Default/2025/4/504293127/EH/CS/AT/135796144/measuring-testing-instruments.png"
  },
  {
    id: 16,
    title: "Safety",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbfSY9sRyUDsMFXe41QRKBbe1i5KaGxfB6VA&s"
  },
  {
    id: 17,
    title: "Pneumatics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGHqKBNKL3wqfmR6NU9M7qTK_92ZHC_mYrg&s"
  },
  {
    id: 18,
    title: "Pumps & Motors",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhLu_CpoYo5jGCYyL7IZeVWP8Y8M_kaTFIg&s"
  },
  {
    id: 19,
    title: "Raw Material",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/stainless-steel-industrial-raw-material-2213101601-24hw7ht6.jpg"
  },
  {
    id: 20,
    title: "IT & Electronics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-HHTZOyjBESJ2pyoTOc1aTUEn0IbAuy19Dg&s"
  },
  {
    id: 21,
    title: "Welding & Soldering",
    image: "https://vernlewis.com/wp-content/uploads/2020/08/welding-tools.jpg"
  },
  {
    id: 22,
    title: "Power Tools",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2wGUbhAIZJAZQtX-DnOFb1T2CMyRBIiGoyA&s"
  },
  {
    id: 23,
    title: "Packaging Materials",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8JWL0VMTvTqtgyurwGVyo7UUAZHO3hLp2g&s"
  }
  
];
  return (
    <section className="products-section">

      <div className="container">

        <div className="section-header">

          <span>OUR CATEGORIES</span>

          <h2>Industrial Product Categories</h2>

          <p>
            Explore our complete range of industrial
            products and engineering solutions.
          </p>

        </div>

        <div className="category-grid">

          {categories.map((item) => (

            <div
              className="category-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
                className="category-image"
              />

              <h3>{item.title}</h3>

              <Link
                to={`/products?category=${encodeURIComponent(item.title)}`}
                className="product-btn"
              >
                View Brands
              </Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ProductsSection;