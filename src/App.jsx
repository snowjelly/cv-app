import { useState } from "react";
import "./App.css";
import GeneralInfoForm from "./components/GeneralInfoForm";

function App() {
  const [cvData, setCvData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  return (
    <>
      <GeneralInfoForm
        firstName={cvData.firstName}
        lastName={cvData.lastName}
        email={cvData.email}
        phoneNumber={cvData.phoneNumber}
        setCvData={setCvData}
      />
    </>
  );
}

export default App;
