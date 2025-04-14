import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import LessonPlayer from './components/LessonPlayer';
import WebcamTracker from './components/WebcamTracker';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/lesson" element={<LessonPlayer />} />
          <Route path="/attention-tracker" element={<WebcamTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
