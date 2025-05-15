import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoalDetailsForm from '../components/GoalDetailsForm';
import LearningPreferencesForm from '../components/LearningPreferencesForm';
import ReviewGoal from '../components/ReviewGoal';

// Helper component for step indication
const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <React.Fragment key={step}>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold
              ${currentStep >= step ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'}
              ${currentStep === step ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
          >
            {step}
          </div>
          {step < totalSteps && (
            <div className={`h-1 w-12 
              ${currentStep > step ? 'bg-indigo-600' : 'bg-gray-200'}`}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

function NewGoal() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const [goalData, setGoalData] = useState({
    title: '',
    description: '',
    knowledgeLevel: 'beginner',
    learningStyle: 'videos',
    // Add other fields as needed from your schema
  });

  const handleNext = (data) => {
    setGoalData(prevData => ({ ...prevData, ...data }));
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Handle final submission
      console.log('Submitting Goal:', goalData);
      // Here you would typically make an API call to save the goal
      // For now, let's navigate to the dashboard as an example
      alert('Goal submitted successfully! (Mock)');
      navigate('/dashboard'); // Navigate to dashboard or path view page
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">Create Your Learning Goal</h1>
        <p className="text-center text-gray-600 mt-2">Let's define what you want to learn and how you prefer to learn it.</p>
      </header>
      
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

        {currentStep === 1 && (
          <GoalDetailsForm 
            initialData={{ title: goalData.title, description: goalData.description }}
            onNext={handleNext} 
          />
        )}
        {currentStep === 2 && (
          <LearningPreferencesForm
            initialData={{ knowledgeLevel: goalData.knowledgeLevel, learningStyle: goalData.learningStyle }}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
        {currentStep === 3 && (
          <ReviewGoal
            goalData={goalData}
            onConfirm={handleNext} // handleNext will act as submit on the last step
            onPrevious={handlePrevious}
          />
        )}
      </div>
    </div>
  );
}

export default NewGoal;