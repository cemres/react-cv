import "./App.css";
import PersonalInformation from "./components/PersonalInformation";
import WorkExperience from "./components/WorkExperience";
import Nav from "./components/Nav";
import Section from "./components/Section";
import CV_DATA from "./assets/CV_DATA";

function App() {
  return (
    <div className="container p-2">
      <div className="border border-secondary rounded p-5">
        <Nav />
        <PersonalInformation personalInfo={CV_DATA.personalInformation} />
        <hr className="mt-4 mb-3" />
        <WorkExperience experiences={CV_DATA.workExperiences} />
        <hr className="mt-4 mb-3" />
        <Section sections={CV_DATA.sections} />
        <hr className="mt-4 mb-3" />
      </div>
    </div>
  );
}

export default App;
