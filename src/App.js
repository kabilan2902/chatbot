import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";
import ChatBot from "./pages/chat";
import Support from "./pages/support";

function App() {
  return (
    <>
      <div class="bg">
        <Router>
          <Navbar />
          <div class="area">
            <ul class="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/chat" element={<ChatBot />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
