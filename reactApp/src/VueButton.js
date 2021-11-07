import React, { useEffect, useRef } from "react";
import { createApp } from "vue";

const RemoteButton = async () => (await import("vueapp/Button")).default;

const VueButton = (props) => {
  const container = useRef(null);
  useEffect(() => {
    RemoteButton()
      .then(
        (component) =>
          container.current &&
          createApp(component, props).mount(container.current)
      )
      .catch((error) => {
        console.log("error :>> ", error);
      });
  }, [RemoteButton]);

  return <div ref={container} />;
};

export default VueButton;
