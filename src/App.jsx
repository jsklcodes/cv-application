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
  return (
    <div className="app container">
      <h1 className="sr-only">CV Application</h1>

      <CvCreator>
        <Collapse title="Personal Information">
          <PersonalInfoForm />
        </Collapse>
        <Collapse title="Educational Experience">
          <div className="experience-group">
            <EducationalExpForm />
          </div>

          <button className="button button-primary">Add Experience</button>
        </Collapse>
        <Collapse title="Professional Experience">
          <div className="experience-group">
            <ProfessionalExpForm />
          </div>

          <button className="button button-primary">Add Experience</button>
        </Collapse>
      </CvCreator>

      <CvPreview>
        <PersonalInfoHeader />

        <PreviewSection title="Educational Experiences">
          <EducationalExpCard />
        </PreviewSection>

        <PreviewSection title="Professional Experiences">
          <ProfessionalExpCard />
        </PreviewSection>
      </CvPreview>
    </div>
  );
};
