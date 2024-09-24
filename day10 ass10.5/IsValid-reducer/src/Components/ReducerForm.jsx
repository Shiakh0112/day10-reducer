import React, { useReducer, useState } from "react";

let InitialState = {
  Email: "",
  password: "",
};

function HandleData(state, { type, name, payload }) {
  switch (type) {
    case "InputData":
      return { ...state, [name]: payload };
    case "Reset":
      return InitialState;
    default:
      return state;
  }
}

function ReducerForm() {
  const [state, dispatch] = useReducer(HandleData, InitialState);
  const [reset, setReset] = useState(false);

  function HandleSubmit(e) {
    e.preventDefault();
    console.log(state);
    setReset(true);
  }

  function HandleInputData(e) {
    dispatch({
      type: "InputData",
      name: e.target.name,
      payload: e.target.value,
    });
  }

  function HandleReset(e) {
    e.preventDefault();
    dispatch({ type: "Reset" });
    setReset(false);
  }

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          name="Email"
          value={state.Email} // Controlled input
          onChange={HandleInputData}
          placeholder="Email"
        />
        <input
          name="password"
          value={state.password} // Controlled input
          onChange={HandleInputData}
          placeholder="Password"
        />
        <input type="submit" />
        <button type="button" onClick={HandleReset}>
          Reset
        </button>
      </form>
      {reset ? (
        <>
          <p>User Email : {state.Email} </p>
          <p>User password : {state.password} </p>
        </>
      ) : (
        <p>Please enter your email and password to see the details.</p>
      )}
    </div>
  );
}

export default ReducerForm;
