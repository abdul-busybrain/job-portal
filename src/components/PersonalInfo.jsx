import { useJobForm } from "../context/JobFormContext";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

const PersonalInfo = ({ nextStep }) => {
  const { formData, setFormData } = useJobForm();
  const [error, setError] = useState("");

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleNext = () => {
    if (!formData.name.trim() || !formData.email.trim()) {
      setError("All fields are required!");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError("Please enter a valid emaill address!");
      return;
    }

    setError("");
    nextStep();
  };

  return (
    <div className="p-10">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

      <Input
        type="text"
        placeholder="John Doe"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="mb-3"
      />
      <Input
        type="email"
        placeholder="email@example.com"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="mb-3"
      />

      {error && <p className="text-red-500 my-3">{error}</p>}

      <Button
        onClick={handleNext}
        className="px-4 py-2 bg-blue-500 text-white rounded-full"
      >
        Next
      </Button>
    </div>
  );
};

export default PersonalInfo;
