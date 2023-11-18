import React, { useState, useEffect } from "react";

export default function CountButton({ step }) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + step);
  }

  function rollOverCount() {
    if (count > 10) {
      setCount(0);
    }
  }

  useEffect(rollOverCount, [count]);

  return (
    <div>
      <button onClick={handleClick}>+{step}</button>
      <div>{count}</div>
    </div>
  );
}