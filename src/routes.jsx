
import { createBrowserRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Business from "./pages/Business"
import Entertainment from "./pages/Entertainment"
import General from "./pages/General"
import Health from "./pages/Health"
import Sports from "./pages/Sports"
import Science from "./pages/Science"
import Technology from "./pages/Technology"


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
      },
      {
        path: "/entertainment",
        element: <Entertainment />
      },
      {
        path: "/general",
        element: <General />
      },
      {
        path: "/health",
        element: <Health />
      },
      {
        path: "/sports",
        element: <Sports />
      },
      {
        path: "/science",
        element: <Science />
      },
      {
        path: "/technology",
        element: <Technology />
      }
    ]
  }
])