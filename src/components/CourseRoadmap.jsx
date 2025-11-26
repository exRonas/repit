import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';

const CourseRoadmap = () => {
  const { trackId } = useParams();
  const track = coursesData.tracks.find(t => t.id === trackId) || coursesData.tracks[0];
  const [expandedLevel, setExpandedLevel] = useState('trainee');

  if (!track) return <div className="text-white p-10">Track not found</div>;

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white font-sans relative overflow-hidden selection:bg-qore-orange/30">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E1B4B] via-[#0B0F19] to-[#000000] opacity-80"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 line-grid opacity-20 pointer-events-none"></div>
      
      {/* Scanning Beam */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-full h-full bg-[linear-gradient(to_bottom,transparent,rgba(139,92,246,0.06)_50%,transparent)] animate-scan-vertical"></div>
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-qore-orange/5 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>

      <div className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-8 text-gray-400 hover:text-white transition font-medium text-sm group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span> На главную
          </Link>
          
          <div className="mb-8">
            <div className="inline-block px-3 py-1 mb-4 border border-qore-orange/50 rounded-full text-qore-orange text-xs font-mono uppercase tracking-wide bg-qore-orange/10">
              Образовательный трек
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-4">
              {track.title}
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              {track.description}
            </p>
          </div>
        </div>

        {/* Tech Tree */}
        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 transform md:-translate-x-1/2 z-0"></div>

          <div className="space-y-8">
            {track.levels.map((level, index) => (
              <div 
                key={level.id} 
                className={`relative z-10 animate-fade-in-up ${level.locked ? 'opacity-60 grayscale' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                
                {/* Level Node */}
                <div 
                  className={`
                    group relative flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl border transition-all duration-300 cursor-pointer bg-qore-dark
                    hover:translate-y-[-2px] hover:shadow-xl
                    ${level.id === expandedLevel && !level.locked 
                      ? 'border-qore-orange shadow-[0_0_30px_rgba(245,158,11,0.1)]' 
                      : 'border-gray-800 hover:border-gray-600'}
                  `}
                  onClick={() => !level.locked && setExpandedLevel(level.id === expandedLevel ? null : level.id)}
                >
                  {/* Level Number */}
                  <div className={`
                    w-12 h-12 flex items-center justify-center rounded-xl font-heading text-xl font-bold border
                    ${level.locked 
                      ? 'bg-gray-900 border-gray-800 text-gray-600' 
                      : 'bg-qore-orange/10 border-qore-orange text-qore-orange'}
                  `}>
                    {level.locked ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="font-mono text-xs text-gray-500 mb-1 uppercase tracking-widest">
                      Уровень {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white">{level.subtitle}</h3>
                  </div>

                  {/* Status Indicator */}
                  <div className="hidden md:block">
                    {level.locked ? (
                      <span className="px-3 py-1 rounded-full bg-gray-900 text-gray-600 text-xs font-bold border border-gray-800">ЗАКРЫТО</span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-qore-orange/10 text-qore-orange text-xs font-bold border border-qore-orange/20">ДОСТУПНО</span>
                    )}
                  </div>
                </div>

                {/* Expanded Content (Courses) */}
                {expandedLevel === level.id && !level.locked && (
                  <div className="mt-4 ml-4 md:ml-20 space-y-4 animate-fade-in-down">
                    {level.courses.map(course => (
                      <div key={course.id} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-qore-orange/50 transition group">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-white group-hover:text-qore-orange transition">{course.title}</h4>
                            <p className="text-sm text-gray-400 mt-1 leading-relaxed">{course.description}</p>
                          </div>
                          <Link 
                            to={`/lesson/${course.modules[0].lessons[0].id}`}
                            className="bg-white text-qore-black px-5 py-2 rounded-lg text-sm font-bold hover:bg-qore-orange hover:text-white transition shadow-lg whitespace-nowrap"
                          >
                            Начать урок
                          </Link>
                        </div>

                        {/* Modules List */}
                        <div className="space-y-2 pt-4 border-t border-gray-800">
                          {course.modules.map(module => (
                            <div key={module.id} className="flex items-center text-sm text-gray-500">
                              <div className="w-1.5 h-1.5 bg-gray-700 rounded-full mr-3"></div>
                              <span className="font-medium text-gray-400 mr-2">{module.title}</span>
                              <span className="text-gray-600 text-xs">• {module.lessons.length} уроков</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRoadmap;
