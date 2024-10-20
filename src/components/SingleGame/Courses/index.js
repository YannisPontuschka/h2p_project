import "./index.css"
import {Link} from "react-router-dom"

function Courses({courses}) {
  return (
    <div className="courses-section">
      <h2>Cursos</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <Link to={`course/${course.id}`} className="course-link">
              <div className="course-signature">
                <h3>{course.theme}</h3>
                <h4>How2Player: {course.author}</h4>
              </div>
            </Link>
              <p id="course-description">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Courses;
