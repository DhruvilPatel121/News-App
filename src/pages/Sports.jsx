// import React from 'react'

// function Sports() {
//   return (
//     <div>
//       Sports
//     </div>
//   )
// }

// export default Sports






















// import React, { useState, useEffect } from 'react'
// import NewsCard from '../components/NewsCard'
// import { fetchNews } from '../service/newsService'

// function Sports() {
//   const [sportsNews, setSportsNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getSportsNews = async () => {
//       const data = await fetchNews('sports');
//       setSportsNews(data);
//       setLoading(false);
//     };
    
//     getSportsNews();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <h1 className="text-4xl font-bold text-gray-800">Sports News</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {sportsNews.map((news, index) => (
//           <NewsCard key={index} news={news} showCategory={true} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Sports










import React from 'react'
import NewsCategory from './NewsCategory'

function Sports() {
  return (
    <NewsCategory category="sports" title="Sports News"/>
  )
}

export default Sports
