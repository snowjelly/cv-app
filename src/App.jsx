import { useState } from "react";
import "./App.css";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationalExperienceForm from "./components/EducationalExperienceForm";

function App() {
  const [generalInfoData, setGeneralInfoData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const { firstName, lastName, email, phoneNumber } = generalInfoData;

  const [educationalExperienceData, setEducationalExperienceData] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  const { schoolName, titleOfStudy, dateOfStudy } = educationalExperienceData;

  const [practicalExperienceData, setPracticalExperienceData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    workedFrom: "",
    workedUntil: "",
  });

  return (
    <>
      <GeneralInfoForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        setData={setGeneralInfoData}
      />
      <EducationalExperienceForm
        schoolName={schoolName}
        titleOfStudy={titleOfStudy}
        dateOfStudy={dateOfStudy}
        setData={setEducationalExperienceData}
      />
    </>
  );
}

export default App;
