import { useState } from 'react';
import { Collapse } from './components/Collapse';
import { CvCreator } from './components/CvCreator';
import { CvPreview } from './components/CvPreview';
import { EducationalExpForm } from './components/EducationalExpForm';
import { PreviewSection } from './components/PreviewSection';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { PersonalInfoHeader } from './components/PersonalInfoHeader';
import { ProfessionalExpForm } from './components/ProfessionalExpForm';
import { EducationalExpCard } from './components/EducationalExpCard';
import { ProfessionalExpCard } from './components/ProfessionalExpCard';

export const App = () => {
  const [personalInformation, setPersonalInformation] = useState({
    fullName: 'Emily J. Carter',
    phoneNumber: '+1 (555) 123-4567',
    email: 'emily.carter@example.com',
    socialLink: 'linkedin.com/in/emilyjcarter',
  });
  const [educationalExperiences, setEducationalExperiences] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: 'University of California, Berkeley',
      degree: 'Bachelor of Science in Computer Science',
      studyStartDate: '2016-08-13',
      studyEndDate: '2020-05-20',
    },
  ]);

  const addEducationalExperience = () => {
    setEducationalExperiences(prevEducationalExperiences => [
      ...prevEducationalExperiences,
      {
        id: crypto.randomUUID(),
        schoolName: '',
        degree: '',
        studyStartDate: '',
        studyEndDate: '',
      },
    ]);
  };

  const removeEducationalExperience = id => {
    setEducationalExperiences(prevEducationalExperiences =>
      prevEducationalExperiences.filter(experience => experience.id !== id)
    );
  };

  return (
    <div className="app container">
      <h1 className="sr-only">CV Application</h1>

      <CvCreator>
        <Collapse title="Personal Information">
          <PersonalInfoForm
            personalInformation={personalInformation}
            setPersonalInformation={setPersonalInformation}
          />
        </Collapse>
        <Collapse title="Educational Experience">
          <div className="experience-group">
            {educationalExperiences.map(experience => (
              <EducationalExpForm
                key={experience.id}
                educationalExperience={experience}
                setEducationalExperiences={setEducationalExperiences}
                removeEducationalExperience={removeEducationalExperience}
              />
            ))}
          </div>

          <button
            className="button button-primary"
            onClick={addEducationalExperience}
          >
            Add Experience
          </button>
        </Collapse>
        <Collapse title="Professional Experience">
          <div className="experience-group">
            <ProfessionalExpForm />
          </div>

          <button className="button button-primary">Add Experience</button>
        </Collapse>
      </CvCreator>

      <CvPreview>
        <PersonalInfoHeader personalInformation={personalInformation} />

        <PreviewSection title="Educational Experiences">
          {educationalExperiences.map(experience => (
            <EducationalExpCard
              key={experience.id}
              educationalExperience={experience}
            />
          ))}
        </PreviewSection>

        <PreviewSection title="Professional Experiences">
          <ProfessionalExpCard />
        </PreviewSection>
      </CvPreview>
    </div>
  );
};
