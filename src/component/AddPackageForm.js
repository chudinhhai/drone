import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Modal, Button, Box, TextField, Stack, Typography, InputBase, Grid, Card, CardContent } from '@mui/material';
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
const AddPopupForm = ({ open, onClose }) => {
    
  const [inputValue, setInputValue] = useState('');
  const classes = useStyles();

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Submitted value:', inputValue);

    // Close the modal
    onClose();
  };
  const drone_data = [
    createData("Tuan drone", "IF7MF9IPDD4V", "DJMavic", 10, 10, 10, "2022-08-01 15:54:25", true, true, "udp-localhost-14540"),
    createData("Tuan drone 2", "IFFA9IPDD4V", "DJMavic", 120, 140, 230, "2022-08-01 15:55:25", true, true, "udp-localhost-14640"),
  ]
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: '8px',
        }}
      >
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
                            {item.available && (
                                    <Button variant='contained' sx={{ backgroundColor: 'green' }} onClick={handleSubmit}>Assign</Button>
                                )}
                            </Stack>
                        </div>
                        </CardContent>
                    </Card>
                    </Grid>
                ))}
        </Stack>

      </Box>
    </Modal>
  );
};

export default AddPopupForm;
