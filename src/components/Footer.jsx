import React from 'react'

function Footer() {
  return (
    <footer className="bg-white shadow-lg">
        {/* <div className="container mx-auto px-4 py-6"> */}
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600">
              © 2025 NewsHub by Dhruvil. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>
        {/* </div> */}
      </footer>
  )
}

export default Footer