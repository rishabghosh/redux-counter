import React from "react";
import Color from "../containers/Color";

/**
 * increament
 * decrement - actions
 * count - state count
 */

function App({ count, actions }) {
  return (
    <div>
      <button onClick={actions.decrement}>-</button>
      <span>{count}</span>
      <button onClick={actions.increment}>+</button>
      <Color />
    </div>
  );
}

export default App;
