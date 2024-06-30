import { useState } from "react";
import "./App.css";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationalExperienceForm from "./components/EducationalExperienceForm";

function App() {
  const [practicalExperienceData, setPracticalExperienceData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    workedFrom: "",
    workedUntil: "",
  });

  return (
    <>
      <GeneralInfoForm />
      <EducationalExperienceForm />
    </>
  );
}

export default App;
