import AboutHero from "../../components/AboutHero/AboutHero";
import CompanyOverview from "../../components/CompanyOverview/CompanyOverview";
import MissionVision from "../../components/MissionVision/MissionVision";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

function About() {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <MissionVision />
      <WhyChooseUs />
      <ContactCTA />
    </>
  );
}

export default About;