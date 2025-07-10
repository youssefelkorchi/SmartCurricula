import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoalDetailsForm from '../components/GoalDetailsForm';
import LearningPreferencesForm from '../components/LearningPreferencesForm';
import ReviewGoal from '../components/ReviewGoal';

// Decorative elements for enhanced UI
const FloatingIcon = ({ children, className, delay = 0 }) => (
  <div className={`absolute animate-float ${className}`} style={{ animationDelay: `${delay}s` }}>
    {children}
  </div>
);

const GradientOrb = ({ className, color }) => (
  <div className={`absolute rounded-full ${className} ${color} animate-float opacity-20 blur-xl`} />
);

const BookIcon = () => (
  <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const LightbulbIcon = () => (
  <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

// Step indicator with micro-interactions for better UX
const StepIndicator = ({ currentStep, totalSteps }) => {
  const getStepIcon = (step) => {
    if (currentStep > step) {
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      );
    }
    return step;
  };

  return (
    <div className="flex justify-center items-center space-x-3 mb-12">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
        <React.Fragment key={step}>
          <div className="flex flex-col items-center space-y-2">
            <div
              className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ease-out transform
                ${currentStep >= step 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white scale-110 shadow-lg' 
                  : 'bg-gray-100 text-gray-400 hover:bg-gray-200'}
                ${currentStep === step ? 'ring-4 ring-blue-200 shadow-2xl animate-pulse' : ''}`}
            >
              {currentStep >= step && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 animate-ping" />
              )}
              <span className="relative z-10">{getStepIcon(step)}</span>
            </div>
            <div className={`text-xs font-medium transition-colors duration-300
              ${currentStep >= step ? 'text-blue-600' : 'text-gray-400'}`}>
              {step === 1 ? 'Details' : step === 2 ? 'Preferences' : 'Review'}
            </div>
          </div>
          {step < totalSteps && (
            <div className="flex-1 h-0.5 mx-4 relative overflow-hidden rounded-full bg-gray-200">
              <div 
                className={`absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-700 ease-out
                  ${currentStep > step ? 'w-full' : 'w-0'}`}
              />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

function NewGoal() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const totalSteps = 3;

  const [goalData, setGoalData] = useState({
    title: '',
    description: '',
    knowledgeLevel: 'beginner',
    learningStyle: 'videos',
    topics: [],
    // Add additional fields as required by your data schema
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = async (data) => {
    setIsTransitioning(true);
    setGoalData(prevData => ({ ...prevData, ...data }));
    
    // (Demo only) Simulate a short delay for smooth UI transitions
    await new Promise(resolve => setTimeout(resolve, 300));
    
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Handle final submission and provide user feedback
      try {
        console.log('Submitting Goal:', { ...goalData, ...data });
        // In a real app, make an API call to save the goal here
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Provide user feedback on successful submission
        const successMessage = `🎉 Congratulations! Your learning goal "${goalData.title || data.title}" has been created successfully!`;
        alert(successMessage);
        navigate('/dashboard'); // Navigate to dashboard or path view after submission
      } catch (error) {
        console.error('Error submitting goal:', error);
        alert('There was an error creating your goal. Please try again.');
      }
    }
    
    setIsTransitioning(false);
  };

  const handlePrevious = async () => {
    if (currentStep > 1) {
      setIsTransitioning(true);
      await new Promise(resolve => setTimeout(resolve, 200));
      setCurrentStep(prev => prev - 1);
      setIsTransitioning(false);
    }
  };

  // Get the step title based on the current step
  const getStepTitle = () => {
    switch(currentStep) {
      case 1: return "Goal Details";
      case 2: return "Learning Preferences";
      case 3: return "Review";
      default: return "";
    }
  };

  // Provide motivational content for learners
  const inspirationalContent = [
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
      icon: "✨"
    },
    {
      quote: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela",
      icon: "🌍"
    },
    {
      quote: "The beautiful thing about learning is that no one can take it away from you.",
      author: "B.B. King",
      icon: "🎯"
    },
    {
      quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi",
      icon: "🚀"
    },
    {
      quote: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      author: "Dr. Seuss",
      icon: "📚"
    }
  ];
  
  // Select motivational content based on the current step
  const getCurrentInspiration = () => {
    const stepIndex = (currentStep - 1) % inspirationalContent.length;
    return inspirationalContent[stepIndex];
  };
  
  const currentInspiration = getCurrentInspiration();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Enhanced background with modern gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-emerald-50/50" />
      
      {/* Floating decorative elements */}
      <FloatingIcon className="top-20 left-16 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg" delay={0}>
        <BookIcon />
      </FloatingIcon>
      <FloatingIcon className="top-32 right-20 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg" delay={1}>
        <LightbulbIcon />
      </FloatingIcon>
      <FloatingIcon className="bottom-32 left-20 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg" delay={2}>
        <TargetIcon />
      </FloatingIcon>
      <FloatingIcon className="bottom-20 right-16 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg" delay={0.5}>
        <RocketIcon />
      </FloatingIcon>
      
      {/* Modern gradient orbs */}
      <GradientOrb className="top-1/4 left-1/4 w-96 h-96" color="bg-gradient-to-r from-blue-400 to-purple-500" />
      <GradientOrb className="top-1/3 right-1/4 w-80 h-80" color="bg-gradient-to-r from-emerald-400 to-blue-500" />
      <GradientOrb className="bottom-1/4 right-1/3 w-72 h-72" color="bg-gradient-to-r from-purple-400 to-pink-500" />
      
      {/* Main content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Enhanced header with better typography and spacing */}
        <header className={`max-w-6xl mx-auto pt-12 pb-8 px-4 sm:px-6 text-center transition-all duration-1000 transform ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 leading-tight">
            Create Your Learning Goal
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Embark on a personalized learning journey tailored to your goals, preferences, and aspirations.
          </p>
        </header>
        
        {/* Enhanced main form container */}
        <div className={`flex-1 flex items-center justify-center px-4 sm:px-6 transition-all duration-700 transform ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="w-full max-w-4xl">
            {/* Step indicator */}
            <div className="mb-8">
              <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
            </div>
            
            {/* Main form card */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:shadow-3xl">
              {/* Card header with gradient */}
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 p-1">
                <div className="bg-white rounded-t-3xl px-8 py-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span className="font-medium">Step {currentStep} of {totalSteps}</span>
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-medium">
                        {getStepTitle()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form content with smooth transitions */}
              <div className="p-8 md:p-12">
                <div className={`transition-all duration-500 ease-in-out transform ${
                  isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
                }`}>
                  {currentStep === 1 && (
                    <div className="animate-fadeInUp">
                      <GoalDetailsForm 
                        initialData={{ title: goalData.title, description: goalData.description, topics: goalData.topics }}
                        onNext={handleNext} 
                      />
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div className="animate-fadeInUp animation-delay-500">
                      <LearningPreferencesForm
                        initialData={{ knowledgeLevel: goalData.knowledgeLevel, learningStyle: goalData.learningStyle }}
                        onNext={handleNext}
                        onPrevious={handlePrevious}
                      />
                    </div>
                  )}
                  {currentStep === 3 && (
                    <div className="animate-fadeInUp animation-delay-1000">
                      <ReviewGoal
                        goalData={goalData}
                        onConfirm={handleNext}
                        onPrevious={handlePrevious}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced inspirational footer */}
        <div className={`mt-12 pb-12 px-4 sm:px-6 transition-all duration-1000 delay-500 transform ${
          mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-white/30 text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl mr-3">{currentInspiration.icon}</span>
                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
              </div>
              
              <blockquote className="text-lg md:text-xl text-gray-700 font-medium italic leading-relaxed mb-4">
                "{currentInspiration.quote}"
              </blockquote>
              
              <cite className="text-sm font-semibold text-gray-500 not-italic">
                — {currentInspiration.author}
              </cite>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {currentStep === 1 && "🎯 Define your learning destination with clarity and purpose."}
                  {currentStep === 2 && "⚙️ Customize your learning experience to match your unique style."}
                  {currentStep === 3 && "🚀 Review and launch your personalized learning journey."}
                </p>
              </div>
              
              {/* Progress indicator */}
              <div className="mt-6">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-xs text-gray-500 font-medium">Progress</span>
                  <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-700 ease-out"
                      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 font-medium">{Math.round((currentStep / totalSteps) * 100)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewGoal;