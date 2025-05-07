// // import React from 'react'
// // import NewsCard from '../components/NewsCard'

// // function Entertainment() {

// //   const dummyNews1 = [
// //     {
// //       id: "1",
// //       title: "Latest Technology Trends 2024",
// //       description: "Exploring the cutting-edge developments in AI and machine learning...",
// //       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCG8bdz72RB6O6rY84damqYuGItpVpceLOX0wJEDccig&s&ec=72940543",
// //       category: "Technology"
// //     },
// //     {
// //       id: "2",
// //       title: "Global Economic Updates",
// //       description: "Markets show positive trends as global economy strengthens...",
// //       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfcp3EZxLI-hNT6Jtb6-1pK7Re2xT3GiNtOxK9ip1Uw&s&ec=72940543",
// //       category: "Business"
// //     },
// //   ]
  
// //   return (
// //     <div className="space-y-6">
// //       <h1 className="text-4xl font-bold text-gray-800">Entertainment News</h1>
// //       <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {dummyNews1.map(( news, index ) => (
// //           <NewsCard key={index} news={news} showCategory={true}/>
// //         ))}
// //       </div>
// //     </div>
// //   )
// // }

// // export default Entertainment



























// import React, { useState, useEffect } from 'react'
// import NewsCard from '../components/NewsCard'
// import { fetchNews } from '../service/newsService'

// function Entertainment() {
//   const [entertainmentNews, setEntertainmentNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getEntertainmentNews = async () => {
//       const data = await fetchNews('entertainment');
//       setEntertainmentNews(data);
//       setLoading(false);
//     };
    
//     getEntertainmentNews();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <h1 className="text-4xl font-bold text-gray-800">Entertainment News</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {entertainmentNews.map((news, index) => (
//           <NewsCard key={index} news={news} showCategory={true} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Entertainment










import React from 'react'
import NewsCategory from './NewsCategory'

function Entertainment() {
  return (
    <NewsCategory category='entertainment' title='Entertainment News' />
  )
}

export default Entertainment
