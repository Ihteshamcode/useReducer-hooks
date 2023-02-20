import React from "react";
import "./App.css";
import { useReducer } from "react";

const App = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "Increment":
        return state + 1;
      case "Decrement":
        return state - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="flex items-center justify-center mt-28">
        <button
          onClick={() => dispatch("Increment")}
          className="border border-black p-4 bg-slate-400"
        >
          Increment
        </button>
        <h1 className="p-4">{count}</h1>

        <button
          onClick={() => dispatch("Decrement")}
          className="border border-black p-4 bg-slate-400"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
