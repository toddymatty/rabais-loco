import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { launchConfetti } from './confetti';

function App() {
  const [showDeals, setShowDeals] = React.useState(false);
  const audioRef = useRef(null);

  const handlePinataClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    launchConfetti();
    setShowDeals(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 via-pink-200 to-lime-200 flex flex-col items-center justify-center p-8 text-center animate-fade-in">
      <h1 className="text-6xl font-extrabold mb-6 text-pink-600 drop-shadow-lg">🎉 Rabais Loco 🎉</h1>
      <p className="text-xl mb-8 text-gray-800 max-w-2xl leading-relaxed">
        Des rabais incroyables, mais pour une durée très très courte. On est complètement Loco! 🔥
      </p>
      <audio ref={audioRef} src="/pow-sound.mp3" preload="auto" />
      {!showDeals ? (
        <img
          src="/pinata.png"
          alt="Clique sur la piñata!"
          onClick={handlePinataClick}
          className="w-60 cursor-pointer drop-shadow-xl animate-bounce hover:scale-110 transition-transform"
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map(num => (
            <div key={num} className="p-4 bg-white shadow-2xl rounded-2xl border-4 border-fuchsia-400 hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold text-pink-600 mb-2">🎁 Deal Loco #{num}</h3>
              <p className="text-gray-700">Un rabais EXCLUSIF pour une durée ultra limitée! ⏳</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);