import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoalDetailsForm from '../components/GoalDetailsForm';
import LearningPreferencesForm from '../components/LearningPreferencesForm';
import ReviewGoal from '../components/ReviewGoal';

// SVG Components for educational theme
const BookSvg = () => (
  <svg className="absolute top-20 left-10 w-24 h-24 text-indigo-200 opacity-50 transform rotate-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
  </svg>
);

const LightbulbSvg = () => (
  <svg className="absolute top-40 right-20 w-20 h-20 text-yellow-200 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
  </svg>
);

const PencilSvg = () => (
  <svg className="absolute bottom-20 left-20 w-16 h-16 text-green-200 opacity-50 transform -rotate-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
  </svg>
);

const ChartSvg = () => (
  <svg className="absolute bottom-40 right-10 w-20 h-20 text-blue-200 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
  </svg>
);

// Helper component for step indication with animation
const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mb-8">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <React.Fragment key={step}>
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ease-in-out
              ${currentStep >= step ? 'bg-indigo-600 text-white scale-110' : 'bg-gray-200 text-gray-600'}
              ${currentStep === step ? 'ring-4 ring-indigo-200 shadow-lg' : ''}`}
          >
            {step}
          </div>
          {step < totalSteps && (
            <div className={`h-1 w-16 transition-all duration-500 ease-in-out
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

  // Get step title based on current step
  const getStepTitle = () => {
    switch(currentStep) {
      case 1: return "Goal Details";
      case 2: return "Learning Preferences";
      case 3: return "Review";
      default: return "";
    }
  };

  // Motivational quotes for learners
  const quotes = [
    "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    "The beautiful thing about learning is that no one can take it away from you.",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
  ];
  
  // Randomly select a quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-12 relative overflow-hidden">
      {/* Decorative SVG elements */}
      <BookSvg />
      <LightbulbSvg />
      <PencilSvg />
      <ChartSvg />
      
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <header className="max-w-4xl mx-auto mb-10 px-4 sm:px-6 relative z-10">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Create Your Learning Goal</h1>
        <p className="text-center text-gray-600 text-lg">Let's define what you want to learn and how you prefer to learn it.</p>
      </header>
      
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl mb-8 px-4 sm:px-6 relative z-10">
        <div className="mb-6">
          <div className="flex justify-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
              Step {currentStep} of {totalSteps}: {getStepTitle()}
            </span>
          </div>
        </div>
        
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

        <div className="transition-opacity duration-300 ease-in-out">
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
      
      <div className="max-w-2xl mx-auto text-center mt-6 relative z-10">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-4">
          <p className="text-gray-700 italic">"{randomQuote}"</p>
        </div>
        <p className="text-sm text-gray-500">
          Your learning journey is about to begin. Take your time to set meaningful goals.
        </p>
      </div>
    </div>
  );
}

export default NewGoal;