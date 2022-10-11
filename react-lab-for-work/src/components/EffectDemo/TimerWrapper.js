import React, { useEffect, useState, useCallback, useRef } from 'react'

let timerId = 0
function Timer() {
  const [count, setCount] = useState(0)
  const [tooltipShown, setTooltipShown] = useState(false)
  const tooltipPopperRef = useRef(null)

  // timer
  useEffect(() => {
    timerId++

    // timmerContent will be subscribed and run every 1000 ms
    function timmerContent() {
      console.log("Timer id: ", timerId)
      setCount(count => count + 1)
    }

    const timer = setInterval(() => {
      timmerContent()
    }, 1000)

    return () => { // when content of useEffect re-run, fire the cleanup function below
      console.log("Clean up old timer")
      clearInterval(timer)
    }
  }, [])

  // tooltip
  useEffect(() => {
    tooltipPopperRef.current?.addEventListener("mouseover", () => setTooltipShown(true))
    tooltipPopperRef.current?.addEventListener("mouseout", () => setTooltipShown(false))

    // make sure we operate on exact same dom elemenr when cleaning up
    const ref = tooltipPopperRef.current
    return () => {
      ref?.removeEventListener("mouseover", () => setTooltipShown(true))
      ref?.removeEventListener("mouseout", () => setTooltipShown(false))
    }
  }, [])

  return (
    <div style={{ marginTop: "50px" }}>
      <div>Timer: {count}</div>
      <div ref={tooltipPopperRef}>Tooltip popper</div>
      {tooltipShown && <div> Tooltip timer: {count}</div>}
    </div>
  )
}

export default function TimerWrapper() {
  const [idx, setIdx] = useState(0)

  const updateIndex = useCallback(
    () => setIdx(idx + 1), [idx]
  )

  return (
    <div>
      <Timer key={idx} />
      <div>
        <button onClick={updateIndex}>Update index</button>
      </div>
    </div>
  )
}
