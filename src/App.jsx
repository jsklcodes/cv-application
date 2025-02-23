import { Collapse } from './components/Collapse';
import { CvCreator } from './components/CvCreator';
import { CvPreview } from './components/CvPreview';
import { EducationalExpForm } from './components/EducationalExpForm';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { PersonalInfoHeader } from './components/PersonalInfoHeader';
import { ProfessionalExpForm } from './components/ProfessionalExpForm';

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
      </CvPreview>
    </div>
  );
};
