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
