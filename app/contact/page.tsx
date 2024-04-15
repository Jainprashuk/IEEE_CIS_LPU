import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Contact us for any inquiries, feedback, or assistance. We're here to help and value your input. Reach out now!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
