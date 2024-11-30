import React, { useState } from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import SingleGame from "./components/SingleGame";
import SingleCourse from "./components/SingleGame/Courses/SingleCourse";
import Login from "./components/Login/Login";

import "./App.css";

function App() {
  // Estado de autenticação. Você pode substituir isso por uma solução mais robusta, como JWT ou Firebase.
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          {/* Rota de Login */}
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />

          {/* Rota Home protegida */}
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />

          {/* Outras rotas protegidas */}
          <Route path="/game/:gameId" element={<SingleGame />} />
          <Route
            path="/game/:gameId/course/:courseId"
            element={<SingleCourse />}
          />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
