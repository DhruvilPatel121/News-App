import React from 'react'
import NewsCard from '../components/NewsCard'

function Sports() {

    const sportsNews = [
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
      <h1 className="text-4xl font-bold text-gray-800">Sports News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sportsNews.map((news, index) => (
          <NewsCard key={index} news={news} showCategory={true} />
        ))}
      </div>
    </div>
  )
}

export default Sports