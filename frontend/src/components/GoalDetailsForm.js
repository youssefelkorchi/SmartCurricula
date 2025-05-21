import React, { useState } from 'react';
import Tooltip from './ui/Tooltip';
import TopicSelector from './ui/TopicSelector';
import LearningPathSteps from './illustrations/LearningPathSteps';

function GoalDetailsForm({ initialData, onNext }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [topics, setTopics] = useState(initialData.topics || []);
  const [isDraft, setIsDraft] = useState(initialData.isDraft || false);
  const [errors, setErrors] = useState({});
  
  // Animation states
  const [isFocused, setIsFocused] = useState({
    title: false,
    description: false
  });

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Please enter a title for your learning goal';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onNext({ title, description, topics, isDraft });
    }
  };
  
  const handleSaveDraft = () => {
    setIsDraft(true);
    onNext({ title, description, topics, isDraft: true });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0Z" fill="#4F46E5" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 opacity-10">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M90 0C139.706 0 180 40.2944 180 90C180 139.706 139.706 180 90 180C40.2944 180 0 139.706 0 90C0 40.2944 40.2944 0 90 0Z" fill="#10B981" />
        </svg>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <div className="bg-indigo-100 text-indigo-800 font-medium text-sm px-4 py-1.5 rounded-b-lg shadow-sm">
          Step 1 of 3
        </div>
      </div>
      
      {/* Learning path illustration */}
      <div className="absolute top-1/4 right-10 opacity-70 animate-float">
        <LearningPathSteps />
      </div>
      
      <div className="text-center relative z-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Define your learning journey</h2>
        <p className="text-md text-gray-600 mb-8">Set clear goals to create your personalized learning path</p>
      </div>
      
      {/* Main form card */}
      <div className="relative z-10 bg-white p-8 rounded-xl border border-gray-200 shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl backdrop-filter backdrop-blur-sm bg-opacity-95">
        {/* Section: Goal Title */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">Goal Title</h3>
            <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">Required</span>
          </div>
          
          <div className={`relative transition-all duration-300 ${isFocused.title ? 'transform -translate-y-1' : ''}`}>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onFocus={() => setIsFocused({...isFocused, title: true})}
              onBlur={() => setIsFocused({...isFocused, title: false})}
              className={`block w-full px-4 py-3 border rounded-lg shadow-sm sm:text-md transition-all duration-200 
                ${errors.title ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 hover:border-indigo-300'}`}
              placeholder="e.g., Master React for Web Development"
            />
            {errors.title && (
              <div className="flex items-center mt-1 text-red-600 text-sm">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {errors.title}
              </div>
            )}
          </div>
        </div>
        
        {/* Section: Description */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">Description</h3>
            <Tooltip text="Provide details about what you want to achieve with this learning goal. The more specific you are, the better we can tailor your learning path.">
              <span className="text-indigo-600 cursor-help">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </span>
            </Tooltip>
          </div>
          
          <div className={`relative transition-all duration-300 ${isFocused.description ? 'transform -translate-y-1' : ''}`}>
            <textarea
              name="description"
              id="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onFocus={() => setIsFocused({...isFocused, description: true})}
              onBlur={() => setIsFocused({...isFocused, description: false})}
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-md transition-all duration-200 hover:border-indigo-300"
              placeholder="Describe what you want to learn and why it matters to you..."
            />
          </div>
        </div>
        
        {/* Section: Topic Selection */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-800">Related Topics</h3>
          </div>
          
          <TopicSelector 
            selectedTopics={topics} 
            onChange={setTopics} 
          />
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex justify-between items-center pt-6 relative z-10">
        <button
          type="button"
          onClick={handleSaveDraft}
          className="inline-flex items-center py-2.5 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
          </svg>
          Save as Draft
        </button>
        
        <button
          type="submit"
          className="inline-flex justify-center items-center py-3 px-6 border border-transparent shadow-md text-base font-medium rounded-lg text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg"
        >
          Continue
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </button>
      </div>
    </form>
  );
}

export default GoalDetailsForm;