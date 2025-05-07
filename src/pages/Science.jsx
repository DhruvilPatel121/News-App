// // import React from 'react'

// // function Science() {
// //   return (
// //     <div>
// //       Science
// //     </div>
// //   )
// // }

// // export default Science






















// import React, { useState, useEffect } from 'react'
// import NewsCard from '../components/NewsCard'
// import { fetchNews } from '../service/newsService'

// function Science() {
//   const [scienceNews, setScienceNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getScienceNews = async () => {
//       const data = await fetchNews('science');
//       setScienceNews(data);
//       setLoading(false);
//     };
    
//     getScienceNews();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <h1 className="text-4xl font-bold text-gray-800">Science News</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {scienceNews.map((news, index) => (
//           <NewsCard key={index} news={news} showCategory={true} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Science










import React from 'react'
import NewsCategory from './NewsCategory'

function Science() {
  return (
    <NewsCategory category='science' title='Science News' />
  )
}

export default Science
