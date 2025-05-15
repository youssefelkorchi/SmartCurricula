import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  // Mock data for learning goals
  const goals = [
    { id: 1, title: 'Learn React', level: 'Beginner', progress: 30 },
    { id: 2, title: 'Master Node.js', level: 'Intermediate', progress: 65 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">My Learning Dashboard</h1>
            <div className="flex space-x-4">
              <Link
                to="/profile"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
              >
                My Profile
              </Link>
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">My Learning Goals</h2>
              <Link
                to="/new-goal"
                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Add New Goal
              </Link>
            </div>
            
            {goals.length > 0 ? (
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {goals.map((goal) => (
                    <li key={goal.id}>
                      <Link to={`/path/${goal.id}`} className="block hover:bg-gray-50">
                        <div className="px-4 py-4 sm:px-6">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-indigo-600 truncate">{goal.title}</p>
                            <div className="ml-2 flex-shrink-0 flex">
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {goal.level}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 sm:flex sm:justify-between">
                            <div className="sm:flex">
                              <p className="flex items-center text-sm text-gray-500">
                                Progress: {goal.progress}%
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: `${goal.progress}%` }}></div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500">You don't have any learning goals yet.</p>
                <Link
                  to="/new-goal"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Create Your First Goal
                </Link>
              </div>
            )}
            
            <div className="mt-8">
              <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Quick Actions
                  </h3>
                  <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <h4 className="text-base font-medium text-gray-900">Continue Learning</h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Pick up where you left off with your most recent learning path.
                        </p>
                        <div className="mt-3">
                          <Link
                            to={goals.length > 0 ? `/path/${goals[0].id}` : '/new-goal'}
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                          >
                            {goals.length > 0 ? 'Continue Learning' : 'Start Learning'}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                      <div className="px-4 py-5 sm:p-6">
                        <h4 className="text-base font-medium text-gray-900">Update Preferences</h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Customize your learning experience by updating your profile preferences.
                        </p>
                        <div className="mt-3">
                          <Link
                            to="/profile"
                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                          >
                            Update Profile
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;