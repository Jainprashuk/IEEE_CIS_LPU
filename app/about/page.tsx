import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import AboutSectionThree from "@/components/About/aboutsectionthree";


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About US"
        description="All About IEEE , LPU & IEEE CIS LPU"
      />
      <AboutSectionOne />
      
    </>
  );
};

export default AboutPage;
