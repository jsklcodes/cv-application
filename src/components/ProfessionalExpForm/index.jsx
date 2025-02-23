export const ProfessionalExpForm = () => {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="company" className="form-label">
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="position" className="form-label">
          Position
        </label>
        <input
          type="text"
          name="position"
          id="position"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="jobDetails" className="form-label">
          Details
        </label>
        <textarea
          name="jobDetails"
          id="jobDetails"
          className="form-control"
          rows="5"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="jobStartDate" className="form-label">
          Start Date
        </label>
        <input
          type="date"
          name="jobStartDate"
          id="jobStartDate"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="jobEndDate" className="form-label">
          End Date
        </label>
        <input
          type="date"
          name="jobEndDate"
          id="jobEndDate"
          className="form-control"
        />
      </div>

      <button className="button button-danger">Remove Experience</button>
    </form>
  );
};
