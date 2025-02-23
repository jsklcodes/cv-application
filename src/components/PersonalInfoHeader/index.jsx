import './index.css';

export const PersonalInfoHeader = ({
  personalInformation: { fullName, phoneNumber, email, socialLink },
}) => {
  return (
    <header className="personal-info-header">
      <span className="person-full-name">{fullName}</span>
      <div className="person-info">
        <span>{phoneNumber}</span> •
        <span>{email}</span> •
        <span>{socialLink}</span>
      </div>
    </header>
  );
};
