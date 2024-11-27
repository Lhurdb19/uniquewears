import Usernewsplace from './usernewsplace';
import React, { useEffect, useState } from 'react'

export default function Newsplaceholder() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchWomen = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/photos?_start0&_limit=20',
          {
            method: "GET",
          });
        const resData = await response.json();
        console.log(resData);
        setNews(resData);
      } catch (error) {
        console.log(error.message);
        window.alert(error.message);
      }
    };
    fetchWomen();
  }, []);
  return (
    <div className="news-card">
      {news.map((news) => (
        <Usernewsplace key={news.id} news={news} />
      ))}
    </div>
  );
}

