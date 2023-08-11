// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { createRoot } from 'react-dom/client';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
//   Outlet
// } from 'react-router-dom';
// import Home from './Routes/Home';
// import DroneManager from './Routes/DroneManager';
// import PackageManager from './Routes/PackageManager';
// import './App.css';
// import Navbar from './component/Navbar';  
// import MapManager from './Routes/MapManager';

// const AppLayout = () => (
//   <>
//     <Navbar/>
//     <Outlet/>
//   </>
// )

// const router = createBrowserRouter([
//   {
//     children: [
//       {
//         path: "/",
//         element: (<Home/>)
//       },
//       {
//         path: "/droneManager",
//         element: (<DroneManager/>)
//       },
//       {
//         path: "/packageManager",
//         element: (<PackageManager/>)
//       },
//       {
//         path: "/map",
//         element: (<MapManager/>)
//       }
//     ]
//   }
 
// ]);

// createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router}/>
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();