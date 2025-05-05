import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import { fetchNews } from '../service/newsService'

function Technology() {
  const [technologyNews, setTechnologyNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews('technology');
      setTechnologyNews(data);
      setLoading(false);
    };
    
    getNews();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Technology News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologyNews.map((news, index) => (
          <NewsCard key={index} news={news} showCategory={true} />
        ))}
      </div>
    </div>
  )
}

export default Technology