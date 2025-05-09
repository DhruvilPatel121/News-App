// import React, { useState } from 'react'
// import { fetchNews } from '../service/newsService'
// import NewsCard from './NewsCard'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

// function Search() {
//   const [searchQuery, setSearchQuery] = useState('')
//   const [searchResults, setSearchResults] = useState([])
//   const [showResults, setShowResults] = useState(false)
//   const [loading, setLoading] = useState(false)

//   const handleSearch = async (e) => {
//     e.preventDefault()
//     if (searchQuery.trim()) {
//       setLoading(true)
//       try {
//         const results = await fetchNews({ query: searchQuery })
//         setSearchResults(results)
//         setShowResults(true)
//       } catch (error) {
//         console.error('Search error:', error)
//       } finally {
//         setLoading(false)
//       }
//     }
//   }
  
//   const closeSearch = () => {
//     setShowResults(false)
//     setSearchQuery('')
//     setSearchResults([])
//   }

//   return (
//     <>
//       <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
//         <div className="relative">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search news by topic, source, or category..."
//             className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
//           />
//           <button
//             type="submit"
//             className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
//           >
//             <FontAwesomeIcon icon={faSearch} />
//           </button>
//         </div>
//       </form>

//       {showResults && (
//         <div className="fixed inset-x-0 top-16 bottom-0 bg-gray-50 z-40 overflow-y-auto">
//           <div className="container mx-auto px-4 py-8">
//             {/* <div className="flex justify-between items-center mb-6"> */}
//             <div className="flex justify-between items-center mb-6 sticky top-0 bg-white px-2 py-2">
//               <div className="sticky top-0">
//                 <h2 className="text-2xl font-bold font-bold text-gray-800">
//                 Search Results for "{searchQuery}"
//                 </h2>
//               </div>
//               <button
//                 // onClick={() => {
//                 //   setShowResults(false)
//                 //   setSearchQuery('')
//                 // }}
//                 onClick={closeSearch}
//                 className="text-gray-500 hover:text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
//               >
//                 {/* Close */}
//                 <FontAwesomeIcon icon={faTimes} />
//               </button>
//             </div>

//              {loading ? (
//               <div className="text-center py-10">
//                 <p className="text-gray-600">Searching...</p>
//               </div>
//             ) : 
//             searchResults.length > 0 ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {searchResults.map((news, index) => (
//                   <NewsCard key={index} news={news} showCategory={true} />
//                 ))}
//               </div>
//             ) : (
//               <div className="bg-white rounded-lg shadow-lg p-8 text-center">
//                 <p className="text-xl text-gray-600">
//                   No results found for "{searchQuery}"
//                 </p>
//                 <p className="mt-2 text-gray-500">
//                   Try different keywords or check your spelling
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Search


























import React, { useState } from 'react'
import { fetchNews } from '../service/newsService'
import NewsCard from './NewsCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import Loader from './Loader'

function Search() {
  
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showResults, setShowResults] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setLoading(true)
      setShowResults(true)
      try {
        const results = await fetchNews({ query: searchQuery })
        setSearchResults(results)
        // setShowResults(true)
      } catch (error) {
        console.error('Search error:', error)
      } finally {
        setLoading(false)
      }
    }
  }
  
  const closeSearch = () => {
    setShowResults(false)
    setSearchQuery('')
    setSearchResults([])
  }

  return (
    <>
      <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search news by topic, source, or category..."
            className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>

      {showResults && (
        <div className="fixed inset-x-0 top-16 bottom-0 bg-gray-50 z-50 overflow-y-auto">
          <div className="container mx-auto px-4 py-8 ">
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-white px-2 py-2 z-50">
                <h2 className="text-2xl font-bold font-bold text-gray-800">
                Search Results for "{searchQuery}"
                </h2>
              <button
                onClick={closeSearch}
                className="text-gray-500 hover:text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

             {loading ? (
              // <div className="text-center py-10">
              //   <p className="text-gray-600">Searching...</p>
              // </div>
              <Loader />
            ) : 
            searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((news, index) => (
                  <NewsCard key={index} news={news} showCategory={true} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                <p className="text-xl text-gray-600">
                  No results found for "{searchQuery}"
                </p>
                <p className="mt-2 text-gray-500">
                  Try different keywords or check your spelling
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Search