import React, { useState, useEffect } from 'react';

function App() {
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-qore-gray text-qore-black font-sans antialiased min-h-screen">
      {/* HEADER */}
      <header className="fixed w-full top-0 z-50 bg-qore-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <svg
              className="w-10 h-10 group-hover:rotate-180 transition-transform duration-700 ease-in-out"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 30 L50 15 L80 30 L80 70 L50 85 L20 70 Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M50 15 L50 50 M20 30 L50 50 M80 30 L50 50"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="6" className="fill-qore-orange" />
            </svg>
            <div className="text-2xl font-heading font-extrabold text-white tracking-tighter">
              QORE
            </div>
          </a>
          <nav className="hidden md:flex space-x-8 text-sm font-semibold text-gray-300">
            <a href="#about" className="hover:text-white transition">
              Философия
            </a>
            <a href="#courses" className="hover:text-white transition">
              Направления
            </a>
            <a href="#mentor" className="hover:text-white transition">
              Наставник
            </a>
          </nav>
          <a
            href="#contact"
            className="bg-white text-qore-black px-5 py-2 rounded-lg font-bold text-sm hover:bg-qore-orange hover:text-white transition duration-300"
          >
            Записаться
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-qore-black text-white pt-32 pb-20 relative overflow-hidden">
        {/* Декоративная сетка */}
        <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-block px-3 py-1 mb-6 border border-qore-orange/50 rounded-full text-qore-orange text-xs font-mono uppercase tracking-wide bg-qore-orange/10">
              Прием в STEM-академию открыт
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
              Инженерный фундамент <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-qore-orange">
                цифрового мира
              </span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Больше, чем просто курсы программирования. Математика, Физика,
              Инженерия и AI. Строим системное мышление для детей (10-17) и даем
              твердые навыки взрослым.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#courses"
                className="bg-qore-orange text-white px-8 py-4 rounded-xl font-bold text-center hover:bg-orange-600 transition shadow-lg shadow-orange-500/20"
              >
                Выбрать трек
              </a>
              <a
                href="#about"
                className="border border-gray-600 px-8 py-4 rounded-xl font-bold text-center hover:bg-gray-800 transition"
              >
                Наш метод
              </a>
            </div>
          </div>

          {/* Имитация интерфейса кода справа */}
          <div className="bg-qore-dark p-6 rounded-2xl border border-gray-700 shadow-2xl font-mono text-sm relative transform md:rotate-1 hover:rotate-0 transition duration-500">
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400">
              <span className="text-purple-400">class</span>{' '}
              <span className="text-yellow-400">Engineer</span>(
              <span className="text-blue-400">Human</span>): <br />
              &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
              <span className="text-blue-400">__init__</span>(self): <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">self</span>
              .stack = [<span className="text-green-400">"Math"</span>,{' '}
              <span className="text-green-400">"Physics"</span>,{' '}
              <span className="text-green-400">"Code"</span>] <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-red-400">self</span>
              .mindset = <span className="text-green-400">"Scientific"</span>{' '}
              <br />
              <br />
              &nbsp;&nbsp;<span className="text-purple-400">def</span>{' '}
              <span className="text-blue-400">solve_problem</span>(self, task):{' '}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">
                return
              </span>{' '}
              <span className="text-blue-400">optimize</span>(task)
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700 text-qore-orange">
              &gt; System: Core systems online...
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY (White Block) */}
      <section id="about" className="py-20 bg-qore-gray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="group">
              <div className="w-12 h-12 bg-qore-black text-white flex items-center justify-center rounded-lg mb-4 text-xl font-bold group-hover:bg-qore-orange transition">
                1
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                Научная точность
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Мы не упрощаем до примитива. Если учим нейросети — разбираем
                математику внутри. Если учим веб — говорим о протоколах и
                архитектуре.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="group">
              <div className="w-12 h-12 bg-qore-black text-white flex items-center justify-center rounded-lg mb-4 text-xl font-bold group-hover:bg-qore-orange transition">
                2
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                Инженерный подход
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Код — это инструмент, а не самоцель. Мы учим проектировать
                системы, искать решения и мыслить как инженеры NASA, а не просто
                "кодеры".
              </p>
            </div>
            {/* Feature 3 */}
            <div className="group">
              <div className="w-12 h-12 bg-qore-black text-white flex items-center justify-center rounded-lg mb-4 text-xl font-bold group-hover:bg-qore-orange transition">
                3
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                Фундаментальность
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Технологии меняются, физика и математика остаются. Мы даем базу,
                которая позволит освоить любой новый язык или инструмент за
                неделю.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES (Dark accent block) */}
      <section id="courses" className="py-20 bg-qore-gray">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-12">
            Образовательные треки
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Course 1: Algorithms & Python */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col overflow-hidden group">
              {/* Visual: IDE */}
              <div className="h-48 bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
                <div className="w-full max-w-[200px] bg-[#1E1B4B] rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-500 p-3">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <div className="w-6 h-1.5 bg-purple-400 rounded-full"></div>
                      <div className="w-0 group-hover:w-12 transition-all duration-700 ease-out h-1.5 bg-blue-400 rounded-full"></div>
                    </div>
                    <div className="w-full h-px bg-white/10"></div>
                    <div className="flex gap-2 ml-4">
                      <div className="w-4 h-1.5 bg-red-400 rounded-full"></div>
                      <div className="w-0 group-hover:w-16 transition-all duration-700 delay-100 ease-out h-1.5 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <div className="w-0 group-hover:w-8 transition-all duration-700 delay-200 ease-out h-1.5 bg-yellow-400 rounded-full"></div>
                      <div className="w-4 h-1.5 bg-white/30 rounded-full"></div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <div className="w-0 group-hover:w-12 transition-all duration-700 delay-300 ease-out h-1.5 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm font-bold text-gray-400 mb-2 font-mono">
                  10-17 лет
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-[#1E1B4B]">
                  Алгоритмы и Python
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Развиваем логику через код. Олимпиадные задачи и мат. модели.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-2"></span>
                    Структуры данных
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-2"></span>
                    Основы CS
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-2"></span>
                    Создание ботов
                  </li>
                </ul>
                <button className="w-full py-3 border-2 border-[#1E1B4B] text-[#1E1B4B] rounded-lg font-bold hover:bg-[#1E1B4B] hover:text-white transition">
                  Подробнее
                </button>
              </div>
            </div>

            {/* Course 2: Web Development Start */}
            <div className="bg-[#312E81] text-white rounded-2xl shadow-xl transform md:-translate-y-4 border border-[#1E1B4B] flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-[#F59E0B] text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                HIT
              </div>

              {/* Visual: Layout Construction */}
              <div className="h-60 -mx-8 -mt-8 mb-6 relative overflow-hidden bg-[#1E1B4B] flex items-center justify-center">
                <style>{`
                  @keyframes slide-down {
                    from { transform: translateY(-100%); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                  }
                  @keyframes slide-right {
                    from { transform: translateX(-100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                  }
                  @keyframes fade-in-up {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                  }
                `}</style>
                
                <div key={animationKey} className="w-64 h-40 bg-[#0f172a] rounded-lg border border-slate-700 shadow-2xl flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                    {/* Window Header */}
                    <div className="h-6 bg-slate-800 border-b border-slate-700 flex items-center px-3 gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                    </div>
                    
                    <div className="p-3 flex gap-3 h-full relative">
                        {/* Sidebar */}
                        <div 
                          className="w-12 h-full bg-slate-800 rounded-md border border-slate-700"
                          style={{ animation: 'slide-right 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s backwards' }}
                        ></div>
                        
                        <div className="flex-1 flex flex-col gap-3">
                            {/* Navbar */}
                            <div 
                              className="w-full h-8 bg-[#F59E0B] rounded-md opacity-90 shadow-lg" 
                              style={{ animation: 'slide-down 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s backwards' }}
                            ></div>
                            
                            {/* Content Area */}
                            <div className="flex-1 bg-slate-800/50 rounded-md border border-slate-700/50 p-2 space-y-2">
                                <div 
                                  className="h-2 w-3/4 bg-slate-700 rounded"
                                  style={{ animation: 'fade-in-up 0.6s ease-out 0.8s backwards' }}
                                ></div>
                                <div 
                                  className="h-2 w-1/2 bg-slate-700 rounded"
                                  style={{ animation: 'fade-in-up 0.6s ease-out 0.9s backwards' }}
                                ></div>
                                <div 
                                  className="h-16 w-full bg-slate-700/50 rounded mt-2"
                                  style={{ animation: 'fade-in-up 0.6s ease-out 1.0s backwards' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                 </div>
                 
                 {/* Glow */}
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B4B] to-transparent pointer-events-none"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm font-bold text-gray-400 mb-2 font-mono">
                  12-16 лет
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Web-разработка: Старт
                </h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  Твой первый сайт с нуля. Верстка на HTML/CSS, анимации и публикация в интернете.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-gray-400">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-2"></span>
                    HTML5 & CSS3
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-2"></span>
                    Flexbox
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-2"></span>
                    Хостинг сайтов
                  </li>
                </ul>
                <button className="w-full py-3 bg-[#F59E0B] text-white rounded-lg font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-500/20">
                  Записаться
                </button>
              </div>
            </div>

            {/* Course 3: AI & Math */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col overflow-hidden group">
              {/* Visual: Neural Network */}
              <div key={animationKey} className="h-48 bg-[#0f172a] flex items-center justify-center relative overflow-hidden">
                <style>{`
                  @keyframes draw-line {
                    to { stroke-dashoffset: 0; }
                  }
                  @keyframes pop-in {
                    from { transform: scale(0); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                  }
                  @keyframes pulse-node {
                    0%, 100% { box-shadow: 0 0 0 0px rgba(245, 158, 11, 0.4); }
                    50% { box-shadow: 0 0 0 8px rgba(245, 158, 11, 0); }
                  }
                `}</style>
                
                <svg className="w-full h-full max-w-[300px]" viewBox="0 0 300 160">
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#312E81" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>

                  {/* Connections L1 -> L2 */}
                  <path d="M40 80 L110 40" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" style={{animation: 'draw-line 0.4s ease-out 0.1s forwards'}} />
                  <path d="M40 80 L110 120" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" style={{animation: 'draw-line 0.4s ease-out 0.1s forwards'}} />

                  {/* Connections L2 -> L3 */}
                  <path d="M110 40 L180 30" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" style={{animation: 'draw-line 0.4s ease-out 0.5s forwards'}} />
                  <path d="M110 40 L180 80" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" style={{animation: 'draw-line 0.4s ease-out 0.5s forwards'}} />
                  <path d="M110 120 L180 80" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" style={{animation: 'draw-line 0.4s ease-out 0.5s forwards'}} />
                  <path d="M110 120 L180 130" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" style={{animation: 'draw-line 0.4s ease-out 0.5s forwards'}} />

                  {/* Connections L3 -> L4 */}
                  <path d="M180 30 L250 80" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" style={{animation: 'draw-line 0.4s ease-out 0.9s forwards'}} />
                  <path d="M180 80 L250 80" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" style={{animation: 'draw-line 0.4s ease-out 0.9s forwards'}} />
                  <path d="M180 130 L250 80" stroke="url(#line-gradient)" strokeWidth="1.5" strokeDasharray="100" strokeDashoffset="100" style={{animation: 'draw-line 0.4s ease-out 0.9s forwards'}} />

                  {/* Nodes */}
                  {/* L1 */}
                  <circle cx="40" cy="80" r="6" fill="#10B981" style={{animation: 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s backwards'}} />
                  
                  {/* L2 */}
                  <circle cx="110" cy="40" r="5" fill="#312E81" style={{animation: 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s backwards'}} />
                  <circle cx="110" cy="120" r="5" fill="#312E81" style={{animation: 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.4s backwards'}} />

                  {/* L3 */}
                  <circle cx="180" cy="30" r="4" fill="#6366F1" style={{animation: 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s backwards'}} />
                  <circle cx="180" cy="80" r="4" fill="#6366F1" style={{animation: 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s backwards'}} />
                  <circle cx="180" cy="130" r="4" fill="#6366F1" style={{animation: 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.8s backwards'}} />

                  {/* L4 */}
                  <circle cx="250" cy="80" r="8" fill="#F59E0B" style={{animation: 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1.2s backwards'}} />
                </svg>
                
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent pointer-events-none"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="text-sm font-bold text-gray-400 mb-2 font-mono">
                  16+ и Взрослые
                </div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-[#1E1B4B]">
                  AI & Высшая Математика
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Понимаем нейросети на уровне формул. Линейная алгебра и ML.
                </p>
                <ul className="space-y-2 mb-8 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-2"></span>
                    Math for CS
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-2"></span>
                    Deep Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full mr-2"></span>
                    Data Analysis
                  </li>
                </ul>
                <button className="w-full py-3 border-2 border-[#1E1B4B] text-[#1E1B4B] rounded-lg font-bold hover:bg-[#1E1B4B] hover:text-white transition">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MENTOR & TRUST */}
      <section id="mentor" className="py-20 bg-slate-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=800" 
                alt="Mentor" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Ваш наставник
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              "Я верю, что программирование — это новая грамотность. Моя задача
              не заставить зубрить синтаксис, а научить мыслить как инженер."
            </p>
            <div className="grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="font-bold text-3xl text-qore-orange mb-1">
                  5+
                </div>
                <div className="text-gray-500">Лет коммерческой разработки</div>
              </div>
              <div>
                <div className="font-bold text-3xl text-qore-orange mb-1">
                  200+
                </div>
                <div className="text-gray-500">Обученных студентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FORM */}
      <section id="contact" className="py-24 bg-qore-black text-white relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6">
            Начни путь в IT сегодня
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Оставь заявку. Мы свяжемся в Telegram или WhatsApp, обсудим цели и
            подберем группу. Без спама и звонков.
          </p>

          <form className="max-w-md mx-auto space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-qore-orange focus:ring-1 focus:ring-qore-orange transition"
            />
            <input
              type="tel"
              placeholder="Телефон или @username"
              className="w-full px-5 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-qore-orange focus:ring-1 focus:ring-qore-orange transition"
            />
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center justify-center p-3 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700">
                <input
                  type="radio"
                  name="audience"
                  className="mr-2 text-qore-orange focus:ring-qore-orange"
                />
                Для ребенка
              </label>
              <label className="flex items-center justify-center p-3 border border-gray-700 rounded-lg cursor-pointer hover:bg-gray-700">
                <input
                  type="radio"
                  name="audience"
                  className="mr-2 text-qore-orange focus:ring-qore-orange"
                />
                Для себя
              </label>
            </div>
            <button
              type="button"
              className="w-full bg-qore-orange text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition shadow-lg shadow-orange-500/20 mt-4"
            >
              Отправить заявку
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-6">
            Нажимаю кнопку, вы соглашаетесь с политикой конфиденциальности QORE.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-qore-dark text-indigo-200 py-10 border-t border-indigo-800 text-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-2">
            <svg
              className="w-8 h-8"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 30 L50 15 L80 30 L80 70 L50 85 L20 70 Z"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
              <path
                d="M50 15 L50 50 M20 30 L50 50 M80 30 L50 50"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="6" className="fill-qore-orange" />
            </svg>
            <span className="font-heading font-bold text-white text-lg">
              QORE
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">
              Telegram
            </a>
            <a href="#" className="hover:text-white transition">
              WhatsApp
            </a>
            <a href="#" className="hover:text-white transition">
              Instagram
            </a>
          </div>
          <div className="mt-4 md:mt-0">
            © 2025 QORE School. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
