import React, { useState } from "react";
import ReactButton from "./Button";
import VueButton from "./VueButton";

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
    <div>
      <h1>Basic Host-React app</h1>
      <h2>Home</h2>
      <ReactButton onClick={reset} />
      <div>{cnt}</div>
      <VueButton text="vue button increase" onClick={increase} />
      <VueButton text="vue button decrease" onClick={decrease} />
    </div>
  );
};

export default App;
