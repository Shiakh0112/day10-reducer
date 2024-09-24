import React, { useReducer } from "react";
let InitialState = {
  theme: "light",
  color: "dark",
};

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}
function ThemeChanger() {
  let [state, dispatch] = useReducer(reducer, InitialState);
  function HandleToggle() {
    dispatch({ type: "TOGGLE_THEME" });
  }
  return (
    <div
      style={{
        backgroundColor: state.theme === "light" ? "White" : "black",

        border: "1px solid black",
        color: state.theme === "light" ? "black" : "White",
        height: "70vh",
        width: "500px",
        textAlign: "center",
        margin: "auto",
        padding: "20px",
        transition: "background-color 0.5s ease",
      }}
    >
      <div style={{ padding: "50px" }}>
        <button onClick={HandleToggle}> Toggle Theme Dark</button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          iusto laudantium reiciendis recusandae dolores, accusamus nesciunt
          architecto beatae sint consectetur.
        </p>
      </div>
    </div>
  );
}

export default ThemeChanger;
