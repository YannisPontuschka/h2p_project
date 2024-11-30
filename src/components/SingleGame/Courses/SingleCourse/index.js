import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { games_list } from "../../../data/games_list";
import "./index.css";

function SingleCourse() {
  const { gameId, courseId } = useParams();
  const game = games_list.find((game) => game.id === parseInt(gameId));
  const course = game?.courses?.find(
    (course) => course.id === parseInt(courseId)
  );

  const [currentVideo, setCurrentVideo] = useState(course?.steps[0].url || "");
  const [activeStep, setActiveStep] = useState(1);
  const [newComment, setNewComment] = useState("");

  // Estado para os comentários
  const [comments, setComments] = useState(() => {
    const savedComments =
      JSON.parse(
        localStorage.getItem(`comments${gameId}_${courseId}_${activeStep}`)
      ) || {};
    return savedComments;
  });

  // Estado para controlar a exibição do pop-up
  const [showPopup, setShowPopup] = useState(false);

  // Função para alternar a exibição do pop-up
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  // Força a rolagem para o topo ao carregar o componente
  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página
  }, []);

  // Atualiza o Local Storage quando os comentários mudam
  useEffect(() => {
    if (courseId) {
      localStorage.setItem(
        `comments${gameId}_${courseId}_${activeStep}`,
        JSON.stringify(comments)
      );
    }
  }, [comments, courseId]);

  const addComment = () => {
    if (newComment.trim() === "") return;

    const newCommentObject = {
      id: Date.now(),
      text: newComment,
    };

    const updatedComments = {
      ...comments,
      [activeStep]: [...(comments[activeStep] || []), newCommentObject],
    };

    setComments(updatedComments);
    setNewComment("");
  };

  return (
    <div className="single-course-section">
      <div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1 id="course-theme">{course?.theme}</h1>
          <div id="author-name" onClick={togglePopup}>
            How2Player: {course?.author.name}
          </div>
        </div>
        <div id="course-description">{course?.description}</div>
        <div className="line" />
      </div>
      <div id="course-steps">
        {course?.steps?.map((step, index) => (
          <div
            key={index}
            className={`step ${activeStep === index + 1 ? "active" : ""}`}
            onClick={() => {
              setCurrentVideo(step.url);
              setActiveStep(index + 1);
            }}
          >
            ETAPA {index + 1}
          </div>
        ))}
      </div>
      <div className="step_description">
        <div id="details">
          <h2 id="title">{course.steps[activeStep - 1].description}</h2>
          <div className="line" />
          <div className="discussion">
            <h2 id="title">Discussão - Etapa {activeStep}</h2>
            <div className="comments">
              {(comments[activeStep] || []).map((comment) => (
                <div key={comment.id} className="comment">
                  <div className="user-question">
                    <strong>Pergunta:</strong> {comment.text}
                  </div>
                  <div className="author-response">
                    <strong>Resposta de {course?.author.name}:</strong> Sem
                    resposta ainda
                  </div>
                </div>
              ))}
            </div>
            <div className="add-comment">
              <textarea
                placeholder={`Escreva sua dúvida sobre a Etapa ${activeStep}...`}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <button onClick={addComment}>Enviar</button>
            </div>
          </div>
        </div>
        <div id="course-video" className="video-container">
          <iframe
            src={currentVideo}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Pop-up com informações do autor */}
      {showPopup && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup">
            <img
              id="profile_picture"
              src={course?.author.photo}
              alt={`Foto de ${course?.author.name}`}
            />
            <h3>{course?.author.name}</h3>
            <p>{course?.author.description}</p>
            <p>Discord: {course?.author.discord}</p>
            <button onClick={togglePopup}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleCourse;
