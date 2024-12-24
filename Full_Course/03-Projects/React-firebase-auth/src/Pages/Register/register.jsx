import { useContext } from "react";
import CommonForm from "../../component/common-Form/common-form";
import { AuthContext } from "../../context/context";
import { registerFormElements } from "../../config/config";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../FirebaseConfig";

function RegisterPage() {
  const {
    registerFormData,
    setregisterFormData,
    RegisterWithFirebase,
    setloading,
  } = useContext(AuthContext);

  const navigate = useNavigate();

  function handelRegisterFormOnSubmit(event) {
    event.preventDefault();

    RegisterWithFirebase()
      .then((result) => {
        if (result.user) {
          updateProfile(result.user, {
            displayName: registerFormData.name,
          }).then(() => {
            if (auth.currentUser.displayName) {
              setloading(false);
              navigate("/profile");
            }
          });
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full max-w-sm mx-auto rounded-lg  font-bold  shadow-md">
        <div className="px-6 py-5">
          <p>RegisterPage</p>
          <h3>Welcome Back</h3>
          <CommonForm
            formControls={registerFormElements}
            formData={registerFormData}
            setformData={setregisterFormData}
            onSubmit={handelRegisterFormOnSubmit}
            buttonText={"Register"}
          />
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
