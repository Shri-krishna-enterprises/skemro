import Hero from "../../components/Hero/Hero";
import FeaturesBar from "../../components/FeaturesBar/FeaturesBar";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import StatsSection from "../../components/StatsSection/StatsSection";

import Testimonial from "../../components/Testimonial/Testimonial";
import CTASection from "../../components/CTASection/CTASection";
import ClientsSection from "../../components/ClientsSection/ClientsSection";

function Home() {
  return (
    <>
      <Hero />

      <FeaturesBar />

      <ProductsSection />

      <WhyChooseUs />

      <StatsSection />


      <Testimonial />
            <ClientsSection />
      <CTASection />

    </>
  );
}

export default Home;