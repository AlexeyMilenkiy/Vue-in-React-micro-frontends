import React, { useEffect, useCallback } from "react";

export default ({ text = "React Button", onClick }) => {
  const onClickHandler = useCallback(() => {
    console.log(`Button.js: "${text}" clicked!`);
    onClick?.();
  }, [text, onClick]);

  useEffect(() => {
    console.log("Button.js: mounted.");
    return () => console.log("Button.js: unmounted.");
  }, []);

  console.log("Button.js: rendered.");

  return (
    <button className="react-button" onClick={onClickHandler}>
      {text}
    </button>
  );
};
