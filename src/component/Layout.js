import React from 'react';
import Routes from '../Routes';
import Sidebar from './Sidebar';
import NavBar from './Navbar';
​
function Layout(props) {
    return (
        <div>
            <div style={{display: "flex"}}>
                <Sidebar/>
                <div>
                    <NavBar/>
                    <Routes/>
                </div>
            </div>
        </div>
    );
}
​
export default Layout;