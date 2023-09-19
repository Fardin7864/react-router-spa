import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Details from './Components/companyDetails/Details';
import Users from './Components/Users/Users';
import Posts from './Components/Posts/Posts';
import UserDetails from './Components/UserDetails/UserDetails';
import PostDetails from './Components/PostDetails/PostDetails';
import Error from './Components/Error/Error';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
        children: [
          {
            path: '/contact/details',
            element: <Details></Details>
          }
        ]
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path: '/user/:Id',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.Id}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/post/:Id',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.Id}`),
        element: <PostDetails></PostDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
