import React from "react";
import "./index.css";
import { games_list } from "../data/games_list";
import { Link } from "react-router-dom"; // Importando Link

function Games() {
  return (
    <section className="games-section">
      <h2 id="game_section_title">Escolha seu próximo objetivo.</h2>
      <div className="games-list">
        {games_list.map((game) => (
          <div key={game.id} className="game-card">
            <Link to={`/game/${game.id}`}>
              <img src={game.image} alt={game.name} />
              <h2 className="hover-text">{game.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Games;
