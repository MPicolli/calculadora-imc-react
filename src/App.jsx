import { useState } from "react";
import "./App.css";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";
import { data } from "./data/data";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!height || !weight) return;
    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = weightFloat / (heightFloat * heightFloat).toFixed(1);

    setImc(imcResult);
  };

  const [imc, setImc] = useState("25");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div>
      <div className="container">
        {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data} />}
      </div>
    </div>
  );
}

export default App;
