import React, { useState } from "react";
import "./Prediction.css";
import week from "../../assets/calendar.png";
import fare from "../../assets/fare.png";
import { Link } from "react-router-dom";

function Prediction() {
  const Weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [inputs, setInputs] = useState({
    passenger_count: "",
    weekday: "",
    pickup_longitude: "",
    lga_dist: "",
    dropoff_longitude: "",
    nyc_dist: "",
    month: "",
    dropoff_latitude: "",
    year: "",
    ewr_dist: "",
    pickup_latitude: "",
    sol_dist: "",
    distance: "",
    jfk_dist: "",
    bearing: "",
    hour: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [weekd, setWeekd] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);

  const handleWeekdClick = () => {
    setWeekd(true);
    setSubmitted(false);
  };

  const handleReturnClick = () => {
    setWeekd(false);
    setSubmitted(false);
  };

  const featureNames = [
    "passenger_count",
    "weekday",
    "pickup_longitude",
    "lga_dist",
    "dropoff_longitude",
    "nyc_dist",
    "month",
    "dropoff_latitude",
    "year",
    "ewr_dist",
    "pickup_latitude",
    "sol_dist",
    "distance",
    "jfk_dist",
    "bearing",
    "hour",
  ];

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let key in inputs) {
      if (inputs[key] === "") {
        alert("Please fill in all fields");
        return;
      }
    }

    const requestBody = JSON.stringify(inputs);
    console.log("Request Body:", requestBody);

    fetch("http://127.0.0.1:8000/predict/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Prediction result:", data);
        setPredictionResult(data);
        setSubmitted(true);
        setWeekd(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There is something wrong, try again");
      });
  };

  return (
    <div className="Prediction">
      <div className="main2" align="center">
        <div className="outerr">
          {!submitted && !weekd && (
            <div className="Head">
              <form onSubmit={handleSubmit}>
                <div className="Inputs">
                  {/* First Column */}
                  <div className="InputColumn">
                    {featureNames.slice(0, 4).map((feature, index) => (
                      <div className="InputContainer" key={index}>
                        <label className="fonnt">{feature}</label>
                        <input
                          placeholder="Enter number"
                          className="input"
                          name={feature}
                          type="number"
                          value={inputs[feature]}
                          onChange={handleChange}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Second Column */}
                  <div className="InputColumn">
                    {featureNames.slice(4, 8).map((feature, index) => (
                      <div className="InputContainer" key={index + 4}>
                        <label className="fonnt">{feature}</label>
                        <input
                          placeholder="Enter number"
                          className="input"
                          name={feature}
                          type="number"
                          value={inputs[feature]}
                          onChange={handleChange}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Third Column */}
                  <div className="InputColumn">
                    {featureNames.slice(8, 12).map((feature, index) => (
                      <div className="InputContainer" key={index + 8}>
                        <label className="fonnt">{feature}</label>
                        <input
                          placeholder="Enter number"
                          className="input"
                          name={feature}
                          type="number"
                          value={inputs[feature]}
                          onChange={handleChange}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Fourth Column */}
                  <div className="InputColumn">
                    {featureNames.slice(12, 16).map((feature, index) => (
                      <div className="InputContainer" key={index + 12}>
                        <label className="fonnt">{feature}</label>
                        <input
                          placeholder="Enter number"
                          className="input"
                          name={feature}
                          type="number"
                          value={inputs[feature]}
                          onChange={handleChange}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="final">
                  <button className="diss" onClick={() => handleWeekdClick()}>
                    {" "}
                    Weekday
                  </button>
                  <div className="submit">
                    <button className="uiverse" type="submit">
                      <div className="wrapper">
                        <span>Eager to see the prediction?</span>
                        <div className="circle circle-12"></div>
                        <div className="circle circle-11"></div>
                        <div className="circle circle-10"></div>
                        <div className="circle circle-9"></div>
                        <div className="circle circle-8"></div>
                        <div className="circle circle-7"></div>
                        <div className="circle circle-6"></div>
                        <div className="circle circle-5"></div>
                        <div className="circle circle-4"></div>
                        <div className="circle circle-3"></div>
                        <div className="circle circle-2"></div>
                        <div className="circle circle-1"></div>
                      </div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

{weekd && (
  <div className="outerr">
  <div className="PredictionResult">
  
      <div className="bar">
        <img src={week} alt="Weekday" height={50} width={50} />
        <p className="par">Weekdays</p>
      </div>
      <div className="RandMeal">
        {Weekdays.map((day, index) => (
          <div key={index}>
            <p className="par">
              {day}: {index}
            </p>
            <br />
          </div>
        ))}
      </div>
    
  </div>
      <button className="diss" onClick={handleReturnClick}>
        Return to Input Fields
      </button>
  
  </div>
)}
         

          {submitted && predictionResult && (
            <div className="outerr">
            <div className="PredictionResult">
              <div className="bar">
                <img src={fare} alt="Prediction" height={50} width={50} />
                <p className="par">Prediction</p>
              </div>
              <br></br>
              <h2>{predictionResult.prediction}</h2>
              <br></br>              
            </div>
           
            <button className="diss" onClick={handleReturnClick}>
            Return to Input Fields
          </button>
        
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Prediction;
