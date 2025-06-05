import React from 'react';
import ArticleList from '../article/ArticleList';
import ArticleForm from '../article/ArticleForm';
import './Pages.css';

function ArticleManagement() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h2>기사 관리</h2>
        <div className="page-actions">
          <button className="btn btn-primary">새 기사 작성</button>
        </div>
      </div>
      <div className="page-content">
        <ArticleList />
      </div>
    </div>
  );
}

export default ArticleManagement; 