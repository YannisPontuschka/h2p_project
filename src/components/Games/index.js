import React from "react";
import "./index.css";

import overwatchimage from "../../images/overwatch.png";
import leaguelegendsimage from "../../images/LOL.png";
import valorantimage from "../../images/valorant.jpg";
import cs2image from "../../images/cs2.jpeg";

const gamesList = [
  {
    id: 1,
    name: "Overwatch",
    image: overwatchimage,
  },
  {
    id: 2,
    name: "League of Legends",
    image: leaguelegendsimage,
  },
  {
    id: 3,
    name: "Valorant",
    image: valorantimage,
  },
  {
    id: 4,
    name: "Counter Strike 2",
    image: cs2image,
  },
];

function Games() {
  return (
    <section className="games-section">
      <h2 id="game_section_title">Escolha seu próximo objetivo.</h2>
      <div className="games-list">
        {gamesList.map((game) => (
          <div key={game.id} className="game-card">
            <img src={game.image} alt={game.name} />
            <h2 className="hover-text">{game.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Games;
