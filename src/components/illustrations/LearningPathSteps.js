import React from 'react';

const LearningPathSteps = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="learning-path-illustration"
    >
      {/* Background Elements */}
      <path
        d="M20 180H180"
        stroke="#E5E7EB"
        strokeWidth="4"
        strokeLinecap="round"
      />
      
      {/* Steps */}
      <g className="steps-group">
        <rect x="30" y="160" width="40" height="20" rx="2" fill="#4F46E5" opacity="0.7" />
        <rect x="70" y="140" width="40" height="40" rx="2" fill="#4F46E5" opacity="0.8" />
        <rect x="110" y="110" width="40" height="70" rx="2" fill="#4F46E5" opacity="0.9" />
        <rect x="150" y="70" width="40" height="110" rx="2" fill="#4F46E5" />
      </g>
      
      {/* Person */}
      <g className="person-group" transform="translate(125, 80)">
        {/* Head */}
        <circle cx="0" cy="-25" r="10" fill="#10B981" />
        
        {/* Body */}
        <path
          d="M0 -15 L0 10"
          stroke="#10B981"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Arms */}
        <path
          d="M0 -5 L-12 5"
          stroke="#10B981"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M0 -5 L12 -10"
          stroke="#10B981"
          strokeWidth="4"
          strokeLinecap="round"
        />
        
        {/* Legs */}
        <path
          d="M0 10 L-8 25"
          stroke="#10B981"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M0 10 L8 25"
          stroke="#10B981"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      
      {/* Flag at the top */}
      <g className="flag-group" transform="translate(170, 50)">
        <path
          d="M0 0 L0 20"
          stroke="#10B981"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M0 0 L15 5 L0 10"
          fill="#10B981"
        />
      </g>
      
      {/* Small decorative elements */}
      <circle cx="50" cy="145" r="3" fill="#FCD34D" />
      <circle cx="90" cy="125" r="3" fill="#FCD34D" />
      <circle cx="130" cy="95" r="3" fill="#FCD34D" />
      <circle cx="170" cy="55" r="3" fill="#FCD34D" />
    </svg>
  );
};

export default LearningPathSteps;