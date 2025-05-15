import React, { useState } from 'react';

function GoalDetailsForm({ initialData, onNext }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Goal title is required.');
      return;
    }
    setError('');
    onNext({ title, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-1">Goal Details</h2>
        <p className="text-sm text-gray-500 mb-6">What do you want to achieve?</p>
      </div>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Learning Goal Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="e.g., Master React for Web Development"
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Description (Optional)
        </label>
        <textarea
          name="description"
          id="description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Briefly describe your goal, what you hope to learn, or any specific areas of focus."
        />
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="w-full sm:w-auto inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next: Preferences
        </button>
      </div>
    </form>
  );
}

export default GoalDetailsForm;