import { useState } from "react";
import CommonForm from "../common-form";
import { RegisterFormElement } from "../config";

const initialState={
  name:"",
  email:"",
  pssword:"",
}



export default function Registercomponent() {

  const [registerFormData, setregisterFormData] =useState(initialState)

  function onRegistersubmit(event){
    event.preventDefault();
    
    setregisterFormData(initialState)
  }
  // console.log(registerFormData);
  
  return (
    <div>
      <h2>Register Components</h2>
      <CommonForm
        formcontrols={RegisterFormElement}
        formData={registerFormData}
        setformData={setregisterFormData}
        buttontext={"Register"}
        submitbybutton={onRegistersubmit}
      />
    </div>
  );
}
