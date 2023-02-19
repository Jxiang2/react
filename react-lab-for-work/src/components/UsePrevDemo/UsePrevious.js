import React, { useState, useEffect, useRef } from "react";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
    console.log("side effect: ", ref.current); // test
  }, [value]);

  return ref.current;
}

export default function UsePreviousDemo() {
  const [count, setCount] = useState(0);

  const prevCount = usePrevious(count);
  // console.log("rendered: ", prevCount);
  return (
    <div style={{ marginTop: "50px" }}>
      <h1>
        {" "}
        Now: {count}, before: {prevCount}{" "}
      </h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
