import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Updated FeatureIcon with more distinct icons
const Icon = ({ path, className = "h-8 w-8 text-indigo-500" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const features = [
    {
      title: "Personalized Learning Paths",
      description: "Define your goals, and we'll generate a step-by-step curriculum tailored to your knowledge level and learning style.",
      iconPath: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", // Desktop screen with lines
    },
    {
      title: "Curated High-Quality Resources",
      description: "Access a library of videos, articles, and hands-on projects, all vetted for quality and relevance.",
      iconPath: "M12 6.253v11.494m0-11.494C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v11.494C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-11.494C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v11.494C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", // Open book
    },
    {
      title: "Track Your Progress",
      description: "Stay motivated by visualizing your learning journey and marking steps as complete as you master new concepts.",
      iconPath: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", // Bar chart
    }
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: "Define Your Goal",
      description: "Tell us what you want to learn, your current skill level, and how you prefer to study.",
      iconPath: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z", // Pencil/Edit icon
    },
    {
      step: 2,
      title: "Get Your Personalized Path",
      description: "Our system instantly generates a structured learning path with clear stages and milestones.",
      iconPath: "M17.657 18.657l-2.829-2.828m0 0a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243zm-1.414-1.414L17.657 16l-4.243 4.243M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", // Lightbulb/Idea icon
    },
    {
      step: 3,
      title: "Learn & Track Progress",
      description: "Follow the curated resources, complete tasks, and see your knowledge grow in real-time.",
      iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", // Progress/Stats icon
    }
  ];

  const testimonials = [
    {
      quote: "SmartCurricula transformed how I approach learning. The personalized path made all the difference!",
      name: "Alex P.",
      role: "Software Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg" // Placeholder avatar
    },
    {
      quote: "Finally, a tool that understands my learning preferences. I'm making progress faster than ever before.",
      name: "Sarah K.",
      role: "UX Designer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg" // Placeholder avatar
    },
    {
      quote: "The curated resources are top-notch. It saved me hours of searching for quality content.",
      name: "Mike B.",
      role: "Data Scientist",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg" // Placeholder avatar
    }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-indigo-50 to-gray-100 text-gray-800 overflow-x-hidden">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="text-3xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
                SmartCurricula
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/#features" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Features
              </a>
              <a href="/#how-it-works" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                How It Works
              </a>
              <a href="/#testimonials" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Testimonials
              </a>
              <Link
                to="/login"
                className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="ml-2 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform hover:scale-105"
              >
                Sign Up
              </Link>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <Icon path="M6 18L18 6M6 6l12 12" className="block h-6 w-6" /> // Close icon
                ) : (
                  <Icon path="M4 6h16M4 12h16M4 18h16" className="block h-6 w-6" /> // Hamburger icon
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu, show/hide based on menu state. */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 inset-x-0 z-40 transform origin-top shadow-lg" id="mobile-menu">
            <div className="rounded-b-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                <a href="/#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a>
                <a href="/#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
                <Link to="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
              </div>
              <Link
                to="/signup"
                className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
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
        <section className="relative py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              Unlock Your <span className="text-indigo-400">Learning Potential</span>.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-indigo-100">
              SmartCurricula crafts personalized learning paths to help you achieve your goals faster. Stop wondering what to learn next – start your journey with a clear, curated roadmap.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                to="/new-goal"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg hover:shadow-xl transform transition-all hover:scale-105 duration-300 ease-in-out md:text-lg md:px-10"
              >
                Create Your Path
              </Link>
              <Link
                to="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-xl text-white bg-transparent hover:bg-white hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black/50 focus:ring-white shadow-md hover:shadow-lg transform transition-all hover:scale-105 duration-300 ease-in-out md:text-lg md:px-10"
              >
                View Dashboard
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Everything You Need to Succeed
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                    <Icon path={feature.iconPath} className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-base text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Process</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Start Learning in 3 Simple Steps
              </p>
            </div>
            <div className="relative">
              {/* Connecting line (for larger screens) */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2" style={{top: 'calc(50% - 2rem)'}}></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-0 relative">
                {howItWorksSteps.map((item, index) => (
                  <div key={item.step} className="flex flex-col items-center text-center p-4">
                    <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-indigo-600 text-white mb-6 shadow-lg border-4 border-white">
                      <Icon path={item.iconPath} className="h-10 w-10 text-white" />
                      <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-white text-sm font-bold">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-base text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Loved by Learners Worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-8 bg-white rounded-xl shadow-lg flex flex-col">
                  <div className="flex-shrink-0">
                    <Icon path="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className="h-10 w-10 text-indigo-200" /> {/* Quotation mark icon */}
                  </div>
                  <blockquote className="mt-4 flex-grow">
                    <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
                  </blockquote>
                  <footer className="mt-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img className="h-12 w-12 rounded-full object-cover" src={testimonial.avatar} alt={testimonial.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-base font-medium text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </footer>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-indigo-700">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Start Your Learning Adventure?
            </h2>
            <p className="mt-4 text-lg text-indigo-200">
              Join SmartCurricula today and take the first step towards mastering new skills with a clear, guided path.
            </p>
            <div className="mt-10">
              <Link
                to="/new-goal"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-indigo-700 bg-white hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white shadow-lg hover:shadow-xl transform transition-all hover:scale-105 duration-300 ease-in-out"
              >
                Get Started for Free
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">SmartCurricula</h3>
              <p className="text-sm">Your partner in personalized learning and skill development.</p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="/#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} SmartCurricula. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;