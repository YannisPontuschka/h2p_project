import { useState } from "react";
import { useParams } from "react-router-dom";
import { games_list } from "../../../data/games_list";
import "./index.css";

function SingleCourse() {
  const { gameId, courseId } = useParams();
  const game = games_list.find((game) => game.id === parseInt(gameId));
  const course = game.courses.find(
    (course) => course.id === parseInt(courseId)
  );

  const [currentVideo, setCurrentVideo] = useState(course.videos[0]);
  const [activeStep, setActiveStep] = useState(1); // Estado para a etapa ativa

  return (
    <div className="single-course-section">
      <div>
        <h1 id="course-theme">{course.theme}</h1>
        <h2 id="author-name">Howplayer: {course.author}</h2>
        <div id="course-description">{course.description}</div>
      </div>
      <div id="course-steps">
        <div
          className={`step ${activeStep === 1 ? "active" : ""}`} // Classe ativa
          onClick={() => {
            setCurrentVideo(course.videos[0]);
            setActiveStep(1);
          }}
        >
          ETAPA 1
        </div>
        <div
          className={`step ${activeStep === 2 ? "active" : ""}`} // Classe ativa
          onClick={() => {
            setCurrentVideo(course.videos[1]);
            setActiveStep(2);
          }}
        >
          ETAPA 2
        </div>
        <div
          className={`step ${activeStep === 3 ? "active" : ""}`} // Classe ativa
          onClick={() => {
            setCurrentVideo(course.videos[2]);
            setActiveStep(3);
          }}
        >
          ETAPA 3
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
  );
}

export default SingleCourse;
