import MultiStepForm from "./components/MultiStepForm";
import { JobFormProvider } from "./context/JobFormContext";

function App() {
  return (
    <JobFormProvider>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
        <MultiStepForm />
      </div>
    </JobFormProvider>
  );
}

export default App;
