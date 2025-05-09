// // import React from 'react'

// // function Layout() {
// //   return (
// //     <div>
// //       Layout
// //     </div>
// //   )
// // }

// // export default Layout













// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Header from '../components/Header' 
// function Layout() {

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header />

//       <main className="flex-grow container mx-auto px-4 py-8">
//         <Outlet />
//       </main>

//       <footer className="bg-white shadow-lg">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <div className="text-gray-600">
//               © 2025 NewsHub. All rights reserved.
//             </div>
//             <div className="flex space-x-6">
//               <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
//                 About
//               </a>
//               <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   )
// }

// export default Layout
















import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header' 
import Footer from '../components/Footer'

function Layout() {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout