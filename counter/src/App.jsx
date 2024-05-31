import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log("value added", counter);
  }

  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter);
    console.log("value added", counter);
  }

  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
