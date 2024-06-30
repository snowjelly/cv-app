import FormInput from "./FormInput";

export default function GeneralInfoForm({
  firstName,
  lastName,
  email,
  phoneNumber,
  setGeneralInfoData,
}) {
  return (
    <section className="general-info-form-section form-section">
      <FormInput
        id="first-name-input"
        type="text"
        value={firstName}
        valueAsStr="firstName"
        setData={setGeneralInfoData}
      />
      <FormInput
        id="last-name-input"
        type="text"
        value={lastName}
        valueAsStr="lastName"
        setData={setGeneralInfoData}
      />
      <FormInput
        id="email-input"
        type="email"
        value={email}
        valueAsStr="email"
        setData={setGeneralInfoData}
      />
      <FormInput
        id="phone-number-input"
        type="tel"
        value={phoneNumber}
        valueAsStr="phoneNumber"
        setData={setGeneralInfoData}
      />
    </section>
  );
}
