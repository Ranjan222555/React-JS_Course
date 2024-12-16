import { useEffect } from "react";
import { useRef } from "react";
import UseMemoHooks from "./Use-Memo-Example";
import { Outlet } from "react-router-dom";

function UseRefHook() {
  const countvalue = useRef(0);
  const divElement = useRef();
  const inputRefelelment = useRef();

  function HandelClick() {
    countvalue.current++;
  }

  useEffect(() => {
    const getdivElement = divElement.current;
    inputRefelelment.current.focus();
    getdivElement.style.color = "red";

    setTimeout(() => {
      getdivElement.style.color = "green";
      setTimeout(() => {
        getdivElement.style.color = "white";
      }, 2000);
    }, 2000);
    console.log(getdivElement);
  }, []);
  return (
    <div>
      <h2>UseRef, UseMemo, Useallback Hooks</h2>
      <h2>This is UseRef Example</h2>
      <button onClick={HandelClick}>Click Me</button>
      <div ref={divElement}>something text</div>
      <input type="text" placeholder="Enter something" ref={inputRefelelment} />
    </div>
  );
}
export default UseRefHook;
