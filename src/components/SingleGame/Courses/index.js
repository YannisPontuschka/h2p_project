import "./index.css"

function Courses({ courses }) {
  return (
    <div>
      <h2>Cursos</h2>
      <div className="courses-list">
        {courses.map((course) => (
          <div className="course-card">
            <div className="course-signature">
              <h3>{course.theme}</h3>
              <h4>How2Player: {course.author}</h4>
            </div>
            <p id="course-description">{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
