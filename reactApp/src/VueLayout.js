import React, { useEffect, useRef } from "react";
import { createApp } from "vue";
import "./styles.css";

const RemoteLayout = async () => (await import("vueapp/Layout")).default;

const VueLayout = (props) => {
  const container = useRef(null);
  useEffect(() => {
    RemoteLayout()
      .then(
        (component) =>
          container.current &&
          createApp(component, props).mount(container.current)
      )
      .catch((error) => {
        console.log("error :>> ", error);
      });
  }, [RemoteLayout]);

  return <div className="mf-app" ref={container} />;
};

export default VueLayout;
