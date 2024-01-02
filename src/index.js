import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Aboutus from './components/Aboutus';
import Contactus from './components/Contactus';
import Main from "./components/Main";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Order from './components/Order';

const root = ReactDOM.createRoot(document.getElementById('root'));
const appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[
    {
      path:"/",
      element:<Main/>,
    },
    {
      path:"/aboutus",
      element:<Aboutus/>
    },
    {
      path:"/contactus",
      element:<Contactus/>
    },
    {
      path:"/ordernow",
      element:<Order/>
    }
  ]
},
{
  path:"/aboutus",
  element:<Aboutus/>,
},
{
  path :"/contactus",
  element:<Contactus/>
}


])

root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);