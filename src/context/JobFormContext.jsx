import { createContext, useContext, useState } from "react";

// Create the context
const JobFormContext = createContext();

// Create a Provider
export const JobFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTile: "",
    experience: "",
    resume: null,
  });

  return (
    <JobFormContext.Provider value={{ formData, setFormData }}>
      {children}
    </JobFormContext.Provider>
  );
};

// Hook for using content
export const useJobForm = () => useContext(JobFormContext);
