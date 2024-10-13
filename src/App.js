import React from "react";
import Header from "./components/Header";
import Games from "./components/Games";
import News from "./components/News";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Games />
      <News />
    </div>
  );
}

export default App;
