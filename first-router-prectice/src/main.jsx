import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './header/Header';
import Shop from './header/Shop';
import Blog from './header/Blog';
import Users from './header/Users';
import Contact from './header/Contact';
import Details from './header/Details';
import BlogsDetails from './header/BlogsDetails';
const fetchData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/azmiruddin-143/Blog-Api/refs/heads/main/All%20Product"
  );
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children : [
      {
        path:"/shop",
        element: <Shop></Shop>,
        loader: fetchData
      },
      {
        path:"/blog",
        element: <Blog></Blog>,
        // loader: fetchData
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts")
      },

      {
        path:"/singleblog/:blogid",
        element: <BlogsDetails></BlogsDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogid}`)
      },
      
      {
        path:"/users",
        element: <Users></Users>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
       path:"/user/:userid",
       element: <Details></Details>,
       loader : ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      }
    ]
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router}> <div>hellow</div>  </RouterProvider>
  </StrictMode>,
)
