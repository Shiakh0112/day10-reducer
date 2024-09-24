import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CollegeForm from "./Components/CollegeForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CollegeForm />
    </>
  );
}

export default App;
