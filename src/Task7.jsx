import { useActionState, useState, useEffect } from "react";

function Task7() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  useEffect(() => {
    document.title = `count: ${count} color: ${color}`;
  }, [count, color]);

  function updateCount() {
    setCount(count + 1);
  }
  function updateColor() {
    setColor(color === "green" ? "blue" : "green" );  
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={updateCount}>Update Count</button>
      <h1>Color: {color}</h1>
      <button onClick={updateColor}>Update Color</button>
    </div>
  );
}

export default Task7;
