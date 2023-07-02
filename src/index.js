import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from 'react-router-dom';
import Home from './Routes/Home';
import DroneManager from './Routes/DroneManager';
import PackageManager from './Routes/PackageManager';
import './App.css';
import Navbar from './component/Navbar';  

const AppLayout = () => (
  <>
    <Navbar/>
    <Outlet/>
  </>
)

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: (<Home/>)
      },
      {
        path: "/droneManager",
        element: (<DroneManager/>)
      },
      {
        path: "/packageManager",
        element: (<PackageManager/>)
      },
      {
        path: "/account",
        element: (<Home/>)
      }
    ]
  }
 
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
)
