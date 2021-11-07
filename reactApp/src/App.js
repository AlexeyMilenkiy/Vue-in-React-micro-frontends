import React, { useState } from "react";
import ReactButton from "./Button";
import VueButton from "./VueButton";
import VueLayout from "./VueLayout";
import "./styles.css";

const App = () => {
  const [cnt, setCnt] = useState(0);

  const reset = () => setCnt(0);

  const increase = () => {
    console.log('I"M CALLBACK FROM REACT :>> ');
    setCnt((prev) => prev + 1);
  };

  const decrease = () => {
    console.log('I"M CALLBACK FROM REACT :>> ');
    setCnt((prev) => prev - 1);
  };

  return (
    <div className="container">
      <div className="mf-app">
        <h1>Host-React app</h1>
        <span>Times button clicked:</span>
        <span>Count: {cnt}</span>
        <ReactButton onClick={reset} text="React button - reset" />
        <VueButton text="Vue button - increase" onClick={increase} />
        <VueButton text="Vue button - decrease" onClick={decrease} />
      </div>
      <VueLayout />
    </div>
  );
};

export default App;
