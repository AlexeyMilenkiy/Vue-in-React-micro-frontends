import React, { useEffect } from "react";
import { createApp } from "vue";

const RemoteButton = async () => (await import("vueapp/CustomButton")).default;

const VueButton = (props) => {
  useEffect(() => {
    RemoteButton()
      .then((component) => createApp(component, props).mount("#vue-container"))
      .catch((error) => {
        console.log("error :>> ", error);
      });
  }, [RemoteButton]);

  return <div id="vue-container" />;
};

export default VueButton;
