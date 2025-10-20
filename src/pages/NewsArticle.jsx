import { useLocation, useNavigate } from "react-router-dom";
import "./NewsArticle.css";

export default function NewsArticle() {
  const location = useLocation();
  const navigate = useNavigate();

  const article = location.state?.article;
  console.log(article);
  if (!article)
    return (
      <p>
        Članek ni najden.
        <button onClick={() => navigate("/")}>Vrni se nazaj.</button>
      </p>
    );

  return (
    <div className="news-article-container">
      <div className="news-article-wrapper">
        <div className="news-article-banner">
          <img src={getImageUrl(article.cover.url)} alt={article.title} />
        </div>
        <div className="news-article-content">
          <p className="news-article-date">{article.date}</p>
          <h1 className="news-article-title">{article.title}</h1>
          <hr />
          <p className="news-article-fulltext">{article.content}</p>
        </div>
      </div>
    </div>
  );
}

function getImageUrl(url) {
  return "http://localhost:1337" + url;
}
