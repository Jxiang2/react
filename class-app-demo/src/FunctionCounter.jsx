import React, { memo, useEffect, useState } from 'react'

function FunctionCounter({ propToIgnore }) {
  const [counter, setCounter] = useState(0)

  console.log('function child rendered')

  useEffect(() => {
    console.log('component has mounted or updated')

    return () => {
      console.log(`we will cleanup - the current count is ${counter}`)
    }
  }, [counter])

  return (
    < div className="App">
      Function Counter: {counter}
      <button onClick={() => {
        setCounter(prev => counter + 1)
      }}>+
      </button>
      <button onClick={() => {
        setCounter(prev => counter - 1)
      }}>-
      </button>
      {propToIgnore}
    </ div>
  )
}

// component re-render only if props change
export default memo(FunctionCounter)