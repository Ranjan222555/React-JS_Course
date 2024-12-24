import { useContext } from "react";
import { AuthContext } from "../../context/context";
import CommonForm from "../../component/common-Form/common-form";
import { loginFormcontrols } from "../../config/config";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { loginFormData, setloginFormData, LoginWithFirebase, setloading } =
    useContext(AuthContext);
  const navigate = useNavigate();

  function handelogingsubmit(event) {
    event.preventDefault();

    LoginWithFirebase().then((result) => {
      console.log(result, "resulsttt");
      if (result) {
        setloading(true);
        navigate("/profile");
      }
    });
  }

  return (
    <div className="w-full max-w-sm mx-auto rounded-lg  font-bold  shadow-md">
      <div className="px-6 py-5">
        <h2>Welcome Back</h2>
        <p>LoginPage</p>
        <CommonForm
          formControls={loginFormcontrols}
          formData={loginFormData}
          setformData={setloginFormData}
          buttonText={"Login"}
          onSubmit={handelogingsubmit}
        />
      </div>
    </div>
  );
}
export default LoginPage;
