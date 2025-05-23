import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle, FiUser, FiHome, FiZap, FiEdit3, FiAward, FiTrendingUp, FiBookOpen, FiTarget } from 'react-icons/fi'; // Example icons

function Dashboard() {
  const [goals, setGoals] = useState([]);
  const [user] = useState({ name: 'Valued Learner', avatar: 'https://via.placeholder.com/150' }); // Mock user
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti] = useState(false);

  // Mock data fetching
  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setGoals([
        { id: 1, title: 'Conquer React Hooks', level: 'Intermediate', progress: 75, icon: <FiZap className="text-yellow-400" />, color: 'bg-yellow-400' },
        { id: 2, title: 'Master Advanced CSS', level: 'Advanced', progress: 40, icon: <FiAward className="text-purple-400" />, color: 'bg-purple-400' },
        { id: 3, title: 'Explore Backend with Node.js', level: 'Beginner', progress: 15, icon: <FiBookOpen className="text-blue-400" />, color: 'bg-blue-400' },
      ]);
      // setUser({ name: 'Youssef', avatar: 'https://placekitten.com/100/100' }); // Example with a different avatar
      setIsLoading(false);
    };
    fetchDashboardData();
  }, []);

  // Placeholder for confetti effect on goal completion
  // const handleGoalCompletion = () => { // This function is currently unused
  //   setShowConfetti(true);
  //   setTimeout(() => setShowConfetti(false), 4000); // Hide confetti after 4 seconds
  // };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col items-center justify-center p-4 text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
        <p className="mt-4 text-xl font-semibold">Loading your learning dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 sm:p-6 lg:p-8">
      {showConfetti && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          {/* Basic Confetti Placeholder - In a real app, use a library like react-confetti */}
          <div className="absolute text-4xl animate-ping">🎉</div>
          <div className="absolute text-4xl animate-ping delay-200">🎊</div>
          <div className="absolute text-4xl animate-ping delay-500">✨</div>
        </div>
      )}
      <header className="mb-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={user.avatar} alt="User Avatar" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4 border-2 border-purple-500 shadow-lg" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Welcome back, {user.name}!</h1>
              <p className="text-sm text-slate-400">Let's make some progress today.</p>
            </div>
          </div>
          <nav className="flex space-x-3 sm:space-x-4">
            <Link
              to="/"
              className="flex items-center px-3 py-2 sm:px-4 sm:py-2 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-150"
            >
              <FiHome className="mr-2" /> Home
            </Link>
            <Link
              to="/profile"
              className="flex items-center px-3 py-2 sm:px-4 sm:py-2 text-sm font-medium rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-colors duration-150"
            >
              <FiUser className="mr-2" /> Profile
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto">
        {/* Learning Goals Section */}
        <section className="mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-4 sm:mb-0">Your Learning Quests</h2>
            <Link
              to="/new-goal"
              className="flex items-center px-6 py-3 font-medium rounded-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <FiPlusCircle className="mr-2" /> Start New Quest
            </Link>
          </div>

          {goals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {goals.map((goal) => (
                <Link to={`/path/${goal.id}`} key={goal.id} className="block bg-slate-800/70 backdrop-blur-md shadow-xl rounded-xl p-6 hover:bg-slate-700/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{goal.icon || <FiTarget />}</span>
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${goal.color ? goal.color.replace('bg-', 'text-') + ' bg-opacity-20' : 'bg-slate-700 text-slate-300'}`}>
                      {goal.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100 mb-2 truncate">{goal.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">Progress: {goal.progress}%</p>
                  <div className="w-full bg-slate-700 rounded-full h-3 mb-1">
                    <div className={`${goal.color || 'bg-purple-500'} h-3 rounded-full transition-all duration-500 ease-out`} style={{ width: `${goal.progress}%` }}></div>
                  </div>
                  <div className="text-right text-xs text-slate-500">
                    {goal.progress === 100 ? 'Completed!' : `${100 - goal.progress}% to go`}
                  </div>
                </Link>
              ))}
            </div>
            ) : (
              <div className="text-center py-16 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg">
                <FiTarget size={64} className="mx-auto text-purple-400 mb-6" />
                <h3 className="text-2xl font-semibold text-slate-100 mb-3">No Quests Yet!</h3>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">It looks like your adventure log is empty. Ready to embark on a new learning journey?</p>
                <Link
                  to="/new-goal"
                  className="inline-flex items-center px-8 py-3 font-semibold rounded-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <FiPlusCircle className="mr-2" /> Create Your First Quest
                </Link>
              </div>
            )}
        </section>

        {/* Quick Actions Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-8">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Continue Learning Card */}
            <div className="bg-slate-800/70 backdrop-blur-md shadow-xl rounded-xl p-6 hover:bg-slate-700/90 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center text-sky-400 mb-3">
                <FiTrendingUp size={24} className="mr-3" />
                <h4 className="text-lg font-semibold">Continue Your Journey</h4>
              </div>
              <p className="text-sm text-slate-400 mb-5">
                {goals.length > 0 ? `Jump back into "${goals[0].title}".` : 'Start a new quest to see your progress here.'}
              </p>
              <Link
                to={goals.length > 0 ? `/path/${goals[0].id}` : '/new-goal'}
                className={`inline-flex items-center px-6 py-3 font-medium rounded-lg text-white ${goals.length > 0 ? 'bg-sky-500 hover:bg-sky-600' : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'} transition-all duration-300 transform hover:scale-105 shadow-md`}
              >
                {goals.length > 0 ? <FiBookOpen className="mr-2" /> : <FiPlusCircle className="mr-2" />}
                {goals.length > 0 ? 'Resume Quest' : 'Start First Quest'}
              </Link>
            </div>

            {/* Update Preferences Card */}
            <div className="bg-slate-800/70 backdrop-blur-md shadow-xl rounded-xl p-6 hover:bg-slate-700/90 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center text-pink-400 mb-3">
                <FiEdit3 size={24} className="mr-3" />
                <h4 className="text-lg font-semibold">Customize Your Path</h4>
              </div>
              <p className="text-sm text-slate-400 mb-5">
                Tailor your learning experience by fine-tuning your profile and preferences.
              </p>
              <Link
                to="/profile"
                className="inline-flex items-center px-6 py-3 font-medium rounded-lg text-white bg-pink-500 hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <FiUser className="mr-2" /> Update Profile
              </Link>
            </div>
          </div>
        </section>

        {/* Footer - Optional, can be added if needed */}
        {/* <footer className="text-center text-sm text-slate-500 mt-12 pb-8">
          <p>&copy; {new Date().getFullYear()} SmartCurricula. Keep Learning, Keep Growing!</p>
        </footer> */}
      </main>
    </div>
  );
}

export default Dashboard;