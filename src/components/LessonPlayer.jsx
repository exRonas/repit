import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { coursesData } from '../data/courses';

const LessonPlayer = () => {
  const { lessonId } = useParams();
  const [activeTab, setActiveTab] = useState('questioning');
  const [code, setCode] = useState('');
  
  // Quiz State
  const [quizSelected, setQuizSelected] = useState(null);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Terminal State
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [isWaitingInput, setIsWaitingInput] = useState(false);
  const [activePrompt, setActivePrompt] = useState('');
  const [currentInput, setCurrentInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const isRunningRef = React.useRef(false);
  const inputResolverRef = React.useRef(null);
  
  const [pyodide, setPyodide] = useState(null);

  // Initialize Pyodide
  useEffect(() => {
    let mounted = true;
    const initPyodide = async () => {
      if (!window.loadPyodide) {
        if (mounted) setTimeout(initPyodide, 500);
        return;
      }
      if (!pyodide && mounted) {
        try {
          const py = await window.loadPyodide();
          if (mounted) {
            setPyodide(py);
            setTerminalOutput(prev => [...prev, { text: 'Python environment ready.', type: 'system' }]);
          }
        } catch (e) {
          console.error("Failed to load Pyodide:", e);
          if (mounted) {
             setTerminalOutput(prev => [...prev, { text: 'Failed to load Python environment.', type: 'error' }]);
          }
        }
      }
    };
    initPyodide();
    return () => { mounted = false; };
  }, []);

  // Helper to find lesson and context
  const findLessonData = () => {
    for (const track of coursesData.tracks) {
      for (const level of track.levels) {
        for (const course of level.courses) {
          for (const module of course.modules) {
            const lesson = module.lessons.find(l => l.id === lessonId);
            if (lesson) return { track, level, course, module, lesson };
          }
        }
      }
    }
    return null;
  };

  const data = findLessonData();
  const { lesson, module, course } = data || {};

  // Reset state on lesson change
  useEffect(() => {
    setQuizSelected(null);
    setQuizSubmitted(false);
    setTerminalOutput([]);
    setIsWaitingInput(false);
    setIsRunning(false);
    isRunningRef.current = false;
  }, [lessonId]);

  // Normalize QORE data
  const qore = lesson?.qore_content ? {
    questioning: {
      text: lesson.qore_content.questioning.text,
      concept: lesson.concept_block?.description || lesson.qore_content.questioning.title,
      interactive: lesson.qore_content.questioning.interactive_question
    },
    observation: {
      text: lesson.qore_content.observation.text,
      code: lesson.qore_content.observation.code_snippet?.code,
      comments: lesson.qore_content.observation.code_snippet?.comments
    },
    reasoning: {
      text: lesson.qore_content.reasoning.text,
      diagram: lesson.qore_content.reasoning.diagram_model,
      steps: lesson.qore_content.reasoning.logic_steps
    },
    execution: {
      task: lesson.qore_content.execution.mission_brief,
      initialCode: lesson.qore_content.execution.starter_code,
      requirements: lesson.qore_content.execution.requirements
    }
  } : lesson?.qore;

  useEffect(() => {
    if (qore?.execution?.initialCode) {
      setCode(qore.execution.initialCode);
    }
  }, [lesson]);

  if (!data) return <div className="text-white p-10">Lesson not found</div>;

  // --- QUIZ LOGIC ---
  const handleQuizOptionClick = (index) => {
    if (quizSubmitted) return;
    setQuizSelected(index);
  };

  const checkQuizAnswer = () => {
    setQuizSubmitted(true);
  };

  // --- TERMINAL LOGIC ---
  const addToTerminal = (text, type = 'output') => {
    setTerminalOutput(prev => [...prev, { text, type }]);
  };

  const handleTerminalInput = (e) => {
    e.preventDefault();
    if (!inputResolverRef.current) return;
    
    // Combine prompt and input for the log
    const logText = activePrompt ? `${activePrompt}${currentInput}` : currentInput;
    
    if (activePrompt) {
        addToTerminal(logText, 'output'); 
    } else {
        addToTerminal(currentInput, 'user-input');
    }

    inputResolverRef.current(currentInput);
    setCurrentInput('');
    setIsWaitingInput(false);
    setActivePrompt('');
    inputResolverRef.current = null;
  };

  const runCode = async () => {
    if (isRunningRef.current) return;
    if (!pyodide) {
      addToTerminal("Python environment is loading... please wait.", 'system');
      return;
    }
    
    setIsRunning(true);
    isRunningRef.current = true;
    setTerminalOutput([]);
    
    try {
      // Redirect stdout
      pyodide.setStdout({
        batched: (msg) => addToTerminal(msg)
      });

      // Expose input function to Python
      window.promptInput = (prompt) => {
        return new Promise((resolve) => {
          if (prompt) {
             setActivePrompt(prompt);
          } else {
             setActivePrompt('');
          }
          setIsWaitingInput(true);
          inputResolverRef.current = resolve;
        });
      };

      // Patch input() to use async/await with our React UI
      // We also need to transform user code to await input() calls
      await pyodide.runPythonAsync(`
import builtins
import js

async def async_input(prompt=""):
    return await js.promptInput(prompt)

builtins.input = async_input
      `);

      // Transform user code: input() -> await input()
      // This is a simple regex replacement for the sake of the demo
      // It handles basic cases: var = input(), int(input()), etc.
      const transformedCode = code.replace(/\binput\s*\(/g, 'await input(');
      
      // Run Python code
      await pyodide.runPythonAsync(transformedCode);
      
      addToTerminal('Process finished with exit code 0', 'system');

    } catch (err) {
      addToTerminal(`Error: ${err.message}`, 'error');
    } finally {
      setIsRunning(false);
      isRunningRef.current = false;
      setIsWaitingInput(false);
      setActivePrompt('');
      inputResolverRef.current = null;
    }
  };

  const tabs = [
    { id: 'questioning', label: 'Q | Questioning', color: 'text-purple-400' },
    { id: 'observation', label: 'O | Observation', color: 'text-blue-400' },
    { id: 'reasoning', label: 'R | Reasoning', color: 'text-yellow-400' },
    { id: 'execution', label: 'E | Execution', color: 'text-[#F59E0B]' },
  ];

  return (
    <div className="flex h-screen bg-[#0f172a] text-white font-sans overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-[#1E1B4B] border-r border-gray-800 flex-shrink-0 flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <Link to={`/track/${data.track.id}`} className="text-xs font-mono text-gray-400 hover:text-white mb-2 block">
            &lt; EXIT_TO_MAP
          </Link>
          <h2 className="font-bold text-sm text-gray-200">{course.title}</h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {course.modules.map(m => (
            <div key={m.id}>
              <div className="text-xs font-mono text-gray-500 uppercase mb-2">{m.title}</div>
              <div className="space-y-1">
                {m.lessons.map(l => (
                  <Link 
                    key={l.id} 
                    to={`/lesson/${l.id}`}
                    className={`block px-3 py-2 rounded-lg text-sm transition ${l.id === lessonId ? 'bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30' : 'text-gray-400 hover:bg-white/5'}`}
                  >
                    {l.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="h-16 border-b border-gray-800 flex items-center justify-between px-8 bg-[#0f172a]/95 backdrop-blur">
          <div className="flex items-center gap-4">
            <span className="px-2 py-1 rounded bg-gray-800 text-xs font-mono text-gray-400 border border-gray-700">CONCEPT BLOCK</span>
            <h1 className="text-xl font-bold font-heading">{lesson.title}</h1>
          </div>
          <div className="flex gap-2">
             {/* Progress dots or similar could go here */}
          </div>
        </div>

        {/* QORE Switcher */}
        <div className="bg-[#111] border-b border-gray-800 px-8">
          <div className="flex space-x-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  px-6 py-4 text-sm font-mono font-bold border-b-2 transition-colors
                  ${activeTab === tab.id 
                    ? `border-[#F59E0B] bg-white/5 ${tab.color}` 
                    : 'border-transparent text-gray-500 hover:text-gray-300 hover:bg-white/5'}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          <div className="max-w-4xl mx-auto">
            
            {/* Q: Questioning */}
            {activeTab === 'questioning' && (
              <div className="animate-fade-in-up">
                <div className="text-6xl mb-8 opacity-10 font-heading font-bold">?</div>
                <h2 className="text-3xl font-bold mb-6 text-purple-400">Вопрос</h2>
                <p className="text-2xl leading-relaxed text-gray-200 mb-8 whitespace-pre-line">
                  {qore.questioning.text}
                </p>
                
                {qore.questioning.interactive && (
                  <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl mb-8">
                    <h3 className="text-lg font-bold text-purple-300 mb-4">{qore.questioning.interactive.text}</h3>
                    <div className="space-y-2">
                      {qore.questioning.interactive.options.map((opt, idx) => {
                        const isSelected = quizSelected === idx;
                        const isCorrect = idx === qore.questioning.interactive.correct_answer;
                        let btnClass = "w-full text-left p-3 rounded border transition ";
                        
                        if (quizSubmitted) {
                          if (isSelected && isCorrect) btnClass += "bg-green-500/20 border-green-500 text-green-200";
                          else if (isSelected && !isCorrect) btnClass += "bg-red-500/20 border-red-500 text-red-200";
                          else if (isCorrect) btnClass += "bg-green-500/10 border-green-500/50 text-green-200/70";
                          else btnClass += "bg-purple-500/5 border-purple-500/10 text-purple-200/50";
                        } else {
                          if (isSelected) btnClass += "bg-purple-500/30 border-purple-400 text-white";
                          else btnClass += "bg-purple-500/10 hover:bg-purple-500/20 border-purple-500/20 text-purple-200";
                        }

                        return (
                          <button 
                            key={idx} 
                            onClick={() => handleQuizOptionClick(idx)}
                            disabled={quizSubmitted}
                            className={btnClass}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    {!quizSubmitted && quizSelected !== null && (
                      <button 
                        onClick={checkQuizAnswer}
                        className="mt-4 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg font-bold text-sm transition"
                      >
                        Проверить ответ
                      </button>
                    )}
                    {quizSubmitted && (
                      <div className={`mt-4 p-3 rounded-lg text-sm font-bold ${quizSelected === qore.questioning.interactive.correct_answer ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                        {quizSelected === qore.questioning.interactive.correct_answer ? 'Верно! Система подтверждает ввод.' : 'Ошибка. Попробуйте еще раз.'}
                      </div>
                    )}
                  </div>
                )}

                <div className="bg-purple-900/20 border border-purple-500/30 p-6 rounded-xl">
                  <h3 className="text-sm font-mono text-purple-400 mb-2 uppercase">Qore Concept</h3>
                  <p className="text-lg">{qore.questioning.concept}</p>
                </div>
              </div>
            )}

            {/* O: Observation */}
            {activeTab === 'observation' && (
              <div className="animate-fade-in-up">
                <div className="text-6xl mb-8 opacity-10 font-heading font-bold">OBS</div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Наблюдение</h2>
                <p className="text-xl text-gray-300 mb-8 whitespace-pre-line">{qore.observation.text}</p>
                
                {qore.observation.code && (
                  <div className="bg-[#1E1E1E] rounded-xl overflow-hidden border border-gray-700 shadow-2xl mb-8">
                    <div className="bg-[#252526] px-4 py-2 flex gap-2 border-b border-gray-700">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <pre className="p-6 font-mono text-sm text-gray-300 overflow-x-auto">
                      <code>{qore.observation.code}</code>
                    </pre>
                    {qore.observation.comments && (
                      <div className="bg-[#252526] p-4 border-t border-gray-700 text-gray-400 text-sm italic">
                        # {qore.observation.comments}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* R: Reasoning */}
            {activeTab === 'reasoning' && (
              <div className="animate-fade-in-up">
                <div className="text-6xl mb-8 opacity-10 font-heading font-bold">LOGIC</div>
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">Рассуждение</h2>
                <p className="text-xl text-gray-300 mb-8 whitespace-pre-line">{qore.reasoning.text}</p>
                
                <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 flex justify-center items-center min-h-[200px] mb-8">
                  <div className="font-mono text-yellow-400 text-lg border border-yellow-400/30 p-4 rounded bg-yellow-400/5">
                    {qore.reasoning.diagram}
                  </div>
                </div>

                {qore.reasoning.steps && (
                  <div className="space-y-4">
                    {qore.reasoning.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-4 items-start bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                        <div className="font-mono text-yellow-500 font-bold">{idx + 1}.</div>
                        <div className="text-gray-300">{step}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* E: Execution */}
            {activeTab === 'execution' && (
              <div className="animate-fade-in-up h-full flex flex-col">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-[#F59E0B] mb-2">Практика</h2>
                  <p className="text-gray-400 mb-4">{qore.execution.task}</p>
                  
                  {qore.execution.requirements && (
                    <ul className="list-disc list-inside text-gray-500 space-y-1 mb-4">
                      {qore.execution.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex-1 flex flex-col bg-[#1E1E1E] rounded-xl border border-gray-700 overflow-hidden shadow-2xl min-h-[400px]">
                  {/* Editor Toolbar */}
                  <div className="bg-[#252526] px-4 py-2 flex justify-between items-center border-b border-gray-700">
                    <span className="text-xs font-mono text-gray-500">main.py</span>
                    <button 
                      onClick={runCode}
                      disabled={isRunning}
                      className="bg-[#F59E0B] text-white px-4 py-1.5 rounded text-xs font-bold hover:bg-orange-600 transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isRunning ? 'RUNNING...' : 'RUN SCRIPT'}
                      {!isRunning && <span className="text-[10px]">▶</span>}
                    </button>
                  </div>

                  {/* Editor Area */}
                  <div className="flex-1 flex flex-col md:flex-row">
                    <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="flex-1 bg-[#1E1E1E] text-gray-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed"
                      spellCheck="false"
                    />
                    
                    {/* Output Terminal */}
                    <div className="h-1/3 md:h-auto md:w-1/3 bg-[#0f172a] border-t md:border-t-0 md:border-l border-gray-700 p-4 font-mono text-xs flex flex-col">
                      <div className="text-gray-500 mb-2 uppercase tracking-wider flex justify-between">
                        <span>Terminal</span>
                        {isRunning && <span className="text-[#F59E0B] animate-pulse">● Running</span>}
                      </div>
                      
                      <div className="flex-1 overflow-y-auto space-y-1 font-mono">
                        {terminalOutput.map((line, i) => (
                          <div key={i} className={`${
                            line.type === 'error' ? 'text-red-400' : 
                            line.type === 'user-input' ? 'text-white font-bold' : 
                            line.type === 'prompt' ? 'text-[#F59E0B]' : 
                            line.type === 'system' ? 'text-gray-500 italic' : 
                            'text-green-400'
                          }`}>
                            {line.type === 'user-input' ? '> ' : ''}{line.text}
                          </div>
                        ))}
                        {isWaitingInput && (
                          <form onSubmit={handleTerminalInput} className="flex items-center gap-2 mt-2 border-t border-gray-700 pt-2">
                            {activePrompt ? (
                              <span className="text-[#F59E0B] whitespace-nowrap">{activePrompt}</span>
                            ) : (
                              <span className="text-[#F59E0B] animate-pulse">?</span>
                            )}
                            <input 
                              autoFocus
                              type="text" 
                              value={currentInput}
                              onChange={(e) => setCurrentInput(e.target.value)}
                              className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-600"
                              placeholder={activePrompt ? "" : "Type input here..."}
                            />
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPlayer;
