import { useState } from "react";
import "./App.css";

const Type = () => {
  const [type, setType] = useState("");
  const [message, setMessage] = useState("Enter your thoughts...");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setType(inputValue);
    setMessage(inputValue === "" ? "Enter your thoughts..." : inputValue);
  };

  return (
    <div className="App">
      <div
        className="container"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h2 className="center">Message Typing</h2>
        <div>
          <label>Message</label>
          <input
            type="text"
            placeholder="Enter your thoughts..."
            value={type}
            onChange={handleChange}
          />
        </div>
        <div className="center">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Type;
