import React from "react";
import * as FalIcons from 'react-icons/fa';
import * as AiIcon from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcon.AiFillHome/>,
        cName: "nav-text"
    },
    {
        title: "Drone Management",
        path: "/drone",
        icon: <AiIcon.AiFillBug/>,
        cName: "nav-text"
    },
    {
        title: "Package Management",
        path: "/package",
        icon: <AiIcon.AiFillDropboxCircle/>,
        cName: "nav-text"
    },
    {
        title: "Map",
        path: "/map",
        icon: <AiIcon.AiFillCompass/>,
        cName: "nav-text"
    },
]