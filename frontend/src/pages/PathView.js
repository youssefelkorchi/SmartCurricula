import React from 'react';
import { Link } from 'react-router-dom';

function PathView() {
  
  // Mock data for a learning path
  const path = {
    title: 'Learn React',
    level: 'Beginner',
    progress: 30,
    stages: [
      {
        title: 'Basics',
        steps: [
          {
            id: 1,
            title: 'Introduction to React',
            description: 'Learn the fundamentals of React and its core concepts.',
            resource: {
              title: 'React Official Documentation',
              url: 'https://reactjs.org/docs/getting-started.html',
              type: 'article',
              estimatedTime: 60
            },
            completed: true
          },
          {
            id: 2,
            title: 'Setting Up Your First React App',
            description: 'Learn how to create and configure a new React application.',
            resource: {
              title: 'Create React App Tutorial',
              url: 'https://create-react-app.dev/docs/getting-started',
              type: 'article',
              estimatedTime: 45
            },
            completed: true
          }
        ]
      },
      {
        title: 'Core Concepts',
        steps: [
          {
            id: 3,
            title: 'React Components and Props',
            description: 'Learn about React components and how to pass data with props.',
            resource: {
              title: 'Components and Props',
              url: 'https://reactjs.org/docs/components-and-props.html',
              type: 'article',
              estimatedTime: 90
            },
            completed: false
          },
          {
            id: 4,
            title: 'State and Lifecycle',
            description: 'Understand how to manage state and component lifecycle in React.',
            resource: {
              title: 'State and Lifecycle',
              url: 'https://reactjs.org/docs/state-and-lifecycle.html',
              type: 'article',
              estimatedTime: 120
            },
            completed: false
          }
        ]
      },
      {
        title: 'Projects',
        steps: [
          {
            id: 5,
            title: 'Build a Todo App',
            description: 'Apply your knowledge by building a simple todo application.',
            resource: {
              title: 'Build a Todo App with React',
              url: 'https://www.youtube.com/watch?v=pCA4qpQDZD8',
              type: 'video',
              estimatedTime: 180
            },
            completed: false
          }
        ]
      }
    ]
  };

  const handleMarkComplete = (stepId) => {
    console.log(`Marking step ${stepId} as complete`);
    // Here you would update the backend
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">{path.title}</h1>
            <Link
              to="/dashboard"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-medium text-gray-900">Overall Progress</h2>
                <span className="text-sm font-medium text-gray-500">{path.progress}% Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${path.progress}%` }}></div>
              </div>
            </div>
            
            {path.stages.map((stage, stageIndex) => (
              <div key={stageIndex} className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Stage {stageIndex + 1}: {stage.title}
                </h2>
                <div className="space-y-4">
                  {stage.steps.map((step) => (
                    <div key={step.id} className="bg-white shadow overflow-hidden sm:rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            {step.completed ? (
                              <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <div className="h-6 w-6 border-2 border-gray-300 rounded-full"></div>
                            )}
                          </div>
                          <div className="ml-4 flex-1">
                            <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                            <p className="mt-1 text-sm text-gray-500">{step.description}</p>
                            <div className="mt-3 bg-gray-50 p-4 rounded-md">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h4 className="text-sm font-medium text-gray-900">Resource: {step.resource.title}</h4>
                                  <p className="text-sm text-gray-500">
                                    Type: {step.resource.type} | Estimated time: {step.resource.estimatedTime} min
                                  </p>
                                </div>
                                <a
                                  href={step.resource.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                                >
                                  View Resource
                                </a>
                              </div>
                            </div>
                            {!step.completed && (
                              <div className="mt-4">
                                <button
                                  onClick={() => handleMarkComplete(step.id)}
                                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                >
                                  Mark as Complete
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default PathView;