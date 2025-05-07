// // import React from 'react'

// // function Health() {
// //   return (
// //     <div>
// //       Health
// //     </div>
// //   )
// // }

// // export default Health






















// import React, { useState, useEffect } from 'react'
// import NewsCard from '../components/NewsCard'
// import { fetchNews } from '../service/newsService'

// function Health() {
//   const [healthNews, setHealthNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getHealthNews = async () => {
//       const data = await fetchNews('health');
//       setHealthNews(data);
//       setLoading(false);
//     };
    
//     getHealthNews();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <h1 className="text-4xl font-bold text-gray-800">Health News</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {healthNews.map((news, index) => (
//           <NewsCard key={index} news={news} showCategory={true} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Health










import React from 'react'
import NewsCategory from './NewsCategory'

function Health() {
  return (
    <NewsCategory category='health' title='Health News' />
  )
}

export default Health
