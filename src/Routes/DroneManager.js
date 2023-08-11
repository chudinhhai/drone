import { Box, Card, CardContent, Paper, Stack, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/styles';
import React from 'react'
import { Grid } from 'react-bootstrap'
import Map from '../component/Map';

function createData(name, id, modelName, weight, speed, height, createdAt, status, available, link) {
  return {name, id, modelName, weight, speed, height, createdAt, status, available, link}
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

  const drone_data = [
    createData("Tuan drone", "IF7MF9IPDD4V", "DJMavic", 10, 10, 10, "2022-08-01 15:54:25", true, true, "udp-localhost-14540"),
    createData("Tuan drone", "IF7MF9IPDD4V", "DJMavic", 10, 10, 10, "2022-08-01 15:54:25", true, true, "udp-localhost-14540"),
    createData("Tuan drone", "IF7MF9IPDD4V", "DJMavic", 10, 10, 10, "2022-08-01 15:54:25", false, false, "udp-localhost-14540"),
    createData("Tuan drone", "IF7MF9IPDD4V", "DJMavic", 10, 10, 10, "2022-08-01 15:54:25", true, true, "udp-localhost-14540"),


  ]
  return (
      <>
        <div className='drone'>
          <Stack spacing={1} direction="row">
            <Grid container spacing={2}>
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
                        </Stack>
                      </div>

                      
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              <div>
              </div>
            </Grid>
            <Stack spacing={1}>
              <Map/>
              <Card>
                <div className={classes.currentDroneHeader}>
                  <span> Drone Tuan Drone</span>
                </div>
                <CardContent>
                  
                </CardContent>
              </Card>
            </Stack>
            
          </Stack>

        </div>
      </>
  )
}

export default DroneManager
