import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import avatarImg from '../assets/avatar.png';

function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    preferences: {
      learningStyle: 'video',
      pacePreference: 'moderate',
      difficulty: 'intermediate'
    }
  });
  const [isEditing, setIsEditing] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [achievements] = useState([
    { name: 'First Goal', icon: '🎯', unlocked: true },
    { name: 'Week Warrior', icon: '🔥', unlocked: true },
    { name: 'Knowledge Seeker', icon: '📚', unlocked: false },
    { name: 'Master Learner', icon: '👑', unlocked: false }
  ]);
  
  const motivationalQuotes = [
    'Your learning journey is unique. Own it!',
    'Every day is a chance to grow.',
    'Small steps lead to big achievements.',
    'Stay curious, stay inspired.',
  ];
  const quote = motivationalQuotes[new Date().getDate() % motivationalQuotes.length];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setUser({
        ...user,
        [parent]: {
          ...user[parent],
          [child]: value
        }
      });
    } else {
      setUser({ ...user, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Saving user profile:', user);
    setIsEditing(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center py-8 px-2 overflow-hidden">
      {/* Epic Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.2),transparent_50%)]" />
      
      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
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
      
      {/* Main Card with 3D Effect */}
      <div 
        className="w-full max-w-4xl bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10 border border-white/40 animate-fadeInUp relative transform transition-transform duration-300 hover:scale-105"
        style={{
          transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.01}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.01}deg)`,
        }}
      >
        {/* Neon Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl -z-10" />
        
        {/* Motivational Quote with Animation */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-3 rounded-full shadow-2xl text-lg font-bold animate-fadeInUp z-20 border-2 border-white/20">
          <span className="animate-pulse">{quote}</span>
        </div>
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 mt-4">
          {/* Avatar with Multiple Effects */}
          <div className="relative mb-6 group">
            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse" />
            {/* Ring Effect */}
            <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-border animate-spin-slow" />
            {/* Avatar */}
            <img 
              src={avatarImg} 
              alt="User Avatar" 
              className="w-40 h-40 rounded-full border-4 border-white shadow-2xl relative z-10 ring-4 ring-white/60 ring-offset-4 ring-offset-indigo-200 animate-float group-hover:scale-110 transition-transform duration-300" 
            />
            {/* Level Badge */}
            <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-white shadow-lg animate-bounce">
              Level 5
            </div>
          </div>
          
          {/* Name and Title */}
          <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 mb-2 tracking-tight animate-fadeInUp">
            {user.name}
          </h1>
          <p className="text-xl text-gray-600 animate-fadeInUp font-medium">Learning Enthusiast</p>
          
          {/* Stats Bar */}
          <div className="mt-6 w-full max-w-md">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Experience</span>
              <span>75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-3 rounded-full animate-pulse" style={{width: '75%'}} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/dashboard"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-indigo-700 bg-indigo-100 hover:bg-indigo-200 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            ← Back to Dashboard
          </Link>
          
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse"
            >
              ✏️ Edit Profile
            </button>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-2">👤</span> Personal Info
            </h2>
            
            {isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    className="peer w-full px-4 py-4 border-2 border-indigo-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-400/50 bg-white/90 placeholder-transparent text-lg transition-all duration-300 group-hover:border-indigo-300"
                    placeholder="Full name"
                    required
                  />
                  <label className="absolute left-4 top-4 text-gray-500 text-base font-medium transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500 bg-white/90 px-2 rounded">Full name</label>
                </div>
                
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="peer w-full px-4 py-4 border-2 border-indigo-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-400/50 bg-white/90 placeholder-transparent text-lg transition-all duration-300 group-hover:border-indigo-300"
                    placeholder="Email address"
                    required
                  />
                  <label className="absolute left-4 top-4 text-gray-500 text-base font-medium transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500 bg-white/90 px-2 rounded">Email address</label>
                </div>
                
                <div className="relative group">
                  <select
                    name="preferences.learningStyle"
                    value={user.preferences.learningStyle}
                    onChange={handleChange}
                    className="peer w-full px-4 py-4 border-2 border-indigo-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-400/50 bg-white/90 text-lg transition-all duration-300 group-hover:border-indigo-300"
                    required
                  >
                    <option value="video">🎥 Videos</option>
                    <option value="article">📖 Articles</option>
                    <option value="handson">🔧 Hands-on</option>
                  </select>
                  <label className="absolute left-4 -top-6 text-sm text-indigo-500 bg-white/90 px-2 rounded font-medium">Learning Style</label>
                </div>
                
                <div className="relative group">
                  <select
                    name="preferences.pacePreference"
                    value={user.preferences.pacePreference}
                    onChange={handleChange}
                    className="peer w-full px-4 py-4 border-2 border-indigo-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-400/50 bg-white/90 text-lg transition-all duration-300 group-hover:border-indigo-300"
                    required
                  >
                    <option value="slow">🐌 Slow</option>
                    <option value="moderate">⚡ Moderate</option>
                    <option value="fast">🚀 Fast</option>
                  </select>
                  <label className="absolute left-4 -top-6 text-sm text-indigo-500 bg-white/90 px-2 rounded font-medium">Pace Preference</label>
                </div>
                
                <div className="relative group">
                  <select
                    name="preferences.difficulty"
                    value={user.preferences.difficulty}
                    onChange={handleChange}
                    className="peer w-full px-4 py-4 border-2 border-indigo-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-indigo-400/50 bg-white/90 text-lg transition-all duration-300 group-hover:border-indigo-300"
                    required
                  >
                    <option value="beginner">🌱 Beginner</option>
                    <option value="intermediate">🌿 Intermediate</option>
                    <option value="advanced">🌳 Advanced</option>
                  </select>
                  <label className="absolute left-4 -top-6 text-sm text-indigo-500 bg-white/90 px-2 rounded font-medium">Difficulty Preference</label>
                </div>
                
                <div className="flex justify-end space-x-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setIsEditing(false)}
                    className="inline-flex justify-center py-3 px-6 border border-gray-300 shadow-lg text-base font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 hover:scale-105"
                  >
                    ❌ Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-lg text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 hover:scale-105 animate-pulse"
                  >
                    💾 Save Changes
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100">
                  <label className="block text-gray-700 font-semibold mb-2">👤 Full name</label>
                  <div className="text-lg text-gray-900 font-medium">{user.name}</div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
                  <label className="block text-gray-700 font-semibold mb-2">📧 Email address</label>
                  <div className="text-lg text-gray-900 font-medium">{user.email}</div>
                </div>
                
                <div className="bg-gradient-to-r from-pink-50 to-indigo-50 p-4 rounded-xl border border-pink-100">
                  <label className="block text-gray-700 font-semibold mb-2">🎥 Learning Style</label>
                  <div className="text-lg text-gray-900 font-medium">
                    {user.preferences.learningStyle === 'video' && 'Videos'}
                    {user.preferences.learningStyle === 'article' && 'Articles'}
                    {user.preferences.learningStyle === 'handson' && 'Hands-on'}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-xl border border-indigo-100">
                  <label className="block text-gray-700 font-semibold mb-2">⚡ Pace Preference</label>
                  <div className="text-lg text-gray-900 font-medium">
                    {user.preferences.pacePreference === 'slow' && 'Slow'}
                    {user.preferences.pacePreference === 'moderate' && 'Moderate'}
                    {user.preferences.pacePreference === 'fast' && 'Fast'}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
                  <label className="block text-gray-700 font-semibold mb-2">🌿 Difficulty Preference</label>
                  <div className="text-lg text-gray-900 font-medium">
                    {user.preferences.difficulty === 'beginner' && 'Beginner'}
                    {user.preferences.difficulty === 'intermediate' && 'Intermediate'}
                    {user.preferences.difficulty === 'advanced' && 'Advanced'}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Achievements and Social */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-2">🏆</span> Achievements
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.name}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    achievement.unlocked 
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 shadow-lg' 
                      : 'bg-gray-50 border-gray-200 opacity-50'
                  }`}
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className={`text-sm font-semibold ${
                    achievement.unlocked ? 'text-gray-800' : 'text-gray-500'
                  }`}>
                    {achievement.name}
                  </div>
                  {achievement.unlocked && (
                    <div className="text-xs text-green-600 font-medium mt-1">✓ Unlocked</div>
                  )}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="mr-2">🌐</span> Connect
            </h2>
            
            <div className="space-y-3">
              <button className="w-full flex items-center p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="text-2xl mr-3">🐦</span>
                <span className="font-medium text-gray-800">Twitter</span>
              </button>
              <button className="w-full flex items-center p-3 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span className="text-2xl mr-3">💼</span>
                <span className="font-medium text-gray-800">LinkedIn</span>
              </button>
              <button className="w-full flex items-center p-3 bg-gradient-to-r from-purple-50 to-pink-100 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500">
                <span className="text-2xl mr-3">📷</span>
                <span className="font-medium text-gray-800">Instagram</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;