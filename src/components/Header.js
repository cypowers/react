import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">B!z watch</div>
      <div className="user-info">
        <span>SCM관리자님 접속중</span>
        <button>홈페이지</button>
        <button>logout</button>
      </div>
    </header>
  );
}

export default Header;
