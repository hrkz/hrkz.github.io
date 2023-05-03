import React from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

import './index.scss'

import Base from './Base'
import Notes from './_Notes'
import Academic from './_Academic'
import Projects from './_Projects'
import Error from './Error'

createRoot(document.getElementById('root')).render(
  <RouterProvider router=
    { createHashRouter([
      {
        path: '/',
        element: <Base />,
        errorElement: <Error />,
        children: [
          { path: 'notes',    element: <Notes /> },
          { path: 'academic', element: <Academic /> },
          { path: 'projects', element: <Projects /> }
        ]
      }])
    } 
  />
)
