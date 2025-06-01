import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Dein API-Key ist direkt eingebaut
const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?category=sports&q=football&language=de&pageSize=10&apiKey=6ab5c9d548c641469c7411788a7c6f27`;

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(NEWS_API_URL);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Fehler beim Laden der News:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">📰 Fußball-News</h1>
      {loading ? (
        <p>Lade Nachrichten...</p>
      ) : (
        <div className="space-y-4">
          {articles.map((article, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-md">
              <h2 className="text-lg font-semibold">{article.title}</h2>
              {article.urlToImage && (
                <img src={article.urlToImage} alt="News" className="w-full h-auto my-2 rounded" />
              )}
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 mt-2 block">
                Weiterlesen →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default News;
