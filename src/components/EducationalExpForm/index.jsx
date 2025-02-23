export const EducationalExpForm = ({
  educationalExperience: {
    id,
    schoolName,
    degree,
    studyStartDate,
    studyEndDate,
  },
  setEducationalExperiences,
  removeEducationalExperience,
}) => {
  const handleChange = event => {
    const { name, value } = event.target;
    setEducationalExperiences(prevEducationalExperiences =>
      prevEducationalExperiences.map(experience =>
        experience.id === id
          ? { ...experience, [name.replace(`-${id}`, '')]: value }
          : experience
      )
    );
  };

  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor={`schoolName-${id}`} className="form-label">
          School Name
        </label>
        <input
          type="text"
          name={`schoolName-${id}`}
          id={`schoolName-${id}`}
          className="form-control"
          value={schoolName}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`degree-${id}`} className="form-label">
          Degree
        </label>
        <input
          type="text"
          name={`degree-${id}`}
          id={`degree-${id}`}
          className="form-control"
          value={degree}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`studyStartDate-${id}`} className="form-label">
          Start Date
        </label>
        <input
          type="date"
          name={`studyStartDate-${id}`}
          id={`studyStartDate-${id}`}
          className="form-control"
          value={studyStartDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`studyEndDate-${id}`} className="form-label">
          End Date
        </label>
        <input
          type="date"
          name={`studyEndDate-${id}`}
          id={`studyEndDate-${id}`}
          className="form-control"
          value={studyEndDate}
          onChange={handleChange}
        />
      </div>

      <button
        className="button button-danger"
        onClick={() => removeEducationalExperience(id)}
      >
        Remove Experience
      </button>
    </form>
  );
};
