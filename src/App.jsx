import { useState } from 'react';
import confetti from 'canvas-confetti';
import { questions, aiPrompt } from './data';

// Helper function to shuffle the 100 questions randomly
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Function to pick 60 random questions from the pool of 100
const getRandomQuestions = () => shuffleArray(questions).slice(0, 60);

function App() {
  // Initialize the quiz with 60 random questions
  const [quizQuestions, setQuizQuestions] = useState(getRandomQuestions);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);
    
    if (index === quizQuestions[currentQ].correct) {
      setScore(score + 1);
      // 🎉 TRIGGER CONFETTI FOR CORRECT ANSWERS
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0ea5e9', '#38bdf8', '#ffffff']
      });
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
      // 🎉 BIG CONFETTI BLAST FOR FINISHING THE QUIZ
      const duration = 2000;
      const end = Date.now() + duration;
      (function frame() {
        confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
        if (Date.now() < end) requestAnimationFrame(frame);
      }());
    }
  };

  const restartQuiz = () => {
    // 🔄 RESHUFFLE AND PICK A NEW SET OF 60 QUESTIONS
    setQuizQuestions(getRandomQuestions());
    setCurrentQ(0);
    setSelected(null);
    setShowExplanation(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-sky-500/20">
          <h2 className="text-3xl font-bold mb-2 text-white">Quiz Complete! </h2>
          <p className="text-gray-400 mb-6">You scored {score} out of {quizQuestions.length}</p>
          <div className="bg-sky-900/50 p-4 rounded-lg mb-6">
            <p className="text-sky-100 text-sm">
              {score === quizQuestions.length ? "Perfect! You're ready for the AZ-900!" : "Keep practicing! Every attempt gives you a new mix of questions."}
            </p>
          </div>
          <button onClick={restartQuiz} className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-lg transition-all w-full">
            Start New Attempt (New Questions)
          </button>
        </div>
      </div>
    );
  }

  const q = quizQuestions[currentQ];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-3xl mx-auto text-white">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-sky-400">☁️ CloudMind</h1>
        <div className="bg-slate-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">
          Question {currentQ + 1} / {quizQuestions.length}
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-2 rounded-full mb-8">
        <div className="bg-sky-500 h-2 rounded-full transition-all duration-500" style={{ width: `${((currentQ + 1) / quizQuestions.length) * 100}%` }}></div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700/50 mb-6">
        <span className="inline-block bg-sky-900 text-sky-100 text-xs font-bold px-3 py-1 rounded-full mb-4">
          {q.category}
        </span>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 leading-relaxed">{q.question}</h2>

        <div className="space-y-3">
          {q.options.map((option, index) => {
            let btnClass = "w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-3 ";
            if (selected === null) {
              btnClass += "border-gray-700 hover:border-sky-500 hover:bg-sky-900/20";
            } else if (index === q.correct) {
              btnClass += "border-green-500 bg-green-500/10 text-green-400";
            } else if (index === selected) {
              btnClass += "border-red-500 bg-red-500/10 text-red-400";
            } else {
              btnClass += "border-gray-700 opacity-50";
            }

            return (
              <button key={index} onClick={() => handleAnswer(index)} disabled={selected !== null} className={btnClass}>
                <span>{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* AI Explanation Panel */}
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
            {currentQ === quizQuestions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;