// import React, { useState, useEffect } from 'react'
// import NewsCard from '../components/NewsCard'
// import { fetchNews } from '../service/newsService'

// function NewsCategory({ category, title }) {

//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getNews = async () => {
//       const data = await fetchNews(category);
//       setNews(data);
//       setLoading(false);
//     };
    
//     getNews();
//   }, [category]);

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {news.map((item, index) => (
//           <NewsCard key={index} news={item} showCategory={true} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default NewsCategory















import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import { fetchNews } from '../service/newsService'
import Loader from '../components/Loader'

function NewsCategory({ category, title }) {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews(category);
      setNews(data);
      setLoading(false);
    };
    
    getNews();
  }, [category]);

  if (loading) {
    // return <div className="text-center py-10">Loading...</div>;
    return <Loader />
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item, index) => (
          <NewsCard key={index} news={item} showCategory={true} />
        ))}
      </div>
    </div>
  )
}

export default NewsCategory
