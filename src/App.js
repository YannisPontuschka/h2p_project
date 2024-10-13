import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Header from "./components/Header";
import Games from "./components/Games";
import News from "./components/News"; // Importando o componente News
import SingleGame from "./components/SingleGame"; // Importando o componente SingleGame
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/game/:gameId" element={<SingleGame />} />{" "}
          {/* Rota para detalhes do jogo */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
