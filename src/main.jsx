import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Design from "./pages/Design/Design";
import Marketing from "./pages/Marketing/Marketing";
import Media from "./pages/Media/Media";
import Website from "./pages/Website/Website";
import Branding from "./pages/Design/Branding/Branding";
import Corporate from "./pages/Design/Corporate/Corporate"
import Logo from "./pages/Design/Logo/Logo"
import Packaging from "./pages/Design/Packaging/Packaging"
import Print from "./pages/Design/Print/Print"
import Trade from "./pages/Design/Trade/Trade"
import SocialMedia from "./pages/Marketing/SocialMedia/SocialMedia"
import ThreeD from "./pages/Media/3D/3D"
import Drone from "./pages/Media/Drone/Drone"
import Photo from "./pages/Media/Photo/Photo"
import Video from "./pages/Media/Video/Video"
import Virtual from "./pages/Media/Virtual/Virtual"
import GetInTouch from './pages/GetInTouch/GetInTouch';
import Products from './pages/Media/Products/Products';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/design",
        element: <Design />
      },
      {
        path: "/marketing",
        element: <Marketing />
      },
      {
        path: "/media",
        element: <Media />
      },
      {
        path: "/website",
        element: <Website />
      },
      {
        path: "/design/branding",
        element: <Branding />
      },
      {
        path: "/design/corporate",
        element: < Corporate />
      },
      {
        path: "/design/logo",
        element: < Logo />
      },
      {
        path: "design/packaging",
        element: < Packaging />
      },
      {
        path: "/design/print",
        element: < Print />
      },
      {
        path: "/design/trade",
        element: < Trade />
      },
      {
        path: "/marketing/social-media",
        element: < SocialMedia />
      },
      {
        path: "/media/3d",
        element: < ThreeD />
      },
      {
        path: "/media/drone",
        element: < Drone />
      },
      {
        path: "/media/photo",
        element: < Photo />
      },
      {
        path: "/media/video",
        element: < Video />
      },
      {
        path: "/media/virtual",
        element: < Virtual />
      },
      {
        path: "/media/products",
        element: <Products/>
      },
      {
        path: "/get-in-touch",
        element: <GetInTouch />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
