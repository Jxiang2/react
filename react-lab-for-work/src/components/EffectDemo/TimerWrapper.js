import React, { useEffect, useState, useCallback, useRef } from "react";

/**
 * The useEffect hook has 3 parts, setup code, cleanup code and dep array,
 *
 * Setup code runs when your component mounts (cleanup is not called).
 *
 * After every re-render of your component where the dependencies have changed:
 *   First, your cleanup code runs with the old props and state.
 *   Then, your setup code runs with the new props and state.
 *
 * Your cleanup code runs one final time after your component is removed from the page (unmounts).
 */

let timerId = 0;
function Timer() {
  const [count, setCount] = useState(0);
  const [tooltipShown, setTooltipShown] = useState(false);
  const tooltipPopperRef = useRef(null);
  const [triggerEffect, setTriggerEffect] = useState(false);

  // timer
  useEffect(() => {
    timerId++;

    // timmerContent will be subscribed and run every 1000 ms
    function timmerContent() {
      // console.log("Timer id: ", timerId);
      setCount((count) => count + 1);
    }

    const timer = setInterval(() => {
      timmerContent();
    }, 1000);

    return () => {
      // console.log("Clean up old timer");
      clearInterval(timer);
    };
  }, [triggerEffect]);

  // tooltip
  useEffect(() => {
    tooltipPopperRef.current?.addEventListener("mouseover", () =>
      setTooltipShown(true),
    );
    tooltipPopperRef.current?.addEventListener("mouseout", () =>
      setTooltipShown(false),
    );

    // make sure we operate on exact same dom elemenr when cleaning up
    const ref = tooltipPopperRef.current;
    return () => {
      ref?.removeEventListener("mouseover", () => setTooltipShown(true));
      ref?.removeEventListener("mouseout", () => setTooltipShown(false));
    };
  }, []);

  return (
    <div>
      <button onClick={() => setTriggerEffect((prevState) => !prevState)}>
        redo effect
      </button>
      <div>Timer: {count}</div>
      <div ref={tooltipPopperRef}>Tooltip popper</div>
      {tooltipShown && <div> Tooltip timer: {count}</div>}
    </div>
  );
}

export default function TimerWrapper() {
  const [idx, setIdx] = useState(0);

  const updateIndex = useCallback(() => setIdx(idx + 1), [idx]);

  return (
    <div style={{ marginTop: "50px" }}>
      <Timer key={idx} />
      <div>
        <button onClick={updateIndex}>Update index</button>
      </div>
    </div>
  );
}
