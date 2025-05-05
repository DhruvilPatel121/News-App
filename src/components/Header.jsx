// import React from 'react'

// function Header() {
//   return (
//     <div>
//       Header
//     </div>
//   )
// }

// export default Header













import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Search from './Search'

function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/business', name: 'Business' },
    { path: '/entertainment', name: 'Entertainment' },
    { path: '/general', name: 'General' },
    { path: '/health', name: 'Health' },
    { path: '/sports', name: 'Sports' },
    { path: '/science', name: 'Science' },
    { path: '/technology', name: 'Technology' },
  ]

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          
          <NavLink to="/" className="flex items-center space-x-2">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
            </svg> */}
            <span className="text-2xl font-bold text-blue-600">NewsHub</span>
          </NavLink>

          <Search />

          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `${
                    isActive 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-500'
                  } py-5 font-medium transition-colors duration-200`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none"
          >
            {/* <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg> */}
            {/* {isMenuOpen ? '✕' : '☰'} */}
            <FontAwesomeIcon 
              icon={isMenuOpen ? faXmark : faBars} 
              className="h-6 w-6"
            />
          </button>
        </nav>

        
        {isMenuOpen && (
          <div className="lg:hidden py-2 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `${
                    isActive 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-600 hover:bg-gray-50'
                  } block px-3 py-2 rounded-md text-base font-medium`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
