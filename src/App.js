import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => setMessage("Error fetching data"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + Spring Boot</h1>
      <p>{message}</p>
    </div>
  );
};

export default App;
