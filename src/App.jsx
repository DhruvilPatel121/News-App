import React from "react"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes"


function App() {

  return (
    // <div>
    //   <h1>News App</h1>
    // </div>
    <RouterProvider router={router} />
  )
}

export default App
