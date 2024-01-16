import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch, createBrowserRouter, RouterProvider } from "react-router-dom";
import Addcar from './components/Addcar';
import Manage from './components/Manage';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';

const router = createBrowserRouter([
{
  path:"/",
  element: <App/>,
  children: [
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "add-car",
      element: <Addcar/>
    },
    {
      path:"manage",
      element:<Manage/>
    },
    {
      path:"services",
      element: <Services/>
    },
    {
      path:"contact",
      element: <Contact/>
    }

  ]
}
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

