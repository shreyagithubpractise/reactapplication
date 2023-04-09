import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const handleTheme = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "#042743";
      setMode("dark");
    } else {
      document.body.style.backgroundColor = "#ffffff";
      setMode("light");
    }
  };
  return (
    <Router>
      <div className="blank">
        <NavBar title="TextUtils" mode={mode} displayMode={handleTheme} />
        <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter Your Text Here" mode={mode} />}
          ></Route>
          <Route
            path="/textform"
            element={<TextForm heading="Enter Your Text Here" mode={mode} />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
