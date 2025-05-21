import React from 'react';

const DetailItem = ({ label, value }) => (
  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 hover:bg-gray-50 transition-colors duration-200 rounded-lg px-3 group">
    <dt className="text-sm font-medium text-gray-500 group-hover:text-indigo-600 transition-colors duration-200">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize group-hover:text-gray-700 transition-colors duration-200">{value}</dd>
  </div>
);

function ReviewGoal({ goalData, onConfirm, onPrevious }) {
  return (
    <div className="space-y-6 relative overflow-hidden">
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
      
      {/* Animated educational icons */}
      <div className="absolute top-1/4 right-10 opacity-20 animate-pulse">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4.5L2 9.5L12 14.5L22 9.5L12 4.5Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 11.5V16.5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 9.5V14.5L12 19.5L22 14.5V9.5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 left-10 opacity-20 animate-pulse" style={{animationDelay: '1s'}}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17L21 12L16 7" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12H9" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      
      <div className="text-center relative z-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Review Your Goal</h2>
        <p className="text-sm text-gray-500 mb-8">Please confirm the details below before submitting.</p>
      </div>
      
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md relative z-10 transform hover:scale-[1.01] backdrop-filter backdrop-blur-sm bg-opacity-90">
        <div className="absolute -top-3 -right-3 bg-indigo-100 rounded-full p-2 shadow-sm">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5C15 6.10457 14.1046 7 13 7H11C9.89543 7 9 6.10457 9 5Z" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 12L11 14L15 10" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <dl className="divide-y divide-gray-200">
          <DetailItem label="Goal Title" value={goalData.title} />
          {goalData.description && <DetailItem label="Description" value={goalData.description} />}
          <DetailItem label="Knowledge Level" value={goalData.knowledgeLevel} />
          <DetailItem label="Learning Style" value={goalData.learningStyle} />
        </dl>
      </div>

      <div className="flex justify-between pt-6 relative z-10">
        <button
          type="button"
          onClick={onPrevious}
          className="w-full sm:w-auto inline-flex justify-center items-center py-3 px-8 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-md"
        >
          <svg className="w-5 h-5 mr-2 transform group-hover:translate-x-[-2px] transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Previous
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="w-full sm:w-auto inline-flex justify-center items-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 transform hover:translate-y-[-2px] hover:shadow-lg"
        >
          Confirm and Create Goal
          <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-[2px] transition-transform duration-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Motivational quote */}
      <div className="text-center text-sm text-gray-500 italic mt-8 opacity-80 relative z-10">
        "The journey of a thousand miles begins with a single step."
      </div>
    </div>
  );
}

export default ReviewGoal;