import React from 'react';
import './Article.css';

function ArticleForm() {
  return (
    <div className="article-form">
      <h2>기사 작성</h2>
      <form>
        <div className="form-group">
          <label>제목</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>내용</label>
          <textarea className="form-control" rows="10"></textarea>
        </div>
        <div className="form-group">
          <label>카테고리</label>
          <select className="form-control">
            <option>경제</option>
            <option>정치</option>
            <option>사회</option>
            <option>국제</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-primary">저장</button>
          <button type="button" className="btn-secondary">취소</button>
        </div>
      </form>
    </div>
  );
}

export default ArticleForm; 