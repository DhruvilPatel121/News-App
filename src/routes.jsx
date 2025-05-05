
import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Business from "./pages/Business"



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/business",
        element: <Business />
      }
    ]
  }
])