import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Greeting from './Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
