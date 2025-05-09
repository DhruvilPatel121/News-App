// import React, { useState, useEffect } from 'react'
// import NewsCard from '../components/NewsCard'
// import { fetchNews } from '../service/newsService'

// function Business() {
//   // const businessNews = [
//   //   {
//   //     title: "Stock Market Hits New Record",
//   //     description: "Global markets reach unprecedented heights as investor confidence grows...",
//   //     image: "https://source.unsplash.com/random/800x600/?stock-market",
//   //     time: "2 hours ago",
//   //     category: "Business"
//   //   },
//   //   {
//   //     title: "Tech Giants Report Strong Earnings",
//   //     description: "Major technology companies exceed quarterly expectations...",
//   //     image: "https://source.unsplash.com/random/800x600/?technology-business",
//   //     time: "4 hours ago",
//   //     category: "Business"
//   //   },
//   // ]

//   const [businessNews, setBusinessNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getBusinessNews = async () => {
//       const news = await fetchNews('business');
//       setBusinessNews(news);
//       setLoading(false);
//     };
    
//     getBusinessNews();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <h1 className="text-4xl font-bold text-gray-800">Business News</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {businessNews.map((news, index) => (
//           <NewsCard key={index} news={news} showCategory={true} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Business

















import React from 'react'
import NewsCategory from './NewsCategory'

function Business() {
  return (
    <NewsCategory category='business' title='Business News' />
  )
}

export default Business
