import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiZap, FiTarget, FiTrendingUp, FiBook, FiPlay, FiArrowRight, FiStar, FiUsers, FiAward, FiCheckCircle, FiMenu, FiX } from 'react-icons/fi';

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      title: "Personalized Learning Paths",
      description: "Define your goals, and we'll generate a step-by-step curriculum tailored to your knowledge level and learning style.",
      icon: <FiTarget className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Curated High-Quality Resources",
      description: "Access a library of videos, articles, and hands-on projects, all vetted for quality and relevance.",
      icon: <FiBook className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Track Your Progress",
      description: "Stay motivated by visualizing your learning journey and marking steps as complete as you master new concepts.",
      icon: <FiTrendingUp className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Define Your Goal",
      description: "Tell us what you want to learn, your current skill level, and how you prefer to study.",
      icon: <FiTarget className="w-10 h-10" />,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      step: 2,
      title: "Get Your Personalized Path",
      description: "Our system instantly generates a structured learning path with clear stages and milestones.",
      icon: <FiZap className="w-10 h-10" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      step: 3,
      title: "Learn & Track Progress",
      description: "Follow the curated resources, complete tasks, and see your knowledge grow in real-time.",
      icon: <FiTrendingUp className="w-10 h-10" />,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const testimonials = [
    {
      quote: "SmartCurricula transformed how I approach learning. The personalized path made all the difference!",
      name: "Alex P.",
      role: "Software Developer",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Finally, a tool that understands my learning preferences. I'm making progress faster than ever before.",
      name: "Sarah K.",
      role: "UX Designer",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The curated resources are top-notch. It saved me hours of searching for quality content.",
      name: "Mike B.",
      role: "Data Scientist",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/36.jpg"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Learners", icon: <FiUsers className="w-6 h-6" /> },
    { number: "500+", label: "Learning Paths", icon: <FiTarget className="w-6 h-6" /> },
    { number: "95%", label: "Success Rate", icon: <FiAward className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <FiCheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(67,97,255,0.3)_0%,rgba(67,97,255,0)_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,245,212,0.3)_0%,rgba(0,245,212,0)_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,119,198,0.2)_0%,rgba(255,119,198,0)_25%)]" />
      
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
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-timeline-float blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-timeline-float blur-xl" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-timeline-float blur-lg" style={{animationDelay: '4s'}} />

      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link 
                to="/" 
                className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 hover:scale-105 transition-transform duration-300"
              >
                SmartCurricula
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#features" className="text-slate-300 hover:text-white px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10">
                How It Works
              </a>
              <a href="#testimonials" className="text-slate-300 hover:text-white px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10">
                Testimonials
              </a>
              <Link
                to="/login"
                className="text-slate-300 hover:text-white px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="ml-2 inline-flex items-center justify-center px-6 py-2 border border-transparent rounded-xl text-sm font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-300"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <FiX className="block h-6 w-6" />
                ) : (
                  <FiMenu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 inset-x-0 z-40 transform origin-top shadow-lg" id="mobile-menu">
            <div className="rounded-b-2xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#features" className="block px-3 py-2 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                <a href="#how-it-works" className="block px-3 py-2 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
                <a href="#testimonials" className="block px-3 py-2 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
                <Link to="/login" className="block px-3 py-2 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-300" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
              </div>
              <Link
                to="/signup"
                className="block w-full px-5 py-3 text-center font-medium text-white bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div 
            className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            style={{
              transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.005}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.005}deg)`,
            }}
          >
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm font-medium text-slate-300 mb-6 animate-fadeInUp">
                <FiStar className="w-4 h-4 mr-2 text-yellow-400" />
                Trusted by 10,000+ learners worldwide
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-8 animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              Unlock Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 animate-pulse">
                Learning Potential
              </span>
            </h1>
            
            <p className="mt-6 max-w-3xl mx-auto text-xl sm:text-2xl text-slate-300 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              SmartCurricula crafts personalized learning paths to help you achieve your goals faster. Stop wondering what to learn next – start your journey with a clear, curated roadmap.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <Link
                to="/new-goal"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-purple-500 shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105 duration-300 ease-in-out"
              >
                <FiZap className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Create Your Path
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/dashboard"
                className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-lg font-bold rounded-2xl text-white bg-white/10 backdrop-blur-lg hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 duration-300 ease-in-out"
              >
                <FiPlay className="mr-2" />
                View Dashboard
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 animate-fadeInUp"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm font-medium text-slate-300 mb-6">
                <FiStar className="w-4 h-4 mr-2 text-yellow-400" />
                Features
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Everything You Need to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Succeed
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Powerful tools designed to accelerate your learning journey and help you achieve your goals faster.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={feature.title} 
                  className="group p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fadeInUp"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className={`flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm font-medium text-slate-300 mb-6">
                <FiZap className="w-4 h-4 mr-2 text-yellow-400" />
                Process
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Start Learning in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  3 Simple Steps
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Our streamlined process makes it easy to get started and stay motivated throughout your journey.
              </p>
            </div>
            
            <div className="relative">
              {/* Connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-indigo-500/50 transform -translate-y-1/2 rounded-full" />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {howItWorksSteps.map((item, index) => (
                  <div 
                    key={item.step} 
                    className="flex flex-col items-center text-center p-6 animate-fadeInUp"
                    style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  >
                    <div className={`relative flex items-center justify-center h-24 w-24 rounded-2xl bg-gradient-to-r ${item.gradient} mb-8 shadow-2xl border-4 border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {item.icon}
                      </div>
                      <div className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900 text-sm font-black shadow-lg">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-sm font-medium text-slate-300 mb-6">
                <FiUsers className="w-4 h-4 mr-2 text-yellow-400" />
                Testimonials
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Loved by{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Learners Worldwide
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Join thousands of satisfied learners who have transformed their skills with SmartCurricula.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="group p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fadeInUp"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mb-6">
                    <p className="text-lg text-slate-200 italic leading-relaxed">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="flex items-center">
                    <img className="h-12 w-12 rounded-full object-cover border-2 border-white/20" src={testimonial.avatar} alt={testimonial.name} />
                    <div className="ml-4">
                      <div className="text-lg font-bold text-white">{testimonial.name}</div>
                      <div className="text-slate-400">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="p-12 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-indigo-500/20 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Start Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Learning Adventure?
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                Join SmartCurricula today and take the first step towards mastering new skills with a clear, guided path.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/new-goal"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-2xl text-white bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-purple-500 shadow-2xl hover:shadow-3xl transform transition-all hover:scale-105 duration-300 ease-in-out"
                >
                  <FiZap className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Get Started for Free
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/signup"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-lg font-bold rounded-2xl text-white bg-white/10 backdrop-blur-lg hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white shadow-xl hover:shadow-2xl transform transition-all hover:scale-105 duration-300 ease-in-out"
                >
                  <FiUsers className="mr-2" />
                  Join Community
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">SmartCurricula</h3>
              <p className="text-slate-400">Your partner in personalized learning and skill development.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#features" className="hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors duration-300">How It Works</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors duration-300">Testimonials</a></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors duration-300">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} SmartCurricula. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;