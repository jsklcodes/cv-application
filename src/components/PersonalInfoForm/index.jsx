export const PersonalInfoForm = ({
  personalInformation: { fullName, phoneNumber, email, socialLink },
  setPersonalInformation,
}) => {
  const handleChange = event => {
    const { name, value } = event.target;
    setPersonalInformation(prevPersonalInformation => ({
      ...prevPersonalInformation,
      [name]: value,
    }));
  };

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
          value={fullName}
          onChange={handleChange}
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
          value={phoneNumber}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          E-mail
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={email}
          onChange={handleChange}
        />
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
          value={socialLink}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
