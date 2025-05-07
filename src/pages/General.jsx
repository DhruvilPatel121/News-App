// // import React from 'react'

// // function General() {
// //   return (
// //     <div>
// //       General
// //     </div>
// //   )
// // }

// // export default General






















// import React, { useState, useEffect } from 'react'
// import NewsCard from '../components/NewsCard'
// import { fetchNews } from '../service/newsService'

// function General() {
//   const [generalNews, setGeneralNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getGeneralNews = async () => {
//       const data = await fetchNews('general');
//       setGeneralNews(data);
//       setLoading(false);
//     };
    
//     getGeneralNews();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <h1 className="text-4xl font-bold text-gray-800">General News</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {generalNews.map((news, index) => (
//           <NewsCard key={index} news={news} showCategory={true} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default General










import React from 'react'
import NewsCategory from './NewsCategory'

function General() {
  return (
    <NewsCategory category='general' title='General News' />
  )
}

export default General
