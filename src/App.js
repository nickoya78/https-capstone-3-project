import React from "react";
import "./Styles/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Design from "./Components/Design";

function App() {
  return (
    <Router>
      <Navbar />
      <Design />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
