const { BrowserRouter, Routes, Route, Link } = ReactRouterDOM;

const Header = () => (
  <header className="bg-blue-600 text-white p-4 text-xl font-bold">
    기사관리 시스템
  </header>
);

const Sidebar = () => (
  <aside className="w-48 bg-gray-100 h-screen p-4">
    <ul className="space-y-2">
      <li><Link to="/">홈</Link></li>
      <li><Link to="/articles">기사관리</Link></li>
    </ul>
  </aside>
);

const Home = () => <div className="p-4">홈 페이지입니다.</div>;

const ArticleManager = () => {
  const [searchTitle, setSearchTitle] = React.useState('');
  const [searchWriter, setSearchWriter] = React.useState('');
  const originalArticles = React.useRef([
    { id: 1, title: '기사1', writer: '홍길동', date: '2025-05-09' },
    { id: 2, title: '기사2', writer: '이기자', date: '2025-05-08' },
    { id: 3, title: '기사3', writer: '홍길동', date: '2025-05-07' },
  ]);
  const [articles, setArticles] = React.useState(originalArticles.current);

  const handleSearch = () => {
    const filtered = originalArticles.current.filter(
      (a) =>
        a.title.includes(searchTitle) &&
        a.writer.includes(searchWriter)
    );
    setArticles(filtered);
  };

  const handleReset = () => {
    setArticles(originalArticles.current);
    setSearchTitle('');
    setSearchWriter('');
  };

  return (
    <div className="p-4">
      <div className="flex space-x-2 mb-4">
        <input
          className="border px-2 py-1"
          type="text"
          placeholder="제목"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
        <input
          className="border px-2 py-1"
          type="text"
          placeholder="작성자"
          value={searchWriter}
          onChange={(e) => setSearchWriter(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={handleSearch}>검색</button>
        <button className="bg-gray-300 px-3 py-1 rounded" onClick={handleReset}>초기화</button>
      </div>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">제목</th>
            <th className="border px-2 py-1">작성자</th>
            <th className="border px-2 py-1">작성일</th>
          </tr>
        </thead>
        <tbody>
          {articles.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center py-2">검색 결과 없음</td>
            </tr>
          ) : (
            articles.map((article) => (
              <tr key={article.id}>
                <td className="border px-2 py-1">{article.id}</td>
                <td className="border px-2 py-1">{article.title}</td>
                <td className="border px-2 py-1">{article.writer}</td>
                <td className="border px-2 py-1">{article.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<ArticleManager />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
