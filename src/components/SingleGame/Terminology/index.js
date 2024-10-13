import React, { useState } from "react";
import "./index.css"; // Estilos

const terminologies = [
  {
    term: "Ult Tracking",
    text: "Ult Tracking é uma técnica utilizada para acompanhar o status de ultimates em jogos competitivos.",
  },
  {
    term: "Scout",
    text: "Scout se refere a explorar e obter informações antecipadas sobre o oponente ou o ambiente.",
  },
  {
    term: "Triggers",
    text: "Triggers são eventos ou ações específicas que acionam uma resposta no jogo, como habilidades.",
  },
  {
    term: "Ult Tracking",
    text: "Ult Tracking é uma técnica utilizada para acompanhar o status de ultimates em jogos competitivos.",
  },
  {
    term: "Scout",
    text: "Scout se refere a explorar e obter informações antecipadas sobre o oponente ou o ambiente.",
  },
  {
    term: "Triggers",
    text: "Triggers são eventos ou ações específicas que acionam uma resposta no jogo, como habilidades.",
  },
];

function Terminology() {
  const [selectedTerm, setSelectedTerm] = useState(null); // Estado para o termo selecionado

  const handleClick = (term) => {
    setSelectedTerm(term); // Mostra o pop-up com o termo clicado
  };

  const closePopup = () => {
    setSelectedTerm(null); // Fecha o pop-up
  };

  return (
      <div className="game-terminology-section">
          <h2 className="title">Terminologia</h2>
      <div className="terminology-list">
        {terminologies.map((game_term) => (
          <div
            key={game_term.term}
            className="terminology-card"
            onClick={() => handleClick(game_term)} // Quando o termo for clicado, mostra o pop-up
          >
            {game_term.term}
          </div>
        ))}
      </div>

      {/* Em JavaScript, a expressão A && B retorna B se A for verdadeiro (ou um valor considerado "truthy"). Caso contrário, retorna A. */}
      {/* Pop-up */}
      {selectedTerm && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedTerm.term}</h2>
            <p>{selectedTerm.text}</p>
            <button onClick={closePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Terminology;
