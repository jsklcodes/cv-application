import { CvCreator } from './components/CvCreator';

export const App = () => {
  return (
    <div className="app container">
      <h1 className="sr-only">CV Application</h1>

      <CvCreator>
        <p>CvCreator</p>
      </CvCreator>
    </div>
  );
};
