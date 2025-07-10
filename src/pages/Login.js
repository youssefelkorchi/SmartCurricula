import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiLock, FiArrowRight, FiEye, FiEyeOff, FiZap, FiStar } from 'react-icons/fi';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Simulate loading for demo
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    navigate('/dashboard');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(67,97,255,0.3)_0%,rgba(67,97,255,0)_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,245,212,0.3)_0%,rgba(0,245,212,0)_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,119,198,0.2)_0%,rgba(255,119,198,0)_25%)]" />
      
      {/* Animated Particles */}
      {[...Array(25)].map((_, i) => (
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
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-timeline-float blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-timeline-float blur-xl" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-timeline-float blur-lg" style={{animationDelay: '4s'}} />

      {/* Back to Home Link */}
      <div className="absolute top-6 left-6 z-10">
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
        >
          <FiArrowRight className="w-4 h-4 mr-2 rotate-180" />
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="relative flex items-center justify-center min-h-screen px-4">
        <div 
          className="relative w-full max-w-md"
          style={{
            transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.005}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.005}deg)`,
          }}
        >
          {/* Epic Card */}
          <div className="relative bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-white/20 animate-fadeInUp">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg animate-float">
                <FiUser className="text-white text-3xl" />
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm font-medium text-slate-300 mb-4">
                <FiStar className="w-4 h-4 mr-2 text-yellow-400" />
                Welcome back to SmartCurricula
              </div>
              <h1 className="text-4xl font-black text-white mb-2">
                Sign In
              </h1>
              <p className="text-slate-300 text-lg">
                Continue your learning journey
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiMail className="text-slate-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                </div>
                <input
                  type="email"
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-white/40"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Field */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiLock className="text-slate-400 group-focus-within:text-purple-400 transition-colors duration-300" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 group-hover:border-white/40"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors duration-300"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FiEyeOff className="w-5 h-5" /> : <FiEye className="w-5 h-5" />}
                </button>
              </div>

              {/* Error Message */}
              {error && (
                <div className="p-4 bg-red-500/20 backdrop-blur-lg border border-red-500/30 rounded-xl text-red-300 text-sm animate-fadeInUp">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isLoading}
                className="group w-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-500/50 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <FiZap className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                    Sign In
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-slate-400">or</span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-slate-300 text-sm">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold hover:from-purple-300 hover:to-pink-300 transition-all duration-300"
                >
                  Create one now
                </Link>
              </p>
            </div>
          </div>

          {/* Floating Elements Around Card */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '2s'}} />
        </div>
      </div>
    </div>
  );
}

export default Login; 