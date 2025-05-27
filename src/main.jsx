import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

function App() {
  const [showDeals, setShowDeals] = React.useState(false);

  return (
    <div className="app">
      <h1>🎉 Bienvenue chez Rabais Loco! 🎉</h1>
      {!showDeals ? (
        <img
          src="/pinata.png"
          alt="Clique sur la piñata!"
          onClick={() => setShowDeals(true)}
          style={{
            width: '250px',
            cursor: 'pointer',
            transition: 'transform 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
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