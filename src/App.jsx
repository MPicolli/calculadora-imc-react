import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import ImcCalc from "./components/ImcCalc";

function App() {
  return (
    <div>
      <div className="container">
        <ImcCalc />
      </div>
    </div>
  );
}

export default App;
