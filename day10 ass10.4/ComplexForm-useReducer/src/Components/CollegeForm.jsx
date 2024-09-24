import React, { useReducer, useState } from "react";
import "./CollegForm.css";
// Initial form state
const initialState = {
  name: "",
  establishment_year: "",
  address: {
    building: "",
    street: "",
    city: "",
    locality: {
      name: "",
      pinCode: "",
      landmark: "",
    },
  },
  state: "",
  coordinates: {
    latitude: "",
    longitude: "",
  },
  courses_offered: "",
};

// Reducer function to manage form state
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "UPDATE_ADDRESS":
      return {
        ...state,
        address: {
          ...state.address,
          [action.field]: action.value,
        },
      };
    case "UPDATE_LOCALITY":
      return {
        ...state,
        address: {
          ...state.address,
          locality: {
            ...state.address.locality,
            [action.field]: action.value,
          },
        },
      };
    case "UPDATE_COORDINATES":
      return {
        ...state,
        coordinates: {
          ...state.coordinates,
          [action.field]: action.value,
        },
      };
    case "RESET":
      return initialState; // Reset to initial state
    default:
      throw new Error("Invalid action type");
  }
};

// Main component
const CollegeForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [submitted, setSubmitted] = useState(false); // Track form submission

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("address.locality.")) {
      const field = name.split(".")[2]; // Extract locality field
      dispatch({ type: "UPDATE_LOCALITY", field, value });
    } else if (name.includes("address.")) {
      const field = name.split(".")[1]; // Extract address field
      dispatch({ type: "UPDATE_ADDRESS", field, value });
    } else if (name.includes("coordinates.")) {
      const field = name.split(".")[1]; // Extract coordinates field
      dispatch({ type: "UPDATE_COORDINATES", field, value });
    } else {
      dispatch({ type: "UPDATE_FIELD", field: name, value });
    }
  };

  // Handle form reset
  const handleReset = () => {
    dispatch({ type: "RESET" });
    setSubmitted(false); // Hide form data on reset
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Show form data on submit
    console.log("Form Submitted:", state);
  };

  return (
    <div className="form-container">
      <h1>College Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>College Name:</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Enter College Name"
          />
        </div>

        <div className="form-group">
          <label>Establishment Year:</label>
          <input
            type="number"
            name="establishment_year"
            value={state.establishment_year}
            onChange={handleChange}
            placeholder="Enter Establishment Year"
          />
        </div>

        <h3>Address:</h3>
        <div className="form-group">
          <label>Building:</label>
          <input
            type="text"
            name="address.building"
            value={state.address.building}
            onChange={handleChange}
            placeholder="Building"
          />
        </div>
        <div className="form-group">
          <label>Street:</label>
          <input
            type="text"
            name="address.street"
            value={state.address.street}
            onChange={handleChange}
            placeholder="Street"
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="address.city"
            value={state.address.city}
            onChange={handleChange}
            placeholder="City"
          />
        </div>
        <div className="form-group">
          <label>Locality Name:</label>
          <input
            type="text"
            name="address.locality.name"
            value={state.address.locality.name}
            onChange={handleChange}
            placeholder="Locality Name"
          />
        </div>
        <div className="form-group">
          <label>PinCode:</label>
          <input
            type="text"
            name="address.locality.pinCode"
            value={state.address.locality.pinCode}
            onChange={handleChange}
            placeholder="PinCode"
          />
        </div>
        <div className="form-group">
          <label>Landmark:</label>
          <input
            type="text"
            name="address.locality.landmark"
            value={state.address.locality.landmark}
            onChange={handleChange}
            placeholder="Landmark"
          />
        </div>

        <div className="form-group">
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={state.state}
            onChange={handleChange}
            placeholder="State"
          />
        </div>

        <div className="form-group">
          <label>Coordinates:</label>
          <div>
            <input
              type="text"
              placeholder="Latitude"
              name="coordinates.latitude"
              value={state.coordinates.latitude}
              onChange={handleChange}
              className="small-input"
            />
            <input
              type="text"
              placeholder="Longitude"
              name="coordinates.longitude"
              value={state.coordinates.longitude}
              onChange={handleChange}
              className="small-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Courses Offered:</label>
          <input
            type="text"
            name="courses_offered"
            value={state.courses_offered}
            onChange={handleChange}
            placeholder="Courses Offered"
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
        <button type="button" onClick={handleReset} className="reset-btn">
          Reset
        </button>
      </form>

      {submitted && (
        <div className="form-data">
          <h2>Form Data:</h2>
          <div>
            <h3>College Name: {state.name}</h3>
            <h3>Establishment Year: {state.establishment_year}</h3>
            <h3>Address:</h3>
            <ul>
              <li>Building: {state.address.building}</li>
              <li>Street: {state.address.street}</li>
              <li>City: {state.address.city}</li>
              <li>
                Locality:
                <ul>
                  <li>Name: {state.address.locality.name}</li>
                  <li>PinCode: {state.address.locality.pinCode}</li>
                  <li>Landmark: {state.address.locality.landmark}</li>
                </ul>
              </li>
            </ul>
            <h3>State: {state.state}</h3>
            <h3>Coordinates:</h3>
            <ul>
              <li>Latitude: {state.coordinates.latitude}</li>
              <li>Longitude: {state.coordinates.longitude}</li>
            </ul>
            <h3>Courses Offered: {state.courses_offered}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeForm;
