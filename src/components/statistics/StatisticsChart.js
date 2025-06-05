import React from 'react';
import './Statistics.css';

function StatisticsChart() {
  return (
    <div className="statistics-chart">
      <h3>기사 통계</h3>
      <div className="chart-container">
        <div className="chart-item">
          <h4>일간 기사 수</h4>
          <div className="chart-placeholder">
            차트가 들어갈 자리
          </div>
        </div>
        <div className="chart-item">
          <h4>카테고리별 기사 수</h4>
          <div className="chart-placeholder">
            차트가 들어갈 자리
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisticsChart; 