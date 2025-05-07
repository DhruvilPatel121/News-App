// import React, {useState, useEffect} from 'react'
// import NewsCard from '../components/NewsCard'
// import { fetchNews } from '../service/newsService';
// function Home() {
//   // const dummyNews = [
//   //   {
//   //     title: "Latest Technology Trends 2024",
//   //     description: "Exploring the cutting-edge developments in AI and machine learning...",
//   //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCG8bdz72RB6O6rY84damqYuGItpVpceLOX0wJEDccig&s&ec=72940543",
//   //     category: "Technology"
//   //   },
//   //   {
//   //     title: "Global Economic Updates",
//   //     description: "Markets show positive trends as global economy strengthens...",
//   //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfcp3EZxLI-hNT6Jtb6-1pK7Re2xT3GiNtOxK9ip1Uw&s&ec=72940543",
//   //     category: "Business"
//   //   },
//   //   // Add more dummy news items as needed
//   // ]

//   const [news, setNews] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadNews = async () => {
//       const articles = await fetchNews('');
//       setNews(articles);
//       setLoading(false);
//     };

//     loadNews();
//   }, []);

//   if (loading) {
//     return <div className="text-center py-10">Loading...</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <h1 className="text-4xl font-bold text-gray-800">Today's Headlines</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* {dummyNews.map((news, index) => (
//           <NewsCard key={index} news={news} showCategory={true} />
//         ))} */}
//         {news.map((item, index) => (
//           <NewsCard key={index} news={item} showCategory={true} />
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Home
















import React from 'react'
import NewsCategory from './NewsCategory'

function Home() {
  return (
    <NewsCategory category="" title="Today's Headline" />
  )
}

export default Home
