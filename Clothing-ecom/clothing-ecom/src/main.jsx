import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'swiper/css';
import Home from './home/Home.jsx';
import Blog from './blog/Blog.jsx'

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './shop/Shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },{
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/shop",
        element: <Shop></Shop>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)