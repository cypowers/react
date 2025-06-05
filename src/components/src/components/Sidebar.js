import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="menu">
        <ul>
          <li>
            <NavLink to="/articles" className={({ isActive }) => isActive ? 'active' : ''}>
              기사관리
            </NavLink>
          </li>
          <li>
            <NavLink to="/statistics" className={({ isActive }) => isActive ? 'active' : ''}>
              통계
            </NavLink>
          </li>
          <li>
            <NavLink to="/intranet" className={({ isActive }) => isActive ? 'active' : ''}>
              인트라넷
            </NavLink>
          </li>
          <li>
            <NavLink to="/system" className={({ isActive }) => isActive ? 'active' : ''}>
              시스템관리
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar; 