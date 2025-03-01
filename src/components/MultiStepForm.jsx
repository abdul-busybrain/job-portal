import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import JobPreferences from "./JobPreferences";
import ReviewSubmit from "./ReviewSubmit";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md mt-10">
      {step === 1 && <PersonalInfo key={nextStep} nextStep={nextStep} />}
      {step === 2 && (
        <JobPreferences
          key={nextStep}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      )}
      {step === 3 && <ReviewSubmit prevStep={prevStep} key={prevStep} />}
    </div>
  );
}

export default MultiStepForm;
