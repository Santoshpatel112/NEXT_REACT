import { useState } from "react";

import "./App.css";
export default function App() {
  const [count, setCount] = useState(0);
  const [countToSet, setCountToSet] = useState(0);

  // count = count + 1; DO NOT DO THIS

  // const incrementHandler = (numVal) => {
  //   // setCount(numVal + 1); short hand notation
  //   setCount((prev) => prev + numVal + 1);
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  // };
  return (
    <>
      <h1>Counter is {count}</h1>
      <div className="card"> Count is {count}</div>
      <div>
        <button onClick={() => setCount(count + 1)} style={{ margin: "0 5px" }}>
          Increase
        </button>
        <button
          onClick={() => setCount((count) => Math.max(count - 1, 0))}
          style={{ margin: "0 5px" }}
        >
          Decrease
        </button>
        <button
          onClick={() => setCount((count) => 0)}
          style={{ margin: "0 5px" }}
        >
          Reset
        </button>
      </div>
      <div style={{ margin: "20px 0" }}>
        <input
          style={{
            width: "100px",
            border: "1px solid white",
            margin: "0 5px",
            padding: "0.6em 1.2em",
          }}
          value={countToSet}
          onChange={(e) => setCountToSet(Number(e.target.value))}
          type="text"
        />
        <button
          style={{ margin: "0 5px" }}
          onClick={() => {
            setCount(Number(countToSet));
            setCountToSet(0);
          }}
        >
          Set to {countToSet}
        </button>
      </div>
    </>
  );
}
