import React, { useState } from "react";
import "./index.css"; // Estilos

function Terminology({ terminologies }) {
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
