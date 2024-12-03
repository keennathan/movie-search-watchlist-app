import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watchlist' element={<div>Watchlist</div>} />
        <Route path='/details/:id' element={<div>Details</div>} />
      </Routes>
    </Router>
  )
}

export default App
