import { useState } from 'react';
import confetti from 'canvas-confetti';
import { questions, aiPrompt } from './data';

// Helper function to shuffle an array randomly
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Function to pick 60 random questions AND shuffle their options
const getRandomQuestions = () => {
  return shuffleArray(questions).slice(0, 60).map(q => {
    // 1. Pair each option with a boolean indicating if it's correct
    const pairedOptions = q.options.map((opt, index) => ({
      text: opt,
      isCorrect: index === q.correct
    }));
    
    // 2. Shuffle these pairs
    const shuffledPairs = shuffleArray(pairedOptions);
    
    // 3. Extract the new text options and find the new index of the correct answer
    return {
      ...q,
      options: shuffledPairs.map(p => p.text),
      correct: shuffledPairs.findIndex(p => p.isCorrect)
    };
  });
};

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState(getRandomQuestions);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const startQuiz = () => {
    setQuizQuestions(getRandomQuestions());
    setHasStarted(true);
    setCurrentQ(0);
    setSelected(null);
    setIsChecked(false);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  const handleSelect = (index) => {
    if (!isChecked) {
      setSelected(index);
    }
  };

  const handleCheck = () => {
    if (selected === null) return;
    setIsChecked(true);
    setShowExplanation(true);
    
    if (selected === quizQuestions[currentQ].correct) {
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0ea5e9', '#38bdf8', '#ffffff']
      });
    }
  };

  const nextQuestion = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setIsChecked(false);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
      const duration = 2000;
      const end = Date.now() + duration;
      (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
      }());
    }
  };

  const handleRestart = () => {
    if (window.confirm("Are you sure you want to restart? Your current progress will be lost.")) {
      setHasStarted(false);
      setIsFinished(false);
    }
  };

  const percentage = Math.round((score / quizQuestions.length) * 100);
  const passed = percentage >= 80;

  // === LANDING PAGE ===
  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              <span className="text-white mr-2">☁️</span>CloudMind
            </h1>
            <p className="text-xl text-gray-300 mb-2">Master Azure AZ-900 with AI-Powered Learning</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-sky-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">What to Expect</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-sky-500/20 hover:border-sky-500/50 transition-all">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-bold text-white mb-2">100+ Questions</h3>
                <p className="text-sm text-gray-400">Comprehensive coverage across all 4 AZ-900 domains</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-sky-500/20 hover:border-sky-500/50 transition-all">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-bold text-white mb-2">AI Tutor</h3>
                <p className="text-sm text-gray-400">Get explanations with real-world analogies</p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-sky-500/20 hover:border-sky-500/50 transition-all">
                <div className="text-3xl mb-3">🎲</div>
                <h3 className="font-bold text-white mb-2">Randomized</h3>
                <p className="text-sm text-gray-400">60 unique questions & shuffled options per attempt</p>
              </div>
            </div>

            <div className="bg-sky-900/30 rounded-lg p-4 mb-6">
              <p className="text-sky-200 text-sm">
                <strong>💡 Pro Tip:</strong> Each attempt gives you a fresh set of 60 questions from our 100+ question bank. 
                You need an <strong>80% pass mark</strong> to succeed!
              </p>
            </div>
          </div>

          <button 
            onClick={startQuiz}
            className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg shadow-sky-500/30"
          >
            Start Learning →
          </button>

          <p className="text-gray-500 text-sm mt-6">
            Built with ❤️ for the Vibe Coding Hackathon 2026
          </p>
        </div>
      </div>
    );
  }

  // === QUIZ COMPLETED ===
  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-sky-500/20">
          <h2 className={`text-3xl font-bold mb-2 ${passed ? 'text-green-400' : 'text-red-400'}`}>
            {passed ? "Congratulations! You Passed! 🎉" : "Keep Practicing! You Didn't Pass"}
          </h2>
          <p className="text-gray-400 mb-2">You scored {score} out of {quizQuestions.length} ({percentage}%)</p>
          <p className={`text-sm mb-6 font-medium ${passed ? 'text-green-300' : 'text-red-300'}`}>
            Pass mark is 80%.
          </p>
          
          <div className="bg-sky-900/50 p-4 rounded-lg mb-6">
            <p className="text-sky-100 text-sm">
              {passed 
                ? "Excellent work! You have a strong grasp of Azure fundamentals." 
                : "Don't give up! Review the AI explanations and try a new set of questions."}
            </p>
          </div>

          <button onClick={handleRestart} className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-lg transition-all w-full mb-3">
            Back to Home
          </button>
          <button onClick={startQuiz} className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-all w-full">
            Try Again (New Questions)
          </button>
        </div>
      </div>
    );
  }

  // === ACTIVE QUIZ ===
  const q = quizQuestions[currentQ];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-3xl mx-auto text-white">
      <header className="flex items-center justify-between mb-8">
        <button 
          onClick={() => setHasStarted(false)} 
          className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors font-medium"
        >
          ← Back
        </button>
        
        <div className="bg-slate-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">
          Question {currentQ + 1} / {quizQuestions.length}
        </div>

        {/* Restart Button available at any time */}
        <button 
          onClick={handleRestart} 
          className="text-red-400 hover:text-red-300 flex items-center gap-2 transition-colors font-medium text-sm"
        >
          ↻ Restart
        </button>
      </header>

      <div className="w-full bg-slate-800 h-2 rounded-full mb-8">
        <div className="bg-sky-500 h-2 rounded-full transition-all duration-500" style={{ width: `${((currentQ + 1) / quizQuestions.length) * 100}%` }}></div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/50 mb-6">
        <span className="inline-block bg-sky-900 text-sky-100 text-xs font-bold px-3 py-1 rounded-full mb-4">
          {q.category}
        </span>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed">{q.question}</h2>

        <div className="space-y-3">
          {q.options.map((option, index) => {
            let btnClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ";
            
            if (!isChecked) {
              if (selected === index) {
                btnClass += "border-sky-500 bg-sky-900/30 text-white";
              } else {
                btnClass += "border-gray-700 hover:border-sky-500/50 hover:bg-slate-700/50";
              }
            } else {
              if (index === q.correct) {
                btnClass += "border-green-500 bg-green-500/10 text-green-400";
              } else if (index === selected) {
                btnClass += "border-red-500 bg-red-500/10 text-red-400";
              } else {
                btnClass += "border-gray-700 opacity-50";
              }
            }

            return (
              <button key={index} onClick={() => handleSelect(index)} disabled={isChecked} className={btnClass}>
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-4">
        {!isChecked && selected !== null && (
          <button 
            onClick={handleCheck} 
            className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-4 rounded-xl transition-all text-lg shadow-lg shadow-sky-500/20"
          >
            Check Answer
          </button>
        )}

        {showExplanation && (
          <div className="bg-gradient-to-br from-sky-900/40 to-slate-800 rounded-2xl p-6 border border-sky-500/30 shadow-lg">
            <h3 className="font-bold text-sky-100 mb-3">✨ CloudMind AI Tutor</h3>
            <p className="text-gray-300 leading-relaxed mb-4">{q.explanation}</p>
            
            <details className="mt-4 group">
              <summary className="text-xs text-sky-400 cursor-pointer hover:text-sky-300">
                 View the Prompt Engineering behind this explanation
              </summary>
              <div className="mt-2 p-3 bg-black/40 rounded-lg text-xs font-mono text-gray-400 border border-gray-700">
                {aiPrompt}
              </div>
            </details>

            <button onClick={nextQuestion} className="mt-6 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-lg transition-all w-full flex items-center justify-center gap-2">
              {currentQ === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;