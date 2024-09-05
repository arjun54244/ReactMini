import { useState } from "react";
import "./App.css";

function App() {
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter valid value");
    } else {
      let bmi = (weight / ((height * height) / 10000));
      setBmi(bmi.toFixed(2));
      if (bmi < 18.5) {
        setMessage("Underweight");
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("Normal");
      } else if (bmi >= 24.9 && bmi < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obese");
      }
    }
  }

  return (
    <>
      <div className="App">
      <div className="container" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <h2 className="center">BMI Calculator</h2>
          <form onSubmit={calcBmi}>
            <div>
              <label>Weight (lbs)</label>
              <input
                type="text"
                placeholder="Enter Wight vlaue"
                value={weight}
                onChange={e=>setWeight(e.target.value)}
              />
            </div>
            <div>
              <label>Height (in)</label>
              <input
                type="text"
                placeholder="Enter Hight vlaue"
                value={height}
                onChange={e=>setHeight(e.target.value)}
              />
            </div>
            <div>
              <button className="btn btn-primary">Submit</button>
              <button className="btn btn-danger" onClick={"reload"}>
                Reset
              </button>
            </div>
          </form>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
