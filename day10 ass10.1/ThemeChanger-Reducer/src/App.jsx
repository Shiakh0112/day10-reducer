import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeChanger from "./Components/ThemeChanger";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeChanger />
    </>
  );
}

export default App;
