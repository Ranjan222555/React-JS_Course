import { memo } from "react";


function Counter({CounterValue, onClick}){
    console.log("rendering", CounterValue, onClick);
    
    return(
        <div>
            <p>{CounterValue}</p>
            <button onClick={onClick}>Click</button>
        </div>
    )
}
export default memo(Counter);