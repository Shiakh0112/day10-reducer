import React, { useReducer } from "react";
let InitialState = {
  count: 0,
};
function CounterReducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    case "Decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(CounterReducer, InitialState);
  return (
    <>
      <div className="counter">
        <button onClick={() => dispatch({ type: "Increment" })}>
          Increment
        </button>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "Decrement" })}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default Counter;
