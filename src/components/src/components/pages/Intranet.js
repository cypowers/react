import React from 'react';
import './Pages.css';

function Intranet() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2>인트라넷</h2>
        <div className="page-actions">
          <button className="btn btn-primary">새 공지사항</button>
        </div>
      </div>
      <div className="page-content">
        <div className="intranet-grid">
          <div className="grid-item">
            <h3>공지사항</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>샘플 공지사항</td>
                  <td>관리자</td>
                  <td>2024-03-21</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid-item">
            <h3>최근 게시물</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>샘플 게시물</td>
                  <td>사용자</td>
                  <td>2024-03-21</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intranet; 