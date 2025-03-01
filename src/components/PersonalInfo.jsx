import { useJobForm } from "../context/JobFormContext";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

const PersonalInfo = ({ nextStep }) => {
  const { formData, setFormData } = useJobForm();

  return (
    <div className="p-4">
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
      <Button
        onClick={nextStep}
        className="px-4 py-2 bg-blue-500 text-white rounded-full"
      >
        Next
      </Button>
    </div>
  );
};

export default PersonalInfo;
