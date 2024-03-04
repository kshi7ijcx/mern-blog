import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'

import Blogs from './pages/Blogs'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const router = createBrowserRouter([
  {
    path: '/',element:<App/>,children:[
      {index: true, element: <Blogs/>},
      {path:'login',element: <Login/>},
      {path:'register',element: <Register/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
