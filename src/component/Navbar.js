import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {SidebarData} from './SidebarData';
import '../App.css';
import * as FalIcons from 'react-icons/fa';
import * as AiIcon from 'react-icons/ai';
import { IconContext } from "react-icons";
import { Resizable } from "react-resizable";

function NavBar({ onResize }) {

    const [sidebarWidth, setSidebarWidth] = useState(0);

    const [sidebar, setSidebar] = useState(false);
    
    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    const handleMouseMove = (e) => {
        const newWidth = e.pageX;
        setSidebarWidth(newWidth);
        onResize(newWidth); // Notify the parent component (App.js) about the new width
    };

    return (
        <>
            <IconContext.Provider value={{ color: "undefined" }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FalIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <Link to="/home" className="menu-home">
                        Home
                    </Link>
                </div>
                <div
                style={{ width: sidebarWidth }}
                >
                    <nab className={sidebar ? "nav-menu active" : "nav-menu"}>
                        <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle">
                                <Link to="#" className="menu-bars">
                                    <AiIcon.AiOutlineClose/>
                                </Link>
                            </li>
                                {SidebarData.map((item, index) => {
                                    return(
                                        <li key={index} className={item.cName}>
                                            <Link to={item.path}> 
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                        </ul>
                    </nab>
                </div>
                
            </IconContext.Provider>
        </>
    )
}
export default NavBar;