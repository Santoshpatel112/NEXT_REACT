import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./components/Counter";
import Posts from "./components/Posts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Zustand</h1>
      <Counter />
      <Posts />
    </>
  );
}

export default App;
