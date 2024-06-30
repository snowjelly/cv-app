export default function GeneralInfoForm({
  firstName,
  lastName,
  email,
  phoneNumber,
  setData,
}) {
  return (
    <section>
      <input
        type="text"
        value={firstName}
        id="first-name-input"
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            firstName: e.target.value,
          }))
        }
      />
      <input
        type="text"
        value={lastName}
        id="last-name-input"
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            lastName: e.target.value,
          }))
        }
      />
      <input
        type="email"
        name="email-input"
        id="email-input"
        value={email}
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            email: e.target.value,
          }))
        }
      />
      <input
        type="tel"
        name="phone-number-input"
        id="phone-number-input"
        value={phoneNumber}
        onChange={(e) =>
          setData((prevData) => ({
            ...prevData,
            phoneNumber: e.target.value,
          }))
        }
      />
    </section>
  );
}
