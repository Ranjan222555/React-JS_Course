import { createContext, useState } from "react";

//create a context
export const Globalcontext = createContext(null);

//create global state that recived componenet as children

function Globalstate({ children }) {
  const [buttonchange, setbuttonchange] = useState("yellow");

  function Changeonbuttonclick() {
    setbuttonchange(buttonchange === "yellow" ? "bule" : "white");
  }

  return (
    <Globalcontext.Provider value={{ buttonchange, Changeonbuttonclick }}>
      {children}
    </Globalcontext.Provider>
  );
}

export default Globalstate;
