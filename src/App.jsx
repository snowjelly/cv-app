import "./App.css";
import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationalExperienceForm from "./components/EducationalExperienceForm";
import PracticalExperienceForm from "./components/PracticalExperienceForm";

function App() {
  const [generalInfoData, setGeneralInfoData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [educationalExperienceData, setEducationalExperienceData] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  const [practicalExperienceData, setPracticalExperienceData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    workedFrom: "",
    workedUntil: "",
  });

  const { firstName, lastName, email, phoneNumber } = generalInfoData;
  const { schoolName, titleOfStudy, dateOfStudy } = educationalExperienceData;
  const {
    companyName,
    positionTitle,
    mainResponsibilities,
    workedFrom,
    workedUntil,
  } = practicalExperienceData;

  return (
    <form id="cv-form">
      <GeneralInfoForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        setGeneralInfoData={setGeneralInfoData}
      />
      <EducationalExperienceForm
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        dateOfStudy={dateOfStudy}
        setEducationalExperienceData={setEducationalExperienceData}
      />
      <PracticalExperienceForm
        companyName={companyName}
        positionTitle={positionTitle}
        mainResponsibilities={mainResponsibilities}
        workedFrom={workedFrom}
        workedUntil={workedUntil}
        setPracticalExperienceData={setPracticalExperienceData}
      />
    </form>
  );
}

export default App;
