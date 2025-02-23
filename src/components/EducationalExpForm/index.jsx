export const EducationalExpForm = () => {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="schoolName" className="form-label">
          School Name
        </label>
        <input
          type="text"
          name="schoolName"
          id="schoolName"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="degree" className="form-label">
          Degree
        </label>
        <input type="text" name="degree" id="degree" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="studyStartDate" className="form-label">
          Start Date
        </label>
        <input
          type="date"
          name="studyStartDate"
          id="studyStartDate"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="studyEndDate" className="form-label">
          End Date
        </label>
        <input
          type="date"
          name="studyEndDate"
          id="studyEndDate"
          className="form-control"
        />
      </div>

      <button className="button button-danger">Remove Experience</button>
    </form>
  );
};
