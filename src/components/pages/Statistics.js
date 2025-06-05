import React from 'react';
import StatisticsChart from '../statistics/StatisticsChart';
import './Pages.css';

function Statistics() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2>통계</h2>
        <div className="page-actions">
          <select className="form-control">
            <option>일간</option>
            <option>주간</option>
            <option>월간</option>
          </select>
        </div>
      </div>
      <div className="page-content">
        <StatisticsChart />
      </div>
    </div>
  );
}

export default Statistics; 