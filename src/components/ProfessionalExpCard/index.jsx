export const ProfessionalExpCard = ({
  professionalExperience: {
    company,
    position,
    jobDetails,
    jobStartDate,
    jobEndDate,
  },
}) => {
  return (
    <div className="experience-card">
      <header className="experience-header">
        <span className="text-bold">{company}</span>
        <span className="text-italic">
          {jobStartDate} • {jobEndDate}
        </span>
      </header>

      <span>{position}</span>
      <p className="text-small">{jobDetails}</p>
    </div>
  );
};
