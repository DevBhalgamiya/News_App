/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import "./NewsContainer.css"; // Import CSS file for styling

export default function NewsContainer({ country, apiKey, category, page, pageSize }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function getData() {
      const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getData();
  }, [country, category, page, apiKey, pageSize]);

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <div key={index} className="article">
          <h1>{article.title}</h1>
          <p>{article.description}</p>
          <p className="info">Author: {article.author ? article.author : "Unknown"}</p>
          <p className="info">Published At: {new Date(article.publishedAt).toDateString()}</p>
          <img src={article.urlToImage} alt={article.title} className="article-image" />
          <button><a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a></button>
        </div>
      ))}
    </div>
  );
}
