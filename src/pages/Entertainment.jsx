import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import { fetchNews } from '../service/newsService'

function Entertainment() {
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEntertainmentNews = async () => {
      const data = await fetchNews('entertainment');
      setEntertainmentNews(data);
      setLoading(false);
    };
    
    getEntertainmentNews();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">Entertainment News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {entertainmentNews.map((news, index) => (
          <NewsCard key={index} news={news} showCategory={true} />
        ))}
      </div>
    </div>
  )
}

export default Entertainment