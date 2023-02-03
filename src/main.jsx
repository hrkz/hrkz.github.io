import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import Home from './Home'
import About from './About'
import Error from './Error'

createRoot(document.getElementById('root')).render(
  <RouterProvider router=
    { createBrowserRouter([
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
        children: [
          {
            path: 'about',
            element: <About />
          }
        ]
      }])
    } 
  />
)
