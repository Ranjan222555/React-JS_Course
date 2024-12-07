import { useContext } from "react";
import { Globalcontext } from "../../context";

function Buttonofcontext() {
  const { Changeonbuttonclick } = useContext(Globalcontext);

  return <button onClick={Changeonbuttonclick}>change something</button>;
}

export default Buttonofcontext;
