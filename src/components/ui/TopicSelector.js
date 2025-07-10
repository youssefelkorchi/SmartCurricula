import React from 'react';

const TopicSelector = ({ selectedTopics, onChange }) => {
  // Sample topics for demonstration; in production, fetch from API
  const availableTopics = [
    { id: 'web-dev', name: 'Web Development', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { id: 'mobile-dev', name: 'Mobile Development', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { id: 'data-science', name: 'Data Science', color: 'bg-green-100 text-green-800 border-green-200' },
    { id: 'ai-ml', name: 'AI & Machine Learning', color: 'bg-red-100 text-red-800 border-red-200' },
    { id: 'devops', name: 'DevOps', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
    { id: 'cloud', name: 'Cloud Computing', color: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
    { id: 'security', name: 'Cybersecurity', color: 'bg-gray-100 text-gray-800 border-gray-200' },
    { id: 'blockchain', name: 'Blockchain', color: 'bg-pink-100 text-pink-800 border-pink-200' },
  ];

  const toggleTopic = (topicId) => {
    if (selectedTopics.includes(topicId)) {
      onChange(selectedTopics.filter(id => id !== topicId));
    } else {
      onChange([...selectedTopics, topicId]);
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {availableTopics.map((topic) => (
          <button
            key={topic.id}
            type="button"
            onClick={() => toggleTopic(topic.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 hover:shadow-md
              ${selectedTopics.includes(topic.id) 
                ? `${topic.color} ring-2 ring-offset-1 ring-opacity-60 ring-${topic.color.split(' ')[0].replace('bg-', '')}` 
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'}`}
          >
            {topic.name}
            {selectedTopics.includes(topic.id) && (
              <span className="ml-1.5 inline-flex items-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            )}
          </button>
        ))}
      </div>
      <p className="text-xs text-gray-500 italic mt-1">
        {selectedTopics.length === 0 
          ? 'Select topics relevant to your learning goal' 
          : `${selectedTopics.length} topic${selectedTopics.length > 1 ? 's' : ''} selected`}
      </p>
    </div>
  );
};

export default TopicSelector;