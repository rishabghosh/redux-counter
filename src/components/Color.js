import React from "react";
import { useStore } from "react-redux";

function Color() {
  const store = useStore();
  const { count } = store.getState();

  return (
    <div
      style={{
        background: `${count % 2 === 0 ? "red" : "blue"}`,
        height: "20px",
        width: "150px",
      }}
    ></div>
  );
}

export default Color;
