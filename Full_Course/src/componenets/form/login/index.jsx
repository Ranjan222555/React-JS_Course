import { useState } from "react";
import CommonForm from "../common-form";
import { LoginFormElement } from "../config";


const initialFormData ={
  email: "",
    password: "",
}

function Loginrcomponent() {
  const [loginFormData, setLoginFormData] = useState(initialFormData);

  
  function submitbybutton(event){
    event.preventDefault();
    setLoginFormData(initialFormData);
  }
  console.log(loginFormData); 


  return (
    <div>
      <h2>Login Components</h2>
      <CommonForm
        formData={loginFormData}
        setformData={setLoginFormData}
        formcontrols={LoginFormElement}
        buttontext ={"Login"}
        submitbybutton ={submitbybutton}
      />
    </div>
    
  );
}
export default Loginrcomponent;