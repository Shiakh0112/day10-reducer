import React, { useReducer } from "react";
let InitialState = {
  IsVisible: false,
};
function showMessage(state, action) {
  switch (action.type) {
    case "Show_message":
      return { ...state, IsVisible: !state.IsVisible };
    default:
      return state;
  }
}
function ShowMessage() {
  const [state, dispatch] = useReducer(showMessage, InitialState);

  return (
    <>
      <div
        className="message-container"
        style={{
          width: "500px",
          border: "2px solid red",
          padding: "30px",
          backgroundColor: "aqua",
        }}
      >
        <button onClick={() => dispatch({ type: "Show_message" })}>
          Show Message
        </button>
        {state.IsVisible == true ? (
          <p style={{ color: "black", fontSize: "20px" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            consectetur officia mollitia. Facilis minima, molestias labore
            nesciunt dolorem necessitatibus fuga laudantium quas cum nemo,
            similique eos. Aperiam vitae, quia natus pariatur corrupti impedit
            nobis dolores.
          </p>
        ) : (
          <p style={{ color: "gray", fontSize: "20px" }}>
            Your message are not showing please click the button
          </p>
        )}
      </div>
    </>
  );
}

export default ShowMessage;
