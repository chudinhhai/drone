import { Card, CardContent, CardHeader, Typography,  } from '@material-ui/core'
import { Stack, Paper } from '@mui/material'
import Grid from '@mui/material/Grid';
import React from 'react'
import InventoryIcon from '@mui/icons-material/Inventory';
import { makeStyles, styled } from '@material-ui/styles';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import Map from '../component/Map';

const useStyles = makeStyles({
  first: {
    fontWeight: 'bold'
  },
  second: {
    color: 'gray'
  },
  dashedLine: {
    border: 'none',
    borderTop: '1px dashed #ccc',
    height: 0,
    margin: '10px 0',
  },
  centerDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '5vh', // Adjust this to your desired height
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 'auto', // Adjust this to your desired height
  },
});


function MapManager() {
  function createData(stt, id, name, size, weight, price, status, assign, createAt, updateAt) {
    return { stt, id, name, size, weight, price, status, assign, createAt, updateAt };
  }
  const pinLocations = [
    { lat: 21.002760, lng: 105.842470 , color: "blue", title: "Sender"}, // Hanoi, Vietnam coordinates
    { lat: 21.104920, lng: 105.657600 , color: "blue", title: "Receiver"}, // Hanoi, Vietnam coordinates
    // { lat: 21.0045, lng: 105.8355 , color: "blue", title: "pin2"}, // Another location in Hanoi
  ];

  const classes = useStyles();
  const pack = createData(1,'iewur8473jdjdoa', "Tai nghe gaming", "100x100x100", 500, 100000, "Di lay hang", null, "2023-06-08 16:53:56", "2023-06-08 16:53:56")
  return (
    <Card >
      <CardContent >
        <Stack spacing={1}>
          <div >
            <Typography variant='h5' sx={{fontWeight: 'bold'}}>Tracking</Typography>
          </div>
          <div >
            <Stack spacing={1} sx={{borderTop: '1px solid black', paddingTop: '10px', height: '550px'}} >
              <Typography variant='h6'>Package - {pack.id}</Typography>
              <Stack spacing={1} direction='row' className={classes.container}>
                <Stack alignItems="center" spacing={1} sx={{ width: '150px'}}>
                  <InventoryIcon fontSize="large"/>
                  <Typography className={classes.first}>2023-3-24 20:54:14</Typography>
                  <Typography className={classes.second}>Got the package, going to the receiver</Typography>
                </Stack>
                <div >
                  <Typography className={classes.centerDiv}>- - - - - - - - - -</Typography>
                </div>
                <Stack alignItems="center" spacing={1} sx={{ width: '150px'}}>
                  <LocalShippingIcon fontSize="large"/>
                  <Typography className={classes.first}>2023-3-24 20:54:34</Typography>
                  <Typography className={classes.second}>Arrived at receiver, dropping package</Typography>
                </Stack>
                <div >
                  <Typography className={classes.centerDiv}>- - - - - - - - - -</Typography>
                </div>
                <Stack alignItems="center" spacing={1} sx={{ width: '150px'}}>
                  <LocalShippingIcon fontSize="large" sx={{transform: 'scaleX(-1)'}}/>
                  <Typography className={classes.first}>2023-3-24 20:54:48</Typography>
                  <Typography className={classes.second}>Mission done, returning home</Typography>
                </Stack>
                <div >
                  <Typography className={classes.centerDiv}>- - - - - - - - - -</Typography>
                </div>
                <Stack alignItems="center" spacing={1} sx={{ width: '150px'}}>
                  <HomeWorkIcon fontSize="large"/>
                  <Typography className={classes.first}>2023-3-24 20:55:57</Typography>
                  <Typography className={classes.second}>Drone returned</Typography>
                </Stack>
              </Stack>
              <Stack spacing={35} direction='row' className={classes.container}>
                <Typography className={classes.first}>Package name:</Typography>
                <Typography>Tai nghe gaming</Typography>
                <Typography className={classes.first}>Size - Weight:</Typography>
                <Typography>100x100x100 - 5</Typography>
              </Stack>
              <Stack spacing={27} direction='row' className={classes.container}>
                <Typography className={classes.first}>Sender:</Typography>
                <Typography paragraph>
                  Nguyen Anh Minh (tuan) <br />
                  0123456789 <br />
                  No 55 Giai Phong, Dong Tam, HN <br />
                </Typography>
                <Typography className={classes.first}>Receiver:</Typography>
                <Typography multiline>
                  Tuan <br />
                  0123456789 <br />
                  Thong Nhat Park, Le Duan <br />
                </Typography>
              </Stack>
              <div sx={{ height: '550px'}}>
                <Map pinLocations={pinLocations} sx={{width: '550px'}}/>
              </div>
              
            </Stack>
            
          </div>
        </Stack>
      </CardContent>
    </Card>
    
  )
}

export default MapManager