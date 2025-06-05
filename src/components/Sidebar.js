import React from 'react';
import './App.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="menu">
        <li>기사관리</li>
        <li>통계</li>
        <li>인트라넷</li>
        <li>시스템관리</li>
        <li>시스템관리2</li>
      </ul>
    </nav>
  );
}

export default Sidebar;
