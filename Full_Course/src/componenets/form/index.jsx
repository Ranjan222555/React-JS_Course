import { useState } from "react";

export default function Formcomponent() {
  const [namevalue, setnamevalue] = useState("");
  const [emailvalue, setemailvalue] = useState("");

  const [formData, setformData] = useState({
    name: "",
    email: "",
  });

  //   function chnagebyNameinput(event) {
  //     const { value } = event.target;
  //     //    setnamevalue(event.target.value)  // this will also work
  //     setnamevalue(value);
  //   }
  //   function chnagebyEmailinput(event) {
  //     const { value } = event.target;
  //     setemailvalue(value);
  //   }

  function onchaneForm(event) {
    const { name, value } = event.target;

    setformData({
      ...formData,
      [name]: value,
    });
  }

  function submitbybutton(event) {
    event.preventDefault();

    // call api and pass the value
    // console.log(namevalue, emailvalue);
  }

  console.log(formData);

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={submitbybutton}>
        <input
          type="name"
          value={formData.name}
          name="name"
          id="name"
          placeholder="Enter your name"
          onChange={onchaneForm}
        />
        <input
          type="Email"
          value={formData.email}
          name="email"
          id="email"
          placeholder="Enter your Email"
          onChange={onchaneForm}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
