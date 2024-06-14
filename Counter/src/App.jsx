import { useRef, useState } from "react"
import "./App.css"
function App() {
  const [count, setCount] = useState(0)
  const changeByRef = useRef(1)

  const increaseButtonClickHandler = () => {
    setCount((prevState)=>prevState+ Number(changeByRef.current.value))
    // setCount(count + Number(changeByRef.current.value))
  }
  const decreaseButtonClickHandler = () => {
    setCount((prevState)=>prevState- Number(changeByRef.current.value))

  }
  const resetButtonClickHandler=()=>{
    setCount(0)

  }

  return (
    <>
      <h1 className="header">Counter</h1>
      <div className="container">
        <h2>{count}</h2>
        <button onClick={decreaseButtonClickHandler}>-</button>
        <button onClick={increaseButtonClickHandler}>+</button>
        <p>
          Increment/Decrement by:-
          <input type="number" ref={changeByRef} defaultValue={1} />
        </p>
        <button onClick={resetButtonClickHandler}>Reset</button>
      </div>
    </>
  )
}

export default App
