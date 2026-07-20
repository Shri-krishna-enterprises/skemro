import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Services from "./pages/Services/Services";
import Brands from "./pages/Brands/Brands";
import Contact from "./pages/Contact/Contact";
import RequestQuote from "./pages/RequestQuote/RequestQuote";
import NotFound from "./pages/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />} />

        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        <Route path="/services" element={<Services />} />

        <Route path="/brands" element={<Brands />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/request-quote"
          element={<RequestQuote />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;