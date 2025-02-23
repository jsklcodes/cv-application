import { Collapse } from './components/Collapse';
import { CvCreator } from './components/CvCreator';
import { PersonalInfoForm } from './components/PersonalInfoForm';

export const App = () => {
  return (
    <div className="app container">
      <h1 className="sr-only">CV Application</h1>

      <CvCreator>
        <Collapse title="Personal Information">
          <PersonalInfoForm />
        </Collapse>
        <Collapse title="Educational Experience">
          Educational Experience Content
        </Collapse>
        <Collapse title="Professional Experience">
          Professional Experience Content
        </Collapse>
      </CvCreator>
    </div>
  );
};
