import React from 'react';

const DetailItem = ({ label, value }) => (
  <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
    <dt className="text-sm font-medium text-gray-500">{label}</dt>
    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 capitalize">{value}</dd>
  </div>
);

function ReviewGoal({ goalData, onConfirm, onPrevious }) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-1">Review Your Goal</h2>
        <p className="text-sm text-gray-500 mb-6">Please confirm the details below before submitting.</p>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <dl className="divide-y divide-gray-200">
          <DetailItem label="Goal Title" value={goalData.title} />
          {goalData.description && <DetailItem label="Description" value={goalData.description} />}
          <DetailItem label="Knowledge Level" value={goalData.knowledgeLevel} />
          <DetailItem label="Learning Style" value={goalData.learningStyle} />
        </dl>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrevious}
          className="w-full sm:w-auto inline-flex justify-center py-3 px-6 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Previous
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="w-full sm:w-auto inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Confirm and Create Goal
        </button>
      </div>
    </div>
  );
}

export default ReviewGoal;