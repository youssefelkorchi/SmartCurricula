import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle, FiUser, FiHome, FiZap, FiEdit3, FiAward, FiTrendingUp, FiBookOpen, FiTarget, FiClock, FiBarChart2, FiStar } from 'react-icons/fi';
import avatarImg from '../assets/avatar.png';

function Dashboard() {
  const [goals, setGoals] = useState([]);
  const [user] = useState({ name: 'Valued Learner', avatar: avatarImg });
  const [isLoading, setIsLoading] = useState(true);
  const [showConfetti] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [achievements] = useState([
    { name: 'First Goal', icon: '🎯', unlocked: true, date: '2024-01-15' },
    { name: 'Week Warrior', icon: '🔥', unlocked: true, date: '2024-01-20' },
    { name: 'Knowledge Seeker', icon: '📚', unlocked: true, date: '2024-01-25' },
    { name: 'Master Learner', icon: '👑', unlocked: false },
    { name: 'Social Butterfly', icon: '🦋', unlocked: false },
    { name: 'Speed Demon', icon: '⚡', unlocked: false }
  ]);
  const [recentActivity] = useState([
    { type: 'goal_completed', title: 'React Hooks Basics', time: '2 hours ago', icon: '✅' },
    { type: 'new_goal', title: 'Advanced CSS Grid', time: '1 day ago', icon: '🎯' },
    { type: 'streak', title: '7-day learning streak!', time: '2 days ago', icon: '🔥' },
    { type: 'achievement', title: 'Knowledge Seeker unlocked', time: '3 days ago', icon: '🏆' }
  ]);
  const [upcomingGoals] = useState([
    { title: 'Node.js Backend', dueDate: '2024-02-15', priority: 'high' },
    { title: 'Database Design', dueDate: '2024-02-20', priority: 'medium' },
    { title: 'API Integration', dueDate: '2024-02-25', priority: 'low' }
  ]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fetch dashboard data (mocked for demo purposes)
  useEffect(() => {
    const fetchDashboardData = async () => {
      setIsLoading(true);
      // Simulate network delay for loading effect (demo only)
      await new Promise(resolve => setTimeout(resolve, 1500));
      setGoals([
        { id: 1, title: 'Conquer React Hooks', level: 'Intermediate', progress: 75, icon: <FiZap className="text-yellow-400" />, color: 'bg-yellow-400', dueDate: '2024-02-10' },
        { id: 2, title: 'Master Advanced CSS', level: 'Advanced', progress: 40, icon: <FiAward className="text-purple-400" />, color: 'bg-purple-400', dueDate: '2024-02-15' },
        { id: 3, title: 'Explore Backend with Node.js', level: 'Beginner', progress: 15, icon: <FiBookOpen className="text-blue-400" />, color: 'bg-blue-400', dueDate: '2024-02-20' },
      ]);
      // Example: To change user avatar, update user state here
      setIsLoading(false);
    };
    fetchDashboardData();
  }, []);

  // Stats, resources, and quotes are mock data for demonstration
  const stats = {
    totalGoals: goals.length,
    completedGoals: goals.filter(g => g.progress === 100).length,
    streak: 7, // Example streak value
    totalHours: 42,
    weeklyProgress: 85
  };
  const recommendedResources = [
    {
      title: 'React Official Docs',
      url: 'https://reactjs.org/docs/getting-started.html',
      type: 'Article',
      icon: <FiBookOpen className="text-indigo-400" />,
      rating: 4.8
    },
    {
      title: 'CSS Tricks: Flexbox Guide',
      url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      type: 'Article',
      icon: <FiAward className="text-pink-400" />,
      rating: 4.9
    },
    {
      title: 'JavaScript 30 (Hands-on)',
      url: 'https://javascript30.com/',
      type: 'Project',
      icon: <FiZap className="text-yellow-400" />,
      rating: 4.7
    },
  ];
  const motivationalQuotes = [
    'Learning never exhausts the mind. – Leonardo da Vinci',
    'The beautiful thing about learning is nobody can take it away from you. – B.B. King',
    'Success is the sum of small efforts, repeated day in and day out. – Robert Collier',
    'The expert in anything was once a beginner. – Helen Hayes',
  ];
  const quote = motivationalQuotes[new Date().getDate() % motivationalQuotes.length];

  // Confetti effect logic (not currently used)
  // const handleGoalCompletion = () => {
  //   setShowConfetti(true);
  //   setTimeout(() => setShowConfetti(false), 4000); // Hide confetti after 4 seconds
  // };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4 text-white">
        <div className="relative">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-purple-500"></div>
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/20 animate-ping"></div>
        </div>
        <p className="mt-6 text-xl font-semibold animate-pulse">Loading your epic dashboard...</p>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Epic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]" />
      
      {/* Animated Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-float blur-xl" style={{animationDelay: '0s'}} />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-float blur-xl" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-float blur-lg" style={{animationDelay: '4s'}} />

      {showConfetti && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className="absolute text-4xl animate-ping">🎉</div>
          <div className="absolute text-4xl animate-ping delay-200">🎊</div>
          <div className="absolute text-4xl animate-ping delay-500">✨</div>
        </div>
      )}

      {/* Header with 3D Effect */}
      <header className="relative mb-10 p-6">
        <div 
          className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform transition-transform duration-300 hover:scale-105"
          style={{
            transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.005}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.005}deg)`,
          }}
        >
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-lg opacity-60 animate-pulse" />
              <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full border-4 border-purple-500 shadow-xl relative z-10 ring-4 ring-white/60 ring-offset-4 ring-offset-indigo-200 animate-float" />
            </div>
            <div className="ml-4">
              <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">Welcome back, {user.name}!</h1>
              <p className="text-slate-300">Let's make some epic progress today.</p>
            </div>
          </div>
          <nav className="flex space-x-4">
            <Link
              to="/"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-xl text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <FiHome className="mr-2" /> Home
            </Link>
            <Link
              to="/profile"
              className="flex items-center px-4 py-2 text-sm font-medium rounded-xl text-slate-300 hover:bg-slate-700/50 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <FiUser className="mr-2" /> Profile
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6">
        {/* Learning Stats Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-8 flex items-center">
            <span className="mr-3">📊</span> Your Learning Stats
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-fadeInUp hover:scale-105 transition-all duration-300">
              <FiTarget className="text-4xl text-indigo-400 mb-3" />
              <div className="text-3xl font-bold">{stats.totalGoals}</div>
              <div className="text-slate-300 text-sm">Total Goals</div>
            </div>
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-fadeInUp hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <FiAward className="text-4xl text-pink-400 mb-3" />
              <div className="text-3xl font-bold">{stats.completedGoals}</div>
              <div className="text-slate-300 text-sm">Completed</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-fadeInUp hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <FiTrendingUp className="text-4xl text-yellow-400 mb-3" />
              <div className="text-3xl font-bold">{stats.streak} days</div>
              <div className="text-slate-300 text-sm">Streak</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-fadeInUp hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.3s' }}>
              <FiClock className="text-4xl text-green-400 mb-3" />
              <div className="text-3xl font-bold">{stats.totalHours}h</div>
              <div className="text-slate-300 text-sm">Total Hours</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/20 animate-fadeInUp hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.4s' }}>
              <FiBarChart2 className="text-4xl text-cyan-400 mb-3" />
              <div className="text-3xl font-bold">{stats.weeklyProgress}%</div>
              <div className="text-slate-300 text-sm">Weekly Progress</div>
            </div>
          </div>
        </section>

        {/* Motivational Quote Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 text-center border border-white/20 animate-fadeInUp">
            <h3 className="text-2xl font-bold text-white mb-3">💫 Motivation for Today</h3>
            <p className="text-xl text-slate-200 italic">"{quote}"</p>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Learning Goals Section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300 mb-4 sm:mb-0 flex items-center">
                <span className="mr-3">🎯</span> Your Learning Quests
              </h2>
              <Link
                to="/new-goal"
                className="flex items-center px-6 py-3 font-bold rounded-xl text-white bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
              >
                <FiPlusCircle className="mr-2" /> Start New Quest
              </Link>
            </div>

            {goals.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.map((goal, index) => (
                  <Link 
                    to={`/path/${goal.id}`} 
                    key={goal.id} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-lg shadow-2xl rounded-2xl p-6 hover:bg-slate-700/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl border border-white/10 animate-fadeInUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{goal.icon || <FiTarget />}</span>
                      <div className="flex flex-col items-end">
                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${goal.color ? goal.color.replace('bg-', 'text-') + ' bg-opacity-20' : 'bg-slate-700 text-slate-300'}`}>
                          {goal.level}
                        </span>
                        <span className="text-xs text-slate-400 mt-1">Due: {goal.dueDate}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-white transition-colors">{goal.title}</h3>
                    <p className="text-sm text-slate-400 mb-4">Progress: {goal.progress}%</p>
                    <div className="w-full bg-slate-700 rounded-full h-3 mb-2 overflow-hidden">
                      <div className={`${goal.color || 'bg-purple-500'} h-3 rounded-full transition-all duration-500 ease-out relative`} style={{ width: `${goal.progress}%` }}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </div>
                    </div>
                    <div className="text-right text-xs text-slate-500">
                      {goal.progress === 100 ? '🎉 Completed!' : `${100 - goal.progress}% to go`}
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10">
                <FiTarget size={80} className="mx-auto text-purple-400 mb-6 animate-bounce" />
                <h3 className="text-3xl font-bold text-slate-100 mb-3">No Quests Yet!</h3>
                <p className="text-slate-400 mb-8 max-w-md mx-auto">Ready to embark on an epic learning journey?</p>
                <Link
                  to="/new-goal"
                  className="inline-flex items-center px-8 py-4 font-bold rounded-xl text-white bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FiPlusCircle className="mr-2" /> Create Your First Quest
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">🏆</span> Achievements
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <div 
                    key={achievement.name}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                      achievement.unlocked 
                        ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-400/50' 
                        : 'bg-slate-700/50 border-slate-600 opacity-50'
                    }`}
                  >
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className={`text-xs font-semibold ${
                      achievement.unlocked ? 'text-white' : 'text-slate-400'
                    }`}>
                      {achievement.name}
                    </div>
                    {achievement.unlocked && (
                      <div className="text-xs text-green-400 font-medium mt-1">✓ Unlocked</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">📈</span> Recent Activity
              </h3>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center p-3 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors">
                    <span className="text-xl mr-3">{activity.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-white">{activity.title}</div>
                      <div className="text-xs text-slate-400">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Goals */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="mr-2">📅</span> Upcoming Goals
              </h3>
              <div className="space-y-3">
                {upcomingGoals.map((goal, index) => (
                  <div key={index} className="p-3 bg-slate-700/30 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-sm font-medium text-white">{goal.title}</div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        goal.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                        goal.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {goal.priority}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">Due: {goal.dueDate}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-8 flex items-center">
            <span className="mr-3">⚡</span> Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-lg shadow-2xl rounded-2xl p-6 hover:bg-slate-700/70 transition-all duration-300 transform hover:-translate-y-1 border border-white/10">
              <div className="flex items-center text-sky-400 mb-3">
                <FiTrendingUp size={28} className="mr-3" />
                <h4 className="text-xl font-bold">Continue Your Journey</h4>
              </div>
              <p className="text-slate-300 mb-5">
                {goals.length > 0 ? `Jump back into "${goals[0].title}".` : 'Start a new quest to see your progress here.'}
              </p>
              <Link
                to={goals.length > 0 ? `/path/${goals[0].id}` : '/new-goal'}
                className={`inline-flex items-center px-6 py-3 font-bold rounded-xl text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  goals.length > 0 ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700' : 'bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-600 hover:to-pink-600'
                }`}
              >
                {goals.length > 0 ? <FiBookOpen className="mr-2" /> : <FiPlusCircle className="mr-2" />}
                {goals.length > 0 ? 'Resume Quest' : 'Start First Quest'}
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-lg shadow-2xl rounded-2xl p-6 hover:bg-slate-700/70 transition-all duration-300 transform hover:-translate-y-1 border border-white/10">
              <div className="flex items-center text-pink-400 mb-3">
                <FiEdit3 size={28} className="mr-3" />
                <h4 className="text-xl font-bold">Customize Your Path</h4>
              </div>
              <p className="text-slate-300 mb-5">
                Tailor your learning experience by fine-tuning your profile and preferences.
              </p>
              <Link
                to="/profile"
                className="inline-flex items-center px-6 py-3 font-bold rounded-xl text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <FiUser className="mr-2" /> Update Profile
              </Link>
            </div>
          </div>
        </section>

        {/* Recommended Resources Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400 mb-8 flex items-center">
            <span className="mr-3">📚</span> Recommended Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedResources.map((res, idx) => (
              <a
                key={res.title}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-lg shadow-2xl rounded-2xl p-6 hover:bg-slate-700/70 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-3xl border border-white/10 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  {res.icon}
                  <div className="flex items-center text-yellow-400">
                    <FiStar className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm font-bold">{res.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-white transition-colors">{res.title}</h3>
                <div className="text-slate-400 text-sm mb-3">{res.type}</div>
                <div className="text-indigo-300 text-sm font-medium group-hover:text-indigo-200 transition-colors">Visit Resource →</div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;