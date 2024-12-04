import { useState } from "react"


function App() {
    const username = "Kumar Majhi"

    let [counter , setcount] = useState(5)
    // let counter = 5
  const addvalue = () =>{
    // counter += 1
    setcount(counter +=1)
  }
  const removevalue = () =>{
    // counter += 1
    setcount(counter -=1)
  }

  return (
    <>
      <h1>Hello world with viteReact || Ranjan {username} </h1>
      <h2>counter Value : {counter} </h2>
      <button onClick={addvalue}
      >Add Value</button>
      <br />
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
