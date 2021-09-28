import React, { useState, useEffect } from "react";
import logo from './logo.svg';
// import { zillowSampleData } from "./data_sample";
import './App.css';

function App() {
  const [zillowData, setZillowData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.bridgedataoutput.com/api/v2/zestimates_v2/zestimates?access_token=[token here]&address="98109"`,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/vnd.github.cloak-preview"
        })
      }
    )
      .then(res => res.json())
      .then(response => {
        console.log(response)
        console.log(response.bundle)
        setZillowData(response.bundle);
        setIsLoading(false);
      })
      .catch(error => console.log(error))
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> API calls with React Hooks </h1>

        {isLoading && <p>Wait I'm loading zillow data for you</p>}

        <ul>
        {zillowData.map(item => <li key={item.address}>{item.address}</li>)}
        </ul>

      </header>
    </div>
  );
}

export default App;
