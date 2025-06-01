import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import News from './pages/News';
import Download from './pages/Download';

export default function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" end style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Home
        </NavLink>
        <NavLink to="/news" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          News
        </NavLink>
        <NavLink to="/download" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>
          Download
        </NavLink>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/download" element={<Download />} />
          <Route path="*" element={<h2>Seite nicht gefunden (404)</h2>} />
        </Routes>
      </main>
    </Router>
  );
}
