import { useEffect, useState } from "react";
import Productitem from "./Itemproduct-comp";
import "./style.css";
import { useCallback } from "react";

function Productlist({ name, city, listofproduct }) {
  // let othername = false;
  const initialname = true;
  const [othername, setothername] = useState(initialname);
  const [count, setcount] = useState(0);
  const [countstyle, setcountstyle] = useState(false);

  function changetext() {
    setothername(!othername);
  }
  function forincreaseCount() {
    setcount(count + 1);
  }

  // function textothername(getname){
  //     return  getname? <h4>My name is {name} and my city is {city}</h4>
  //     : <h4>"Hello World !"</h4>
  // }

  // const textothername = othername? <h4>My name is {name} and my city is {city}</h4>
  //     : <h4>"Hello World !"</h4>

  // let textothername = null;
  // if (othername){
  //   textothername = <h4>My name is {name} and my city is {city}</h4>
  // }else{
  //   textothername = <h4>"Hello World !"</h4>
  // }

  useEffect(() => {
    setothername(!othername); //working like as class base didmount
    // console.log("this is useeffect"); //show 1st time as a page relode
  }, []);
  useEffect(() => {
    if (count === 5) setcountstyle(true);
  }, [count]);
  // console.log(countstyle);

  return (
    <div>
      <h2 className="title">Ecommerce website</h2>
      {/* {textothername(othername)} */} {/*this is a function with variable*/}
      {/*textothername*/} {/*this value store in variable*/}
      {othername ? (
        <h4>
          My name is {name} and my city is {city}
        </h4>
      ) : (
        <h4>"Hello World !"</h4>
      )}
      <button onClick={changetext}>ToggleText</button>
      <div>
        <h4>count is {count}</h4>
      </div>
      <button
        style={{
          backgroundColor: countstyle ? "black" : "yellow",
          color: countstyle ? "red" : "blue",
        }}
        onClick={forincreaseCount}
      >
        Increasecount
      </button>
      <h3>
        {listofproduct.map((items, key) => (
          <Productitem eachproduct={items} key={key} />
        ))}
      </h3>
    </div>
  );
}
export default Productlist;
