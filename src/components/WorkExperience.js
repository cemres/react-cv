import "./WorkExperience.css";

function getMonthYear(date) {
  return `${date.getMonth() + 1} / ${date.getFullYear()}`;
}

function WorkExperience(props) {
  return (
    <div className="card">
      <div className="card-header bg-dark text-white">Work Experience</div>
      {props.experiences.map((experience, index) => {
        return (
          <div className="card-body" key={index}>
            <h5 className="card-title">
              {experience.companyName}, {experience.location} /{" "}
              <span className="text-muted experience-title">
                {experience.title}
              </span>
            </h5>
            <p className="card-text">{experience.description}</p>
            <p className="card-text text-muted">
              From: {" "}
              {getMonthYear(experience.startDate)} - To:{" "}
              {getMonthYear(experience.endDate)}
            </p>

            <hr className="mt-1 mb-1" />
          </div>
        );
      })}
    </div>
  );
}

export default WorkExperience;
