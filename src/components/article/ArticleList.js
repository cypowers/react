import React from 'react';
import './Article.css';

function ArticleList() {
  return (
    <div className="article-list">
      <div className="article-header">
        <h2>기사 목록</h2>
        <button className="btn-primary">새 기사 작성</button>
      </div>
      <table className="article-table">
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>상태</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>샘플 기사 제목입니다.</td>
            <td>관리자</td>
            <td>2024-03-21</td>
            <td>게시</td>
            <td>
              <button className="btn-edit">수정</button>
              <button className="btn-delete">삭제</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ArticleList; 