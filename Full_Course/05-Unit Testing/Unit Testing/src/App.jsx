import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Helloworld from './component/helloWorld'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>React Unit Testing</h1>
    <Helloworld/>
  </div>
  )
}

export default App
