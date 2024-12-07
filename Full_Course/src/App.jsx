import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Classbasecomponent from "./componenets/classbase-component";
import Functionalcomponent from "./componenets/functional-component";
import Productlist from "./componenets/product";
import User from "./componenets/users";
import Buttonofcontext from "./componenets/context-consept/button";
import Textofcontext from "./componenets/context-consept/text";
import Usereducerexample from "./componenets/use-reducer";

let dummyproduct = ["product 1", "product 2", "product 3"];

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Js 2024</h1>
      {/* <Classbasecomponent/> */}
      {/* <Functionalcomponent/> */}
      {/* <Productlist listofproduct={dummyproduct} name="Ranjan" city="Balasore" /> */}
      {/* nested components= App->Productlist->productitem-> someotheritem -> button component */}
      {/* <User/> */}
      {/* <Buttonofcontext/> */}
      {/* <Textofcontext/> */}
      {/* <Usereducerexample/> */}
    </div>
  );
}

export default App;
