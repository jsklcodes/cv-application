import { Collapse } from './components/Collapse';
import { CvCreator } from './components/CvCreator';
import { EducationalExpForm } from './components/EducationalExpForm';
import { PersonalInfoForm } from './components/PersonalInfoForm';
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
        </Collapse>
        <Collapse title="Professional Experience">
          <div className="experience-group">
            <ProfessionalExpForm />
          </div>
        </Collapse>
      </CvCreator>
    </div>
  );
};
