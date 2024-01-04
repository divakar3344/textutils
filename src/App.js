import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";
// import { Router } from "react-router";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enable", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enable", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />    
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
