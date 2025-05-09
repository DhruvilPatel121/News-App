// import React from 'react'

// function NewsCard({news, showCategory = false}) {

//   const handleReadMore = () => {
//     window.open(news.url, '_blank', 'noopener,noreferrer');
//   }

//   return (
//     // <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
//       <img 
//         src={news.image} 
//         alt={news.title}
//         className="w-full h-48 object-cover"
//       />
//       {/* <div className="p-6"> */}
//         <div className="p-6 flex flex-col flex-grow">
//         {/* <div className="flex justify-between items-center mb-2 p-6"> */}
//         <div className="flex justify-between items-center mb-2">
//           {showCategory && (
//             <span className="text-blue-600 text-sm font-semibold">{news.category}</span>
//           )}
//           <span className="text-gray-500 text-sm">{news.source}</span>
//           </div>
//           <div className="text-gray-500 text-sm mb-2">{news.time}</div>
//           {/* {news.time && (
//             <span className="text-gray-500 text-sm">{news.time}</span>
//           )} */}
        
//         {/* <h2 className="text-xl font-bold text-gray-800 mt-2">{news.title}</h2> */}
//         <h2 className="text-xl font-bold text-gray-800 mt-2 mb-2 line-clamp-2">{news.title}</h2>
//         {/* <p className="text-gray-600 mt-2">{news.description}</p> */}
//         <p className="text-gray-600 mt-2 mb-4 line-clamp-3 flex-grow">{news.description}</p>
//         {/* <div className="mt-4 flex justify-between items-center"> */}
//         <div className="mt-auto">
//           <button onClick={handleReadMore} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300" >
//           {/* <button onClick={handleReadMore} className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300" > */}
//             Read More
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NewsCard













import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'


function NewsCard({news, showCategory = false}) {
  
  const handleReadMore = () => {
    window.open(news.url, '_blank');
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={news.image} 
          alt={news.title}
          className="w-full h-48 object-cover"
        />
        {/* <span className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 rounded-sm text-sm font-semibold"> */}
        <span className="absolute top-0 right-0 bg-[#e31837] text-white text-xs px-2 py-1 font-bold rounded-lg">
          {news.source}
        </span>
        {/* {showCategory && (
          <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {news.category}
          </span>
        )} */}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          {/* <span className="text-gray-500 text-sm font-medium">{news.source}</span> */}
           {showCategory && (
          <span className="text-blue-600 text-sm font-semibold">
            {news.category}
          </span>
        )}
          <span className="text-gray-500 text-sm">{news.time}</span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-800 mt-2 mb-2 line-clamp-2 hover:text-blue-600">
          {news.title}
        </h2>
        <p className="text-gray-600 mt-2 mb-4 line-clamp-3 flex-grow">
          {news.description}
        </p>
        <div className="text-gray-500 text-sm mt-2 mb-4">By {news.author}</div>
        <div className="mt-auto">
          <button 
            onClick={handleReadMore} 
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <span>Read Full Article</span>
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg> */}
            <FontAwesomeIcon icon={faArrowRightLong} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsCard