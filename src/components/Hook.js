import React, { Component, useState } from "react";

function Hook() { 
  const [count, setCount] = useState(0);
  return (
    <>
      {count}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}

export default Hook;