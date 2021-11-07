import React, { useEffect, useState } from "react";
import { BroadcastChannel } from "broadcast-channel";
import { CHANNEL_NAME } from "../../channelName";
import ReactButton from "./Button";
import VueButton from "./VueButton";
import VueLayout from "./VueLayout";
import "./styles.css";

const channel = new BroadcastChannel(CHANNEL_NAME);

const App = () => {
  const [reactCount, setReactCount] = useState(0);
  const [vueCount, setVueCount] = useState(0);

  channel.onmessage = (msg) => {
    setVueCount(msg);
  };

  const reset = () => setReactCount(0);

  const increase = () => setReactCount((prev) => prev + 1);

  const decrease = () => setReactCount((prev) => prev - 1);

  useEffect(() => {
    channel.postMessage(reactCount);
  }, [reactCount]);

  return (
    <div className="container">
      <div className="mf-app">
        <h1>Host-React app</h1>
        <span>
          <strong>Vue count: {vueCount}</strong>
        </span>
        <span>
          <strong>React count: {reactCount}</strong>
        </span>
        <ReactButton onClick={reset} text="React button - reset" />
        <VueButton
          text="Vue button - increase React count"
          onClick={increase}
        />
        <VueButton
          text="Vue button - decrease React count"
          onClick={decrease}
        />
      </div>
      <VueLayout />
    </div>
  );
};

export default App;
