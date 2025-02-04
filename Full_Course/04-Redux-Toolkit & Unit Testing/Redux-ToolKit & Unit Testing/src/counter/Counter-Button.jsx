import { useDispatch } from "react-redux";
import { IncreaseCountAction } from "../store/Slice/counter";

function Counter_Button() {

    const dispatch = useDispatch()

    function HandelOnclick (){
        dispatch(IncreaseCountAction({
            id : 1,
            name : "Ranjan"
        }))
    }

  return (
    <div>
      <button onClick={HandelOnclick}
      style={{ background: "black", color: "white" }}>
        Increase Value
      </button>
    </div>
  );
}

export default Counter_Button;
