export const PersonalInfoForm = () => {
  return (
    <form className="form">
      <div className="form-group">
        <label htmlFor="fullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          E-mail
        </label>
        <input type="email" name="email" id="email" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="socialLink" className="form-label">
          Social Link
        </label>
        <input
          type="text"
          name="socialLink"
          id="socialLink"
          className="form-control"
        />
      </div>
    </form>
  );
};
