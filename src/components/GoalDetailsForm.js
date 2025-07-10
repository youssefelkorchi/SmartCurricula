import React, { useState, useEffect } from 'react';
import Tooltip from './ui/Tooltip';
import TopicSelector from './ui/TopicSelector';
import LearningPathSteps from './illustrations/LearningPathSteps';

function GoalDetailsForm({ initialData, onNext }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [topics, setTopics] = useState(initialData.topics || []);
  const [isDraft, setIsDraft] = useState(initialData.isDraft || false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Animation states
  const [isFocused, setIsFocused] = useState({
    title: false,
    description: false
  });

  // Auto-save draft functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      if (title.trim() || description.trim()) {
        // Auto-save logic would go here
        console.log('Auto-saving draft...');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [title, description]);

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) {
      newErrors.title = 'Please enter a title for your learning goal';
    }
    if (title.trim().length < 3) {
      newErrors.title = 'Title must be at least 3 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => {
        onNext({ title, description, topics, isDraft });
      }, 500);
    }
  };
  
  const handleSaveDraft = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsLoading(false);
    setIsDraft(true);
    onNext({ title, description, topics, isDraft: true });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 opacity-20">
        <div className="w-96 h-96 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 opacity-15">
        <div className="w-80 h-80 bg-gradient-to-tr from-indigo-400 to-cyan-400 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-10 opacity-30 animate-float">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M30 5L50 45H10L30 5Z" fill="url(#gradient1)" />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute bottom-1/3 right-16 opacity-25 animate-float" style={{animationDelay: '2s'}}>
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          <circle cx="25" cy="25" r="20" fill="url(#gradient2)" />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Enhanced progress indicator */}
      <div className="relative z-20 pt-8 pb-4">
        <div className="flex justify-center">
          <div className="bg-white/90 backdrop-blur-md border border-blue-200/50 text-blue-700 font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Step 1 of 3</span>
            <div className="flex space-x-1">
              <div className="w-8 h-1 bg-blue-500 rounded-full"></div>
              <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
              <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Learning path illustration - repositioned */}
      <div className="absolute top-20 right-8 opacity-60 animate-float hidden lg:block">
        <LearningPathSteps />
      </div>
      
      {/* Main content container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {/* Hero section with enhanced typography */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl mb-6 shadow-lg">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-emerald-800 bg-clip-text text-transparent mb-4 leading-tight">
            Define your learning journey
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Set clear, achievable goals to create your personalized learning path and unlock your potential
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
      
          {/* Enhanced main form card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl transition-all duration-500 ease-out hover:shadow-3xl hover:bg-white/90 relative overflow-hidden">
            {/* Card header with gradient accent */}
            <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-1 w-full"></div>
            
            <div className="p-8 sm:p-10 lg:p-12">
              {/* Section: Goal Title */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Goal Title</h3>
                  </div>
                  <span className="text-xs font-medium text-red-600 bg-red-50 border border-red-200 px-3 py-1.5 rounded-full flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span>Required</span>
                  </span>
                </div>
                
                <div className={`relative transition-all duration-300 ${isFocused.title ? 'transform -translate-y-1 scale-[1.02]' : ''}`}>
                  <div className="relative">
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      onFocus={() => setIsFocused({...isFocused, title: true})}
                      onBlur={() => setIsFocused({...isFocused, title: false})}
                      className={`block w-full px-5 py-4 border-2 rounded-2xl shadow-sm text-lg font-medium transition-all duration-300 placeholder-gray-400 bg-white/50 backdrop-blur-sm
                        ${errors.title 
                          ? 'border-red-300 focus:ring-4 focus:ring-red-100 focus:border-red-500 bg-red-50/50' 
                          : 'border-gray-200 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 hover:border-blue-300 hover:bg-white/70'}`}
                      placeholder="e.g., Master React for Web Development"
                      maxLength="100"
                    />
                    {/* Character counter */}
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">
                      {title.length}/100
                    </div>
                    
                    {/* Success indicator */}
                    {title.length >= 3 && !errors.title && (
                      <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white">
                            <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {errors.title && (
                    <div className="flex items-center mt-3 text-red-600 text-sm font-medium animate-shake">
                      <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mr-2">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {errors.title}
                    </div>
                  )}
                </div>
              </div>
        
               {/* Section: Description */}
               <div className="mb-10">
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center space-x-3">
                     <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                         <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                     </div>
                     <h3 className="text-xl font-bold text-gray-900">Description</h3>
                   </div>
                   <Tooltip text="Provide details about what you want to achieve with this learning goal. The more specific you are, the better we can tailor your learning path.">
                     <div className="w-8 h-8 bg-blue-50 hover:bg-blue-100 rounded-lg flex items-center justify-center cursor-help transition-colors duration-200">
                       <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                       </svg>
                     </div>
                   </Tooltip>
                 </div>
                 
                 <div className={`relative transition-all duration-300 ${isFocused.description ? 'transform -translate-y-1 scale-[1.02]' : ''}`}>
                   <div className="relative">
                     <textarea
                       name="description"
                       id="description"
                       rows="5"
                       value={description}
                       onChange={(e) => setDescription(e.target.value)}
                       onFocus={() => setIsFocused({...isFocused, description: true})}
                       onBlur={() => setIsFocused({...isFocused, description: false})}
                       className="block w-full px-5 py-4 border-2 border-gray-200 rounded-2xl shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 text-lg transition-all duration-300 placeholder-gray-400 bg-white/50 backdrop-blur-sm hover:border-blue-300 hover:bg-white/70 resize-none"
                       placeholder="Describe what you want to learn and why it matters to you. Be specific about your goals, timeline, and what success looks like..."
                       maxLength="500"
                     />
                     {/* Character counter */}
                     <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                       {description.length}/500
                     </div>
                   </div>
                   
                   {/* Helpful suggestions */}
                   {description.length === 0 && !isFocused.description && (
                     <div className="mt-3 text-sm text-gray-500">
                       <p className="font-medium mb-2">💡 Consider including:</p>
                       <ul className="space-y-1 text-xs">
                         <li>• What specific skills you want to develop</li>
                         <li>• Your current experience level</li>
                         <li>• How you plan to apply this knowledge</li>
                         <li>• Your timeline and commitment level</li>
                       </ul>
                     </div>
                   )}
                 </div>
               </div>
        
               {/* Section: Topic Selection */}
               <div className="mb-8">
                 <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center space-x-3">
                     <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white">
                         <path d="M9.663 17H4.5A2.5 2.5 0 012 14.5V9.663C2 8.747 2.747 8 3.663 8H9.5A2.5 2.5 0 0112 10.5V16.337C12 17.253 11.253 18 10.337 18H4.663C3.747 18 3 17.253 3 16.337V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M14.5 8H20.337C21.253 8 22 8.747 22 9.663V14.5A2.5 2.5 0 0119.5 17H14.663C13.747 17 13 16.253 13 15.337V9.5A2.5 2.5 0 0115.5 7H21.337C22.253 7 23 7.747 23 8.663V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                       </svg>
                     </div>
                     <h3 className="text-xl font-bold text-gray-900">Related Topics</h3>
                   </div>
                   <span className="text-xs font-medium text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full">
                     Optional
                   </span>
                 </div>
                 
                 <div className="bg-gray-50/50 rounded-2xl p-6 border border-gray-100">
                   <TopicSelector 
                     selectedTopics={topics} 
                     onChange={setTopics} 
                   />
                 </div>
               </div>
             </div>
           </div>

           {/* Enhanced action buttons */}
           <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
             <button
               type="button"
               onClick={handleSaveDraft}
               disabled={isLoading}
               className="w-full sm:w-auto inline-flex items-center justify-center py-3.5 px-8 border-2 border-gray-300 shadow-sm text-base font-semibold rounded-2xl text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
             >
               {isLoading ? (
                 <>
                   <div className="w-5 h-5 mr-3 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                   Saving...
                 </>
               ) : (
                 <>
                   <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                   </svg>
                   Save as Draft
                 </>
               )}
             </button>
             
             <button
               type="submit"
               disabled={isLoading || !title.trim()}
               className="w-full sm:w-auto group inline-flex justify-center items-center py-4 px-10 border border-transparent shadow-xl text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 hover:from-blue-700 hover:via-blue-800 hover:to-emerald-700 focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
             >
               {/* Button shine effect */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
               
               {isLoading ? (
                 <>
                   <div className="w-6 h-6 mr-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                   Processing...
                 </>
               ) : showSuccess ? (
                 <>
                   <div className="w-6 h-6 mr-3 bg-white rounded-full flex items-center justify-center">
                     <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                     </svg>
                   </div>
                   Success!
                 </>
               ) : (
                 <>
                   Continue to Preferences
                   <svg className="w-6 h-6 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                   </svg>
                 </>
               )}
             </button>
           </div>
         </form>
         
         {/* Motivational footer */}
         <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl border border-blue-100/50">
           <div className="flex items-center justify-center mb-3">
             <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                 <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor" />
               </svg>
             </div>
           </div>
           <p className="text-lg font-medium text-gray-800 mb-2">
             "Every expert was once a beginner. Every pro was once an amateur."
           </p>
           <p className="text-sm text-gray-600">
             Your learning journey starts with this single step. Make it count! 🚀
           </p>
         </div>
       </div>
     </div>
   );
}

export default GoalDetailsForm;