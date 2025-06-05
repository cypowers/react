import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ArticleManagement from './components/pages/ArticleManagement';
import Statistics from './components/pages/Statistics';
import Intranet from './components/pages/Intranet';
import SystemManagement from './components/pages/SystemManagement';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Navigate to="/articles" replace />} />
              <Route path="/articles" element={<ArticleManagement />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/intranet" element={<Intranet />} />
              <Route path="/system" element={<SystemManagement />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App; 