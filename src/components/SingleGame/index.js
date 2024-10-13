import React from "react";
import { useParams } from "react-router-dom";
import { games_list } from "../Games/games_list"; // Importando a lista de jogos
import Terminology from "./Terminology";
import "./index.css"; // Importando estilos

function SingleGame() {
  const { gameId } = useParams(); // Obtendo o gameId da URL
  const game = games_list.find((g) => g.id === parseInt(gameId)); // Buscando o jogo correspondente

  return (
    <>
      {game ? (
        <section className="single-game-section">
          <h1>{game.name}</h1>
          <div className="content">
            <p>{game.description}</p>
            <img src={game.image} alt={game.name} className="game-image" />
          </div>
          <Terminology />
        </section>
      ) : (
        <p>Jogo não encontrado.</p>
      )}
    </>
  );
}

export default SingleGame;
