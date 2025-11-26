import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseRoadmap from './components/CourseRoadmap';
import LessonPlayer from './components/LessonPlayer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track/:trackId" element={<CourseRoadmap />} />
        <Route path="/lesson/:lessonId" element={<LessonPlayer />} />
      </Routes>
    </Router>
  );
}

export default App;
