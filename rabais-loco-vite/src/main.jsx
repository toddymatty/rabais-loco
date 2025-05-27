import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

function App() {
  const [showDeals, setShowDeals] = React.useState(false);

  return (
    <div className="app">
      <h1>🎉 Bienvenue chez Rabais Loco! 🎉</h1>
      {!showDeals ? (
        <button onClick={() => setShowDeals(true)}>🎊 Clique sur la piñata! 🎊</button>
      ) : (
        <div className="deals">
          {[1, 2, 3].map(num => (
            <div key={num} className="deal">🎁 Rabais surprise #{num}</div>
          ))}
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)