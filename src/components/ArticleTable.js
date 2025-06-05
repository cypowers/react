import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          <h1>Welcome to B!z watch AMS</h1>
          <p>관리자 시스템에 오신 것을 환영합니다.</p>
        </main>
      </div>
    </div>
  );
}

export default App;
