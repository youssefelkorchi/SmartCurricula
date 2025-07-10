import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="flex items-center"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      
      {isVisible && (
        <div className="absolute z-10 w-64 px-4 py-2 mt-2 text-sm text-white bg-gray-800 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out transform -translate-x-1/2 left-1/2">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-800"></div>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;