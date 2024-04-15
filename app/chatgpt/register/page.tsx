import Breadcrumb from "@/components/Common/Breadcrumb";
import Form from "@/components/Form";

const RegisterPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Register"
        description="Register for Android bootcamp with projects that mesmerize and engage"
      />
      <div className="my-20">
        <Form />
      </div>
    </>
  );
};

export default RegisterPage;
