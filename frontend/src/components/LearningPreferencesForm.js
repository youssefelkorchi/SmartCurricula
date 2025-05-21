import React, { useState } from 'react';

const RadioCard = ({ id, name, value, label, description, checked, onChange, icon }) => (
  <label
    htmlFor={id}
    className={`relative flex flex-col items-center p-6 border rounded-xl cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105
      ${checked 
        ? 'bg-gradient-to-br from-indigo-500 to-purple-600 border-indigo-700 ring-4 ring-indigo-300 shadow-2xl text-white'
        : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-lg text-gray-700'}`}
  >
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="absolute opacity-0 w-0 h-0"
    />
    <div className={`mb-3 transition-transform duration-300 ease-in-out group-hover:scale-110 ${checked ? 'text-white' : 'text-indigo-500'}`}>
      {icon}
    </div>
    <span className={`text-md font-semibold ${checked ? 'text-white' : 'text-gray-800'}`}>{label}</span>
    {description && <span className={`text-xs mt-1 text-center ${checked ? 'text-indigo-100' : 'text-gray-500'}`}>{description}</span>}
    {checked && (
      <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6L9 17L4 12" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    )}
  </label>
);



function LearningPreferencesForm({ initialData, onNext, onPrevious }) {
  const [knowledgeLevel, setKnowledgeLevel] = useState(initialData.knowledgeLevel || 'beginner');
  const [learningStyle, setLearningStyle] = useState(initialData.learningStyle || 'videos');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ knowledgeLevel, learningStyle });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10 relative overflow-hidden p-2">
      {/* Decorative elements - Enhanced */} 
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-purple-200 rounded-full opacity-20 animate-pulse filter blur-lg"></div>
      <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-green-200 rounded-full opacity-20 animate-pulse filter blur-lg animation-delay-2000"></div>
      
      {/* Animated educational icons - More prominent and varied */}
      <div className="absolute top-1/4 right-5 opacity-30 animate-float animation-delay-500">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L20 9L12 15L4 9L12 3Z" stroke="#6D28D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 9V17L12 23L4 17V9" stroke="#6D28D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15L4 9" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 23V15" stroke="#A78BFA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="absolute bottom-1/3 left-5 opacity-30 animate-float animation-delay-1500">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="text-center relative z-10 mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Fine-tune Your Learning Path</h2>
        <p className="text-md text-gray-600">Select your preferences to personalize your educational journey.</p>
      </div>
      
      {/* Knowledge Level */}
      <fieldset className="transition-all duration-500 ease-out transform opacity-0 animate-fadeInUp relative z-10 bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl">
        <div className="absolute -top-4 -left-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full p-3 shadow-lg">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <legend className="text-base font-medium text-gray-900 mb-3">Current Knowledge Level</legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <RadioCard
            id="level-beginner"
            name="knowledgeLevel"
            value="beginner"
            label="Beginner"
            description="New to the topic or need a refresher."
            checked={knowledgeLevel === 'beginner'}
            onChange={(e) => setKnowledgeLevel(e.target.value)}
            icon={(
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14l-8-8 1.5-1.5L12 11l6.5-6.5L20 6l-8 8z" fill="currentColor"/>
                <path d="M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          />
          <RadioCard
            id="level-intermediate"
            name="knowledgeLevel"
            value="intermediate"
            label="Intermediate"
            description="Have some experience, looking to deepen understanding."
            checked={knowledgeLevel === 'intermediate'}
            onChange={(e) => setKnowledgeLevel(e.target.value)}
            icon={(
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          />
          <RadioCard
            id="level-advanced"
            name="knowledgeLevel"
            value="advanced"
            label="Advanced"
            description="Solid understanding, seeking expert-level insights."
            checked={knowledgeLevel === 'advanced'}
            onChange={(e) => setKnowledgeLevel(e.target.value)}
            icon={(
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.44 12.04l-1.95-1.95c-.39-.39-1.02-.39-1.41 0L12 16.17l-6.08-6.08c-.39-.39-1.02-.39-1.41 0l-1.95 1.95c-.39.39-.39 1.02 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l8.49-8.49c.39-.39.39-1.02 0-1.41zM12 2L3.51 10.49c-.39.39-.39 1.02 0 1.41l1.95 1.95c.39.39 1.02.39 1.41 0L12 7.83l4.13 4.13c.39.39 1.02.39 1.41 0l1.95-1.95c.39-.39.39-1.02 0-1.41L12 2z" fill="currentColor"/>
              </svg>
            )}
          />
        </div>
      </fieldset>

      {/* Learning Style */}
      <fieldset className="transition-all duration-300 ease-in-out relative z-10 bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md backdrop-filter backdrop-blur-sm bg-opacity-90">
        <div className="absolute -top-3 -right-3 bg-indigo-100 rounded-full p-2 shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <legend className="text-base font-medium text-gray-900 mb-3">Preferred Learning Style</legend>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <RadioCard
            id="style-videos"
            name="learningStyle"
            value="videos"
            label="Videos"
            description="Visual learner, prefer watching tutorials."
            checked={learningStyle === 'videos'}
            onChange={(e) => setLearningStyle(e.target.value)}
            icon={(
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 3.937V7.5h1.5V3.937A2.501 2.501 0 0015.063 1.5H3.937A2.501 2.501 0 001.5 3.937v16.125A2.501 2.501 0 003.937 22.5h11.125A2.501 2.501 0 0017.5 20.063V16.5H16v3.563A1.001 1.001 0 0115.063 21H3.937A1.001 1.001 0 013 20.063V3.937A1.001 1.001 0 013.937 3h11.125A1.001 1.001 0 0116 3.937zM22.5 10.5l-5.012 3V7.5l5.012 3z" fill="currentColor"/>
              </svg>
            )}
          />
          <RadioCard
            id="style-articles"
            name="learningStyle"
            value="articles"
            label="Articles"
            description="Prefer reading in-depth articles and documentation."
            checked={learningStyle === 'articles'}
            onChange={(e) => setLearningStyle(e.target.value)}
            icon={(
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" fill="currentColor"/>
              </svg>
            )}
          />
          <RadioCard
            id="style-handson"
            name="learningStyle"
            value="handson"
            label="Hands-on"
            description="Learn best by doing, prefer interactive exercises."
            checked={learningStyle === 'handson'}
            onChange={(e) => setLearningStyle(e.target.value)}
            icon={(
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.65 9.04l-4.88-4.88c-.39-.39-1.02-.39-1.41 0L3.29 14.22a.996.996 0 000 1.41l4.88 4.88c.39.39 1.02.39 1.41 0L19.65 10.46c.39-.39.39-1.03 0-1.42zM6.71 18.29L4.41 16l7.07-7.07 2.29 2.29-7.06 7.07zM10.5 19.5c-.28 0-.53-.11-.71-.29L4.29 13.7a.996.996 0 010-1.41l4.88-4.88c.39-.39 1.02-.39 1.41 0l1.44 1.44-6.36 6.36 2.12 2.12 6.36-6.36 1.44 1.44c.39.39.39 1.02 0 1.41l-5.5 5.5c-.18.18-.43.29-.71.29zm8.79-8.79L13.5 16.5l-2.12-2.12 5.79-5.79 2.12 2.12z" fill="currentColor"/>
                <path d="M17.5 2c-1.16 0-2.23.35-3.14.99l-1.47 1.03 2.12 2.12 1.03-1.47C16.65 4.23 17.07 4 17.5 4c.97 0 1.75.78 1.75 1.75 0 .43-.15.85-.47 1.16l-1.03 1.47 2.12 2.12 1.47-1.03c.64-.91.99-1.98.99-3.14C21.5 3.57 19.78 2 17.5 2z" fill="currentColor"/>
              </svg>
            )}
          />
        </div>
      </fieldset>

      <div className="flex justify-between pt-6 relative z-10">
        <button
          type="button"
          onClick={onPrevious}
          className="w-full sm:w-auto inline-flex justify-center items-center py-3.5 px-8 border border-gray-300 shadow-md text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-100 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          <svg className="w-5 h-5 mr-2.5 transform transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Go Back
        </button>
        <button
          type="submit"
          className="w-full sm:w-auto group inline-flex justify-center items-center py-3.5 px-8 border border-transparent shadow-lg text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl hover:scale-105"
        >
          Next: Review
          <svg className="w-5 h-5 ml-2.5 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Motivational quote - Enhanced */}
      <div className="text-center text-md text-gray-600 italic mt-12 opacity-90 relative z-10 p-4 bg-indigo-50/50 rounded-lg border border-indigo-100 shadow-sm">
        "The journey of a thousand miles begins with a single step. Choose yours wisely."
      </div>
    </form>
  );
}

export default LearningPreferencesForm;