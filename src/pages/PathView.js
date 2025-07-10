import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiPlay, FiClock, FiBook, FiVideo, FiCode, FiArrowLeft } from 'react-icons/fi';

function PathView() {
  const [completedSteps, setCompletedSteps] = useState(new Set([1, 2]));
  const [hoveredStep, setHoveredStep] = useState(null);
  const timelineRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mock data representing a learning path for demonstration
  const path = {
    title: 'React Learning Odyssey',
    level: 'Beginner',
    progress: 30,
    stages: [
      {
        title: 'Stage 1: The Basics',
        steps: [
          {
            id: 1,
            title: 'Introduction to React',
            description: 'Forge your understanding of React\'s fundamental principles and core architecture.',
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
            description: 'Ignite your development environment and launch your very first React application.',
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
        title: 'Stage 2: Core Concepts',
        steps: [
          {
            id: 3,
            title: 'React Components and Props',
            description: 'Master the art of building reusable components and passing data through props.',
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
            description: 'Learn to control component behavior with state and harness lifecycle methods.',
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
        title: 'Stage 3: Projects',
        steps: [
          {
            id: 5,
            title: 'Build a Todo App',
            description: 'Apply your knowledge to construct a fully functional todo application from scratch.',
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

  // Calculate progress
  const totalSteps = path.stages.reduce((acc, stage) => acc + stage.steps.length, 0);
  const completedCount = completedSteps.size;
  const progressPercentage = (completedCount / totalSteps) * 100;

  // Mouse tracking for 3D effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const handleMarkComplete = (stepId) => {
    setCompletedSteps(prev => new Set([...prev, stepId]));
  };

  const getResourceIcon = (type) => {
    switch (type) {
      case 'video': return <FiVideo className="text-pink-400" />;
      case 'article': return <FiBook className="text-blue-400" />;
      case 'project': return <FiCode className="text-green-400" />;
      default: return <FiBook className="text-blue-400" />;
    }
  };

  const isStageUnlocked = (stageIndex) => {
    if (stageIndex === 0) return true;
    
    const prevStage = path.stages[stageIndex - 1];
    const prevStageSteps = prevStage.steps.map(step => step.id);
    return prevStageSteps.every(stepId => completedSteps.has(stepId));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Aurora Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(67,97,255,0.3)_0%,rgba(67,97,255,0)_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,245,212,0.3)_0%,rgba(0,245,212,0)_25%)]" />
      
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
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20 animate-timeline-float blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-timeline-float blur-xl" style={{animationDelay: '2s'}} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-timeline-float blur-lg" style={{animationDelay: '4s'}} />

      {/* Header */}
      <header className="relative mb-10 p-6">
        <div 
          className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 transform transition-transform duration-300 hover:scale-105"
          style={{
            transform: `perspective(1000px) rotateX(${(mousePosition.y - window.innerHeight / 2) * 0.005}deg) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.005}deg)`,
          }}
        >
          <div className="flex items-center mb-4 sm:mb-0">
            <Link
              to="/dashboard"
              className="mr-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
            >
              <FiArrowLeft className="text-2xl" />
            </Link>
            <div>
              <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400">
                {path.title}
              </h1>
              <p className="text-slate-300">Embark on an epic learning journey</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {Math.round(progressPercentage)}%
            </div>
            <div className="text-slate-300 text-sm">Complete</div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* Progress Section */}
        <section className="mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Overall Mission Progress</h2>
              <span className="text-slate-300 font-medium">{Math.round(progressPercentage)}% Complete</span>
            </div>
            <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: `${progressPercentage}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Container */}
        <div className="relative" ref={timelineRef}>
          {/* Timeline Progress Line */}
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out z-10"
            style={{ 
              height: `${Math.max(progressPercentage * 2, 100)}px`,
              boxShadow: '0 0 20px rgba(67, 97, 255, 0.5)'
            }}
          />
          
          {/* Main Timeline Line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-white/10" />

          {path.stages.map((stage, stageIndex) => (
            <div 
              key={stageIndex} 
              className={`stage-group mb-16 ${!isStageUnlocked(stageIndex) ? 'stage-locked' : ''}`}
            >
              {/* Stage Header */}
              <div className="text-center mb-8">
                <h3 className={`inline-block px-8 py-3 text-xl font-bold rounded-full backdrop-blur-lg border transition-all duration-300 ${
                  isStageUnlocked(stageIndex) 
                    ? 'bg-white/10 border-white/20 text-white shadow-lg' 
                    : 'bg-white/5 border-white/10 text-slate-400'
                }`}>
                  {stage.title}
                </h3>
              </div>

              {/* Timeline Items */}
              {stage.steps.map((step, stepIndex) => {
                const isCompleted = completedSteps.has(step.id);
                const isLocked = !isStageUnlocked(stageIndex);
                
                return (
                  <div
                    key={step.id}
                    className={`timeline-item relative mb-12 w-1/2 ${
                      stepIndex % 2 === 0 ? 'left-0 pr-12' : 'left-1/2 pl-12'
                    } ${isCompleted ? 'completed' : ''} ${isLocked ? 'opacity-50 blur-sm' : ''}`}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute top-6 w-5 h-5 rounded-full border-4 transition-all duration-300 ${
                      stepIndex % 2 === 0 ? '-right-2.5' : '-left-2.5'
                    } ${
                      isCompleted 
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400 border-cyan-400 shadow-lg shadow-cyan-400/50' 
                        : 'bg-slate-900 border-indigo-400'
                    }`}>
                      {isCompleted && (
                        <FiCheck className="w-full h-full text-white p-0.5" />
                      )}
                    </div>

                    {/* Lesson Card */}
                    <div className={`lesson-card p-6 rounded-2xl backdrop-blur-lg border transition-all duration-300 transform hover:scale-105 ${
                      isCompleted 
                        ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-400/30 shadow-lg shadow-green-400/20' 
                        : 'bg-white/10 border-white/20 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-400/20'
                    } ${hoveredStep === step.id ? 'scale-105' : ''}`}>
                      
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-white">{step.title}</h4>
                        <div className="flex items-center space-x-2">
                          {getResourceIcon(step.resource.type)}
                          <span className="text-sm text-slate-300">{step.resource.type}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-300 mb-6 leading-relaxed">{step.description}</p>

                      {/* Resource Info */}
                      <div className="border-t border-white/10 pt-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4 text-sm text-slate-400">
                            <div className="flex items-center space-x-1">
                              <FiClock className="w-4 h-4" />
                              <span>{step.resource.estimatedTime} min</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FiBook className="w-4 h-4" />
                              <span>{step.resource.title}</span>
                            </div>
                          </div>
                          
                          <div className="flex space-x-2">
                            <a
                              href={step.resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                            >
                              <FiPlay className="inline w-4 h-4 mr-1" />
                              Start
                            </a>
                            
                            {!isCompleted && !isLocked && (
                              <button
                                onClick={() => handleMarkComplete(step.id)}
                                className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                              >
                                <FiCheck className="inline w-4 h-4 mr-1" />
                                Complete
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default PathView;