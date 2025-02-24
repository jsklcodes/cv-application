export const ProfessionalExpForm = ({
  professionalExperience: {
    id,
    company,
    position,
    jobDetails,
    jobStartDate,
    jobEndDate,
  },
  setProfessionalExperiences,
  removeProfessionalExperience,
}) => {
  const handleChange = event => {
    const { name, value } = event.target;
    setProfessionalExperiences(prevProfessionalExperiences =>
      prevProfessionalExperiences.map(experience =>
        experience.id === id
          ? { ...experience, [name.replace(`-${id}`, '')]: value }
          : experience
      )
    );
  };

  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor={`company-${id}`} className="form-label">
          Company
        </label>
        <input
          type="text"
          name={`company-${id}`}
          id={`company-${id}`}
          className="form-control"
          value={company}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`position-${id}`} className="form-label">
          Position
        </label>
        <input
          type="text"
          name={`position-${id}`}
          id={`position-${id}`}
          className="form-control"
          value={position}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`jobDetails-${id}`} className="form-label">
          Details
        </label>
        <textarea
          name={`jobDetails-${id}`}
          id={`jobDetails-${id}`}
          className="form-control"
          rows="5"
          value={jobDetails}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor={`jobStartDate-${id}`} className="form-label">
          Start Date
        </label>
        <input
          type="date"
          name={`jobStartDate-${id}`}
          id={`jobStartDate-${id}`}
          className="form-control"
          value={jobStartDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor={`jobEndDate-${id}`} className="form-label">
          End Date
        </label>
        <input
          type="date"
          name={`jobEndDate-${id}`}
          id={`jobEndDate-${id}`}
          className="form-control"
          value={jobEndDate}
          onChange={handleChange}
        />
      </div>

      <button
        className="button button-danger"
        onClick={() => removeProfessionalExperience(id)}
      >
        Remove Experience
      </button>
    </form>
  );
};
