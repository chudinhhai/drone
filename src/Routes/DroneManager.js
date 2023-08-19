import { Box, Card, CardContent, Paper, Stack, Typography, Button, InputBase, InputAdornment } from '@mui/material'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { Grid } from 'react-bootstrap'
import Map from '../component/Map';
import { useState } from 'react';
import AddDronePopupForm from '../component/AddDroneForm';
import SearchIcon from '@mui/icons-material/Search';

function createData(name, id, modelName, weight, speed, height, createdAt, status, available, link, isButton) {
  return {name, id, modelName, weight, speed, height, createdAt, status, available, link, isButton}
}

const useStyles = makeStyles({
  card: {
    borderTop: '2px solid green',
    width: "100%",
  },
  cardHeader: {
    borderBottom: '1px solid lightgray',
    padding: "10px",
    paddingBottom: "2px"
  }, 
  statusActive: {
    backgroundColor: "green",
    fontSize: 6,
    padding: 1,
    color: "#fff"
  },
  statusInactive: {
    backgroundColor: "red",
    fontSize: 6,
    padding: 1,
    color: "#fff"
  },
  statusAssignable: {
    backgroundColor: "green",
    fontSize: 6,
    padding: 1,
    color: "#fff"
  },
  statusLink: {
    backgroundColor: "black",
    fontSize: 6,
    padding: 1,
    color: "#fff"
  },
  currentDroneHeader: {
    width: "100%",
    backgroundColor: "#34c3eb",
    paddingBottom: "2px"
  }
})

function DroneManager({ sidebarWidth }) {

  const classes = useStyles();
  const [show, setShow] = useState(false)
  const [openAdd, setOpenAdd] = useState(false)

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const handleShow = () => {
    setShow(!show)
  }
  const drone_data = [
    createData("Tuan drone", "IF7MF9IPDD4V", "DJMavic", 10, 10, 10, "2022-08-01 15:54:25", true, true, "udp-localhost-14540", true),
    createData("Tuan drone 1", "IF7MF9IPDD4V", "DJMavic", 10, 10, 10, "2022-08-01 15:54:25", true, true, "udp-localhost-14540", true),
    createData("Tuan drone 2", "IF7MF9IPDD4V", "DJMavic", 10, 10, 10, "2022-08-01 15:54:25", false, false, "udp-localhost-14540", false),
    createData("Tuan drone 3", "IF7MF9IPDD4V", "DJMavic", 10, 10, 10, "2022-08-01 15:54:25", false, false, "udp-localhost-14540", false),
  ]
  const pinLocations = [
    { lat: 21.0285, lng: 105.8542 , color: "blue", title: "Tuan drone"}, // Hanoi, Vietnam coordinates
    { lat: 21.0285, lng: 105.8542 , color: "blue", title: "Home"}, // Hanoi, Vietnam coordinates
    // { lat: 21.0045, lng: 105.8355 , color: "blue", title: "pin2"}, // Another location in Hanoi
  ];

  return (
      <Paper sx={{width: "auto", height: "100%"}}>
        <div>
          <Stack spacing={1} direction="row">
            <Grid container spacing={2}  >
              <Stack spacing={1}sx={{width: "450px"}}>
                <Stack spacing={45} direction="row">
                  <Typography>List</Typography>
                  <Button variant="contained" onClick={handleOpenAdd}>Add</Button>
                  <AddDronePopupForm open={openAdd} onClose={handleCloseAdd}/>
                </Stack>
                <InputBase
                  id="searchBar"
                  type="search"
                  variant="filled"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  sx={{ padding: '0', border: '1px solid black', outline: 'none', backgroundColor: 'lightgray' }}
                  startAdornment={
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  }
                  />
                <Paper sx={{ height: "585px", overflow: "auto"}}>
                  <Stack spacing={1}>
                    {drone_data.map((item, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className={classes.card}>
                            <div className={classes.cardHeader}>
                              <Typography gutterBottom variant="body1" component="div">
                                  {item.name} - {item.id}
                              </Typography>
                            </div>
                          <CardContent>
                            <div style={{ paddingTop: '2px' }}>
                              <Stack spacing={1}>
                                <Typography variant="caption">Model name: {item.modelName}</Typography>
                                <Stack spacing={3 } direction="row">
                                  <Typography variant="caption">Max weight: {item.weight}</Typography>
                                  <Typography variant="caption">Max speed: {item.speed}</Typography>
                                  <Typography variant="caption">Max height: {item.height}</Typography>
                                </Stack>
                                <Typography variant="caption">Created at: {item.createdAt}</Typography>
                                <Stack spacing={1} direction="row">
                                  <Typography variant="caption">Status: </Typography>
                                  {item.status && (
                                    <Box className={classes.statusActive}>
                                      <Typography variant='caption'>Active</Typography>
                                    </Box>
                                  )}
                                  {!item.status && (
                                    <Box className={classes.statusInactive}>
                                      <Typography variant='caption'>Inactive</Typography>
                                    </Box>
                                  )}
                                  {item.available && (
                                    <Box className={classes.statusAssignable}>
                                      <Typography variant='caption'>Assignable</Typography>
                                    </Box>
                                  )}
                                  <Box className={classes.statusLink}>
                                    <Typography variant='caption'>{item.link}</Typography>
                                  </Box>
                                </Stack>
                                {item.isButton && show && item.name == "Tuan drone" && (
                                  <Button variant='contained' sx={{ width: '50px'}} onClick={handleShow}>Show</Button>
                                )}
                                {item.isButton && !show && item.name == "Tuan drone" && (
                                  <Button variant='contained' sx={{ width: '50px', backgroundColor: 'lightgray'}} onClick={handleShow}>Hide</Button>
                                )}
                                {item.isButton && item.name != "Tuan drone" &&(
                                  <Button variant='contained' sx={{ width: '50px', backgroundColor: 'lightgray'}} onClick={handleShow}>Hide</Button>
                                )}
                              </Stack>
                            </div>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Stack>
                  
                </Paper>
              </Stack>
              <div>
              </div>
            </Grid>
            <Stack spacing={1} sx={{ width:  '80%', float: 'right'}}>
              <Map pinLocations={pinLocations}/>
              <Card>
                <div className={classes.currentDroneHeader}>
                  <span> Drone Tuan Drone</span>
                </div>
                <CardContent>
                  <Stack spacing={1}>
                    <Stack direction="row" spacing={12}>
                      <Typography sx={{fontWeight: 'bold'}}>Altitude</Typography>
                      <Typography>0.005</Typography>
                      <Typography sx={{fontWeight: 'bold'}}>Velocity vertical</Typography>
                      <Typography>0m/s</Typography>
                      <Typography sx={{fontWeight: 'bold'}}>Velocity horizontal</Typography>
                      <Typography>0m/s</Typography>
                    </Stack>
                    <Stack direction="row" spacing={15}>
                      <Typography sx={{fontWeight: 'bold'}}>Battery </Typography>
                      <Typography>100%-16.2V</Typography>
                      <Typography sx={{fontWeight: 'bold'}}>Last update</Typography>
                      <Typography>2023/29/8 16:39:45</Typography>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Stack>
        </div>
      </Paper>

  )
}

export default DroneManager
