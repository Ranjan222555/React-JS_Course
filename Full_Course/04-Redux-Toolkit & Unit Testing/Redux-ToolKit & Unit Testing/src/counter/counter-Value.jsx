import { useSelector } from "react-redux";

function Counter_Value() {
  // const state = useSelector((state) => state);
  // const {countValue} = state;
  //   console.log(state);

  const countValue = useSelector((state) => state.countValue);

  return (
    <div>
      <h2>Counter Value is = {countValue}</h2>
    </div>
  );
}

export default Counter_Value;
