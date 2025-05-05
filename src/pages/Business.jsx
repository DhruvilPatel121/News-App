import React, { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'

function Business() {

  const businessNews = [
    {
      title: "Stock Market Hits New Record",
      description: "Global markets reach unprecedented heights as investor confidence grows...",
      image: "https://source.unsplash.com/random/800x600/?stock-market",
      time: "2 hours ago",
      category: "Business"
    },
    {
      title: "Tech Giants Report Strong Earnings",
      description: "Major technology companies exceed quarterly expectations...",
      image: "https://source.unsplash.com/random/800x600/?technology-business",
      time: "4 hours ago",
      category: "Business"
    },
  ]


  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-800">Business News</h1>
        <select className="px-4 py-2 border rounded-md bg-white">
          <option>Latest First</option>
          <option>Most Popular</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businessNews.map((news, index) => (
          <NewsCard key={index} news={news} showCategory={true} />
        ))}
      </div>
    </div>
  )
}

export default Business