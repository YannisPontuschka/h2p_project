import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";


import Home from "./components/Home";
import SingleGame from "./components/SingleGame";
import SingleCourse from "./components/SingleGame/Courses/SingleCourse";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:gameId" element={<SingleGame/>} />
          <Route path="/game/:gameId/course/:courseId" element={<SingleCourse/>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
