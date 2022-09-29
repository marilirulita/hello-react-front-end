import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Greeting from './Greeting';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
