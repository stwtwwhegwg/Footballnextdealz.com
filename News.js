import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Bitte ersetze DEIN_API_KEY_HIER mit deinem echten API-Key von https://newsapi.org
  const API_KEY = 'DEIN_API_KEY_HIER';
  const NEWS_API_URL = `https://newsapi.org/v2/top-headlines?category=sports&q=football&language=de&pageSize=10&apiKey=${6ab5c9d548c641469c7411788a7c6f27}`;

  useEffect(() => {
    setLoading(true);
    axios.get(NEWS_API_URL)
      .then(response => {
        setArticles(response.data.articles);
        setLoading(false);
      })
      .catch(err => {
        setError('Fehler beim Laden der News.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Lade Nachrichten...</p>;
  if (error) return <p>{error}</p>;

  if (articles.length === 0) return <p>Keine News verfügbar.</p>;

  return (
    <div>
      <h1>Aktuelle Fußball-News</h1>
      {articles.map((article, index) => (
        <article key={index} style={{ marginBottom: '1.5rem' }}>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} style={{ maxWidth: '100%', height: 'auto' }} />
          )}
          <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            {article.title}
          </a>
          <p>{article.description}</p>
          <small>
            Quelle: {article.source.name} | {new Date(article.publishedAt).toLocaleDateString('de-DE')}
          </small>
        </article>
      ))}
    </div>
  );
}
