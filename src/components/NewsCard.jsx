import React from 'react'

function NewsCard({news, showCategory = false}) {

  const handleReadMore = () => {
    window.open(news.url, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={news.image} 
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-2 p-6">
          {showCategory && (
            <span className="text-blue-600 text-sm font-semibold">{news.category}</span>
          )}
          <span className="text-gray-500 text-sm">{news.source}</span>
          </div>
          <div className="text-gray-500 text-sm mb-2">{news.time}</div>
          {/* {news.time && (
            <span className="text-gray-500 text-sm">{news.time}</span>
          )} */}
        
        <h2 className="text-xl font-bold text-gray-800 mt-2">{news.title}</h2>
        <p className="text-gray-600 mt-2">{news.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <button onClick={handleReadMore} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300" >
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
