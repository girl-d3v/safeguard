import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HomePage from './components/HomePage';
import PasswordStrength from './components/PasswordStrength';
import TwoFARecommendations from './components/TwoFARecommendations';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/password-strength" element={<PasswordStrength />} />
        <Route path="/2fa-recommendations" element={<TwoFARecommendations />} />
      </Routes>
    </Router>
  );
}

export default App;
