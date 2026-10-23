import { useState } from 'react';
import { questions, aiPrompt } from './data';

function App() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (index) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === questions[currentQ].correct) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-slate-800 p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-sky-500/20">
          <h2 className="text-3xl font-bold mb-2 text-white">Quiz Complete! 🎉</h2>
          <p className="text-gray-400 mb-6">You scored {score} out of {questions.length}</p>
          <button onClick={() => window.location.reload()} className="bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-lg transition-all w-full">
            Restart CloudMind
          </button>
        </div>
      </div>
    );
  }

  const q = questions[currentQ];

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-3xl mx-auto text-white">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-sky-400">☁️ CloudMind</h1>
        <div className="bg-slate-800 px-4 py-2 rounded-full text-sm font-medium border border-gray-700">
          Question {currentQ + 1} / {questions.length}
        </div>
      </header>

      <div className="w-full bg-slate-800 h-2 rounded-full mb-8">
        <div className="bg-sky-500 h-2 rounded-full transition-all duration-500" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}></div>
      </div>

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

      {showExplanation && (
        <div className="bg-gradient-to-br from-sky-900/40 to-slate-800 rounded-2xl p-6 border border-sky-500/30 shadow-lg">
          <h3 className="font-bold text-sky-100 mb-3">✨ CloudMind AI Tutor</h3>
          <p className="text-gray-300 leading-relaxed mb-4">{q.explanation}</p>
          
          <details className="mt-4 group">
            <summary className="text-xs text-sky-400 cursor-pointer hover:text-sky-300">
              📖 View the Prompt Engineering behind this explanation
            </summary>
            <div className="mt-2 p-3 bg-black/40 rounded-lg text-xs font-mono text-gray-400 border border-gray-700">
              {aiPrompt}
            </div>
          </details>

          <button onClick={nextQuestion} className="mt-6 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 px-6 rounded-lg transition-all w-full flex items-center justify-center gap-2">
            {currentQ === questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;