import Hero from "../../components/Hero/Hero";
import TrustIndicators from "../../components/TrustIndicators/TrustIndicators";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProductCategories from "../../components/ProductCategories/ProductCategories";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import IndustriesServed from "../../components/IndustriesServed/IndustriesServed";
import BrandsSection from "../../components/BrandsSection/BrandsSection";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <AboutSection />
      <ProductCategories />
      <BrandsSection />
      <IndustriesServed />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}

export default Home;