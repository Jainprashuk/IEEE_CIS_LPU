import Breadcrumb from "@/components/Common/Breadcrumb";
import HackSectionOne from "@/components/hackathon/HackSectionOne"

const HackathonPage = () => {
    return (
      <>
        <Breadcrumb
          pageName="Hackathon"
          description=""
        />
        <HackSectionOne />
      </>
    );
  };
  
  export default HackathonPage;