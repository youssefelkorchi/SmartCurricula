import React, { useState } from 'react';

const RadioCard = ({ id, name, value, label, description, checked, onChange }) => (
  <label
    htmlFor={id}
    className={`relative flex flex-col p-4 border rounded-lg cursor-pointer transition-all duration-200 ease-in-out
      ${checked ? 'bg-indigo-50 border-indigo-500 ring-2 ring-indigo-500' : 'bg-white border-gray-300 hover:border-gray-400'}`}
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
    <span className="text-sm font-semibold text-gray-800">{label}</span>
    {description && <span className="text-xs text-gray-500 mt-1">{description}</span>}
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
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-1">Learning Preferences</h2>
        <p className="text-sm text-gray-500 mb-6">Help us tailor the content to your needs.</p>
      </div>
      
      {/* Knowledge Level */}
      <fieldset>
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
          />
          <RadioCard
            id="level-intermediate"
            name="knowledgeLevel"
            value="intermediate"
            label="Intermediate"
            description="Have some experience, looking to deepen understanding."
            checked={knowledgeLevel === 'intermediate'}
            onChange={(e) => setKnowledgeLevel(e.target.value)}
          />
          <RadioCard
            id="level-advanced"
            name="knowledgeLevel"
            value="advanced"
            label="Advanced"
            description="Solid understanding, seeking expert-level insights."
            checked={knowledgeLevel === 'advanced'}
            onChange={(e) => setKnowledgeLevel(e.target.value)}
          />
        </div>
      </fieldset>

      {/* Learning Style */}
      <fieldset>
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
          />
          <RadioCard
            id="style-articles"
            name="learningStyle"
            value="articles"
            label="Articles"
            description="Prefer reading in-depth articles and documentation."
            checked={learningStyle === 'articles'}
            onChange={(e) => setLearningStyle(e.target.value)}
          />
          <RadioCard
            id="style-handson"
            name="learningStyle"
            value="handson"
            label="Hands-on"
            description="Learn best by doing, prefer interactive exercises."
            checked={learningStyle === 'handson'}
            onChange={(e) => setLearningStyle(e.target.value)}
          />
        </div>
      </fieldset>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrevious}
          className="w-full sm:w-auto inline-flex justify-center py-3 px-6 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Previous
        </button>
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next: Review
        </button>
      </div>
    </form>
  );
}

export default LearningPreferencesForm;