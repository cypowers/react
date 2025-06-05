import React from 'react';
import './Pages.css';

function SystemManagement() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2>시스템 관리</h2>
      </div>
      <div className="page-content">
        <div className="system-grid">
          <div className="grid-item">
            <h3>사용자 관리</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>아이디</th>
                  <th>이름</th>
                  <th>권한</th>
                  <th>관리</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>admin</td>
                  <td>관리자</td>
                  <td>관리자</td>
                  <td>
                    <button className="btn btn-edit">수정</button>
                    <button className="btn btn-delete">삭제</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid-item">
            <h3>시스템 설정</h3>
            <div className="settings-form">
              <div className="form-group">
                <label>시스템 이름</label>
                <input type="text" className="form-control" defaultValue="BizWatch AMS" />
              </div>
              <div className="form-group">
                <label>백업 주기</label>
                <select className="form-control">
                  <option>매일</option>
                  <option>매주</option>
                  <option>매월</option>
                </select>
              </div>
              <div className="form-actions">
                <button className="btn btn-primary">저장</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SystemManagement; 