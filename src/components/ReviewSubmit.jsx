import { useJobForm } from "../context/JobFormContext";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "./ui/button";
import { useState } from "react";
import { Terminal } from "lucide-react";

function ReviewSubmit({ prevStep }) {
  const { formData } = useJobForm();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4"> Review your information</h2>
      <p>
        <strong>Name</strong>: {formData.name}
      </p>
      <p>
        <strong>Email</strong>: {formData.email}
      </p>
      <p>
        <strong>Job Title</strong>: {formData.jobTitle}
      </p>
      <p>
        <strong>Experience</strong>: {formData.experience}
      </p>

      {submitted && (
        <Alert className="mt-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Congratulations!</AlertTitle>
          <AlertDescription>Application Submitted! 🎉</AlertDescription>
        </Alert>
      )}

      <div className="flex justify-between mt-4">
        <Button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-500 text-white rounded-full"
        >
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-500 text-white rounded-full"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

const AlertComponent = () => {
  return (
    <Alert className="mt-4">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>Application Submitted! 🎉</AlertDescription>
    </Alert>
  );
};

export default ReviewSubmit;
