import "./index.css";
import { news_list } from "./news_list";

function News() {
  return (
    <div className="news-section">
      <h2 id="title-news-section">Últimas notícias</h2>
      <div className="news-list">
        {news_list.map((news) => (
          <div href="" className="news-card">
            <h3>{news.title}</h3>
            <img src={news.image} alt={news.title} />
            <p className="news-card-content">{news.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
