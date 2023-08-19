import {React, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {SidebarData} from './SidebarData';
import '../App.css';
import * as FalIcons from 'react-icons/fa';
import * as AiIcon from 'react-icons/ai';
import { IconContext } from "react-icons";
import { Resizable } from "react-resizable";
import { Stack, Typography, Button, IconButton, Menu, MenuItem, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MessagePopupForm from "./MessageForm.js";

function NavBar({ onResize }) {

    const [sidebarWidth, setSidebarWidth] = useState(0);

    const [sidebar, setSidebar] = useState(false);
    const [openMessage, setOpenMessage] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOpenMessage = () => {
        setOpenMessage(true);
      };
      const handleCloseMessage = () => {
        setOpenMessage(false);
      };
    const open = Boolean(anchorEl);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpenDialog = () => {
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);

    };
    
    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    const handleMouseMove = (e) => {
        const newWidth = e.pageX;
        setSidebarWidth(newWidth);
        onResize(newWidth); 
    };

    return (
        <>
            <IconContext.Provider value={{ color: "undefined" }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FalIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    <Typography variant="h6" component='div' sx={{ flexGrow: 1}}>
                        Dashboard
                    </Typography>
                    <Stack direction='row' spacing={2}>
                        <IconButton color='inherit' onClick={handleClick}>
                            <NotificationsIcon/>
                        </IconButton>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                            {"Ticket return "}
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                            Khieu nai cua ban da duoc tra loi, vui long kiem tra email cua ban
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>Close</Button>
                            </DialogActions>
                        </Dialog>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <div>
                                    <Card sx={{minWidth: '400px'}}>
                                        <CardContent>
                                            <Typography sx={{fontWeight: 'bold'}}> Ticket return </Typography>
                                            <Typography>Khieu nai cua ban da duoc tra loi, vui long kiem ...</Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <div>
                                    <Card sx={{minWidth: '400px', backgroundColor: "lightgray"}}>
                                        <CardContent>
                                            <Typography sx={{fontWeight: 'bold'}}> Package Status </Typography>
                                            <Typography>Don hang iewur8473jdjdoa dang duoc van chuy...</Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <div>
                                    <Card sx={{minWidth: '400px', backgroundColor: "lightgray"}}>
                                        <CardContent>
                                            <Typography sx={{fontWeight: 'bold'}}> Package Status </Typography>
                                            <Typography>Don hang iewur8473jdjdoa da nhan thanh cong,...</Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <div>
                                    <Card sx={{minWidth: '400px', backgroundColor: "lightgray"}}>
                                        <CardContent>
                                            <Typography sx={{fontWeight: 'bold'}}> Package Status </Typography>
                                            <Typography>Khieu nai cua ban da duoc tra loi, vui long kiem...</Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <div>
                                    <Card sx={{minWidth: '400px', backgroundColor: "lightgray"}}>
                                        <CardContent>
                                            <Typography sx={{fontWeight: 'bold'}}> Account status </Typography>
                                            <Typography>Tai khoan da xac thuc thanh cong</Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <Button variant='contained' className='button' >View All</Button>
                            </MenuItem>
                        </Menu>
                        <IconButton color='inherit' onClick={handleOpenMessage}>
                            <EmailIcon/>
                        </IconButton>
                        
                        <IconButton color='inherit'>
                            <AccountCircleIcon/>
                        </IconButton>
                    </Stack>
                    <MessagePopupForm open={openMessage} onClose={handleCloseDialog} />
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