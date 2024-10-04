import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContactUs from "./components/ContactUs"
import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom'
import Layout from './Layout.jsx'
import LocomotiveScroll from 'locomotive-scroll';


//const locomotiveScroll = new LocomotiveScroll();
function ScrollToTop() {

  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  // console.log(pathname);
  
  
  return null;
}
const router =createBrowserRouter([
  {
    path:'/',
    element:(
      <>
      <ScrollToTop/>
      <Layout/>
      </>
    ),
    children:[
      {
        path:"contact",
        element:<ContactUs/>
      },
      {
        path:"",
        element:<App/>
      }
    ]

  }
])
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
