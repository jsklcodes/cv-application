import './index.css';

export const PersonalInfoHeader = () => {
  return (
    <header className="personal-info-header">
      <span className="person-full-name">Emily J. Carter</span>
      <div className="person-info">
        <span>+1 (555) 123-4567</span> •
        <span>emily.carter@example.com</span> •
        <span>linkedin.com/in/emilyjcarter</span>
      </div>
    </header>
  );
};
