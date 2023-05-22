// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// let name="Ajay"
function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* Exact Path helps in going to the intended path  */}
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={<TextForm
                heading="Enter the text to analyze below"
                showAlert={showAlert}
                mode={mode}
              />}/>
          </Routes>
          
          {/* <About/> */}
        </div>
    </>
  );
}

export default App;
