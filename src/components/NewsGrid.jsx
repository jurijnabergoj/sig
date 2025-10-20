import { Link } from "react-router-dom";
import "./NewsGrid.css";
import { useEffect, useState } from "react";

export default function NewsGrid() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:1337/api/articles?populate=*"
    )
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.data);
        console.log(data.data);
      })
      .catch((err) => console.log("Failed to fetch articles", err));
  }, []);

  return (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
        laborum earum, voluptatibus, sint sit rem quidem commodi cum modi
        debitis adipisci tempora voluptate laudantium voluptates mollitia
        temporibus quo pariatur molestiae!
      </p>
      <div className="news-grid">
        {articles.map((article) => {
          const { id, slug, title, cover, updatedAt } = article;
          return (
            <Link
              to={`/news/${id}`}
              key={id}
              className="news-card"
              state={{ article }}
            >
              <div className="news-item">
                <div className="news-image-container">
                  <img src={getImageUrl(cover.url)} alt={title} />
                </div>
                <div className="news-content">
                  <p className="news-date">{formatDate(updatedAt)}</p>
                  <h1 className="news-title">{title}</h1>
                  <hr />
                  <p className="news-description">{slug}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

function getImageUrl(url) {
  return "http://localhost:1337" + url;
}

function formatDate(isoDate) {
  const date = new Date(isoDate);
  const formattedDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;
  return formattedDate;
}
