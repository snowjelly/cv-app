import "./App.css";
import { useState } from "react";
import GeneralInfoForm from "./components/GeneralInfoForm";
import EducationalExperienceForm from "./components/EducationalExperienceForm";
import PracticalExperienceForm from "./components/PracticalExperienceForm";
import FormButton from "./components/FormButton";

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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { firstName, lastName, email, phoneNumber } = generalInfoData;
  const { schoolName, titleOfStudy, dateOfStudy } = educationalExperienceData;
  const {
    companyName,
    positionTitle,
    mainResponsibilities,
    workedFrom,
    workedUntil,
  } = practicalExperienceData;

  const handleEdit = (e) => {
    setIsSubmitted(false);
  };

  const handleSubmit = (e) => {
    setIsSubmitted(true);
  };

  return (
    <form id="cv-form">
      <div className="cv-form-header">
        <div className="cv-form-title">
          <h1>Cv Form</h1>
        </div>
      </div>
      <div className="cv-form-section-container">
        <div className="cv-form-section-content">
          <h2>General Info</h2>
          <GeneralInfoForm
            firstName={firstName}
            lastName={lastName}
            email={email}
            phoneNumber={phoneNumber}
            setGeneralInfoData={setGeneralInfoData}
            isSubmitted={isSubmitted}
          />
        </div>
        <div className="cv-form-section-content">
          <h2>Educational Experience</h2>
          <EducationalExperienceForm
            schoolName={schoolName}
            titleOfStudy={titleOfStudy}
            dateOfStudy={dateOfStudy}
            setEducationalExperienceData={setEducationalExperienceData}
          />
        </div>
        <div className="cv-form-section-content">
          <h2>Practical Experience</h2>
          <PracticalExperienceForm
            companyName={companyName}
            positionTitle={positionTitle}
            mainResponsibilities={mainResponsibilities}
            workedFrom={workedFrom}
            workedUntil={workedUntil}
            setPracticalExperienceData={setPracticalExperienceData}
          />
        </div>
      </div>
      <div className="cv-form-btn-container">
        <FormButton
          id="cv-form-edit-btn"
          onClick={handleEdit}
          className="cv-form-btn"
        >
          Edit
        </FormButton>
        <FormButton
          id="cv-form-submit-btn"
          onClick={handleSubmit}
          className="cv-form-btn"
        >
          Submit
        </FormButton>
      </div>
    </form>
  );
}

export default App;
