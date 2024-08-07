import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    /* 
      setCount((prevCount) => {
        prevCount + 1
      })
    */
    count < 20 ? setCount(c => c + 1) : null
  }

  const handleRemoveCount = () => {
    count > 0 ? setCount(c => c - 1) : null
  }

  return (
    <>
      <h1>Counter value: {count}</h1>
      <h1>Counter value: {count + 1}</h1>
      <h1>Counter value: {count + 2}</h1>
      <h1>Counter value: {count + 3}</h1>
      <button onClick={handleAddCount}>
        Add value
      </button>
      <br />
      <button onClick={handleRemoveCount}>
        remove value
      </button>
      <br />
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  )
}

export default Counter