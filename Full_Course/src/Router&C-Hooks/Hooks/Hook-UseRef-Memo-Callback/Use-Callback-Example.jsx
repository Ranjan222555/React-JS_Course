import { useCallback, useState } from "react";
import { Outlet } from "react-router-dom";
import Counter from "./counter/counter";

function UseCallbackHooks() {

    const [countone, setcountone] =useState(0)
    const [counttwo, setcounttwo] =useState(0)

    const memorisevalueone = useCallback(()=> setcountone(countone+1),[countone])
    const memorisevaluetwo = useCallback(()=> setcounttwo(counttwo+1),[counttwo])
  return (
    <div>
      <h2>This is UseCallback Example</h2>
      <Counter CounterValue={countone} onClick={memorisevalueone}/>
      <Counter CounterValue={counttwo} onClick={memorisevaluetwo}/>
    </div>
  );
}
export default UseCallbackHooks;
