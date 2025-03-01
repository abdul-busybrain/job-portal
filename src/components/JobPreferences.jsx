import { useState } from "react";
import { useJobForm } from "../context/JobFormContext";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const JobPreferences = ({ nextStep, prevStep }) => {
  const { formData, setFormData } = useJobForm();

  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.jobTitle.trim() || !formData.experience.trim()) {
      setError("All fields are required");
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <div className="p-10">
      <h2 className="text-xl font-semibold mb-4"> Job Preferences</h2>
      <Input
        type="text"
        placeholder="Desired Job"
        value={formData.jobTitle}
        onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
        className="mb-3"
      />
      <Input
        type="number"
        placeholder="Years of Experience"
        value={formData.experience}
        onChange={(e) =>
          setFormData({ ...formData, experience: e.target.value })
        }
        className="mb-3"
      />

      {error && <p className="text-red-500 my-3">{error}</p>}

      <div className="flex justify-between">
        <Button
          onClick={prevStep}
          className="px-4 py-2 bg-gray-500 text-white rounded-full"
        >
          Back
        </Button>

        <Button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded-full"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default JobPreferences;
