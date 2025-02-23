export const EducationalExpCard = ({
  educationalExperience: { schoolName, degree, studyStartDate, studyEndDate },
}) => {
  return (
    <div className="experience-card">
      <header className="experience-header">
        <span className="text-bold">{schoolName}</span>
        <span className="text-italic">
          {studyStartDate} • {studyEndDate}
        </span>
      </header>

      <span>{degree}</span>
    </div>
  );
};
