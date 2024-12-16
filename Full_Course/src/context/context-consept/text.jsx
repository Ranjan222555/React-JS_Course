import { useContext } from "react";
import { Globalcontext } from "..";

function Textofcontext() {
  const { buttonchange } = useContext(Globalcontext);

  return (
    <h2
      style={{
        fontSize: buttonchange === "yellow" ? "50px" : "100px",
        backgroundColor: buttonchange === "yellow" ? "blue" : "brown",
        color: buttonchange === "yellow" ? "red" : "white",
      }}
    >
      change some text
    </h2>
  );
}

export default Textofcontext;
