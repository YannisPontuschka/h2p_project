import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";

import Home from "./components/Home";
import SingleGame from "./components/SingleGame";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:gameId" element={<SingleGame />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
