import React, { useState } from "react";
import Color from "./Color";
import { useStore } from "react-redux";

function App() {
  const store = useStore();
  const { count: initialCount } = store.getState();
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    store.dispatch({ type: "increment" });
    setCount(store.getState().count);
  };

  const decrement = () => {
    store.dispatch({ type: "decrement" });
    setCount(store.getState().count);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <Color />
    </div>
  );
}

export default App;
