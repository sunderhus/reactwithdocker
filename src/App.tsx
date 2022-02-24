import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(state => state + 1);
  }, [])

  return (
    <div className="App">
      <h1>Projeto React com docker e HRM.</h1>
    </div>
  );
}

export default App;
