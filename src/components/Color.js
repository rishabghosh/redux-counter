import React from "react";

function Color({ count }) {
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
