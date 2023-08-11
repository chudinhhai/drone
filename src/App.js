import React from "react";
import NavBar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import DroneManager from "./Routes/DroneManager";
import PackageManager from "./Routes/PackageManager";
import MapManager from "./Routes/MapManager";
import { createContext } from "react";
import { useContext } from "react";
import { Switch } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
const App = () => {
    const [sidebarWidth, setSidebarWidth] = useState(250);
    const handleSidebarResize = (newWidth) => {
        setSidebarWidth(newWidth);
      };

    return (
        <BrowserRouter>
            <NavBar onResize={handleSidebarResize} />
            <Routes>
                    <Route 
                        path="/" 
                        render={(props) => <Home {...props} sidebarWidth={sidebarWidth} />}
                    />
                    <Route 
                        path="/drone"
                        element={<DroneManager/>}
                        render={(props) => <DroneManager {...props} sidebarWidth={sidebarWidth} />}
                    />
                    <Route path="/package" element={<PackageManager/>}
                        render={(props) => <PackageManager {...props} sidebarWidth={sidebarWidth} />}
                    />
                    <Route path="/map" element={<MapManager/>}
                        render={(props) => <MapManager {...props} sidebarWidth={sidebarWidth} />}
                    />
            </Routes>

        </BrowserRouter>
    )
}

export default App;