import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home/Home';
import Main from './Layout/Main';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Login/Login';
import Registration from './Registration/Registration';
import LoginWEP from './Login/LoginWEP';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
         element:<Home></Home>
      },
      {
        path: '/login',
         element:<Login></Login>
      },
      {
        path: '/heroLogin',
         element:<Registration></Registration>
      },
      {
        path: '/loginWEP',
         element:<LoginWEP></LoginWEP>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
