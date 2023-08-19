import React, { useState } from 'react';
import { Modal, Button, Box, TextField, Stack, Typography, InputBase } from '@mui/material';

const EditPopupForm = ({ open, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  function createData(name, size, price, weight, sender, latitudeSender, longitudeSender, nameReceiver, telephone, address, latitudeReceiver, longitudeReceiver, altitudeReceiver) {
    return { name, size, price, weight, sender, latitudeSender, longitudeSender, nameReceiver, telephone, address, latitudeReceiver, longitudeReceiver, altitudeReceiver };
  }
  const pack = createData("Tai nghe gaming", "100x100x100", null, 5, "207 Giai Phong, phuong Dong Tam, Hanoi, Vietnam", 21.00058, 105.84145, "Pham Quan Tuan", null, "Ngo 87 Le Thanh Nghi, Hanoi, Hanoi", 20.99819565, 105.84514618, 50)
  const handleSubmit = () => {
    // Handle form submission here
    console.log('Submitted value:', inputValue);

    // Close the modal
    onClose();
  };

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
            <div>
                <Stack spacing={1} style={{ width: '550px', height: '100%' }}>
                    <Typography sx={{fontWeight: 'bold'}} value={pack.name}>Name</Typography>
                    <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }} value={pack.name}></InputBase>
                    <Stack spacing={2} direction="row">
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Size</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }} value={pack.size}></InputBase>
                        </div>
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Price</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }}value={pack.price}></InputBase>
                        </div>
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Weight</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none'}}value={pack.weight}></InputBase>
                        </div>
                    </Stack>
                    <Typography sx={{fontWeight: 'bold'}}>Sender</Typography>
                    <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none', backgroundColor: 'lightgray'  }}value={pack.sender} disabled={true}></InputBase>
                    <Stack spacing={2} direction="row">
                        <div style={{ width: '100%', height: '100%' }}>
                            <Typography sx={{fontWeight: 'bold'}}>Latitude</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none', backgroundColor: 'lightgray' }}value={pack.latitudeSender} disabled={true}></InputBase>
                        </div>
                        <div style={{ width: '100%', height: '100%' }}>
                            <Typography sx={{fontWeight: 'bold'}}>Longitude</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none', backgroundColor: 'lightgray' }}value={pack.longitudeSender} disabled={true}></InputBase>
                        </div>
                    </Stack>
                    <Typography sx={{fontWeight: 'bold'}}>Receiver</Typography>
                    <Stack spacing={2} direction="row">
                        <div style={{ width: '100%', height: '100%' }}>
                            <Typography sx={{fontWeight: 'bold'}}>Name</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none', backgroundColor: 'lightgray' }}value={pack.nameReceiver} disabled={true}></InputBase>
                        </div>
                        <div style={{ width: '100%', height: '100%' }}>
                            <Typography sx={{fontWeight: 'bold'}}>Phone number</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none', backgroundColor: 'lightgray' }}value={pack.telephone} disabled={true}></InputBase>
                        </div>
                    </Stack>
                    <Typography sx={{fontWeight: 'bold'}}>Address</Typography>
                    <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none', backgroundColor: 'lightgray' }}value={pack.address} disabled={true}></InputBase>
                    <Stack spacing={2} direction="row">
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Latitude</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none', backgroundColor: 'lightgray' }}value={pack.latitudeReceiver} disabled={true}></InputBase>
                        </div>
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Longitude</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none', backgroundColor: 'lightgray' }}value={pack.longitudeReceiver} disabled={true}></InputBase>
                        </div>
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Altitude</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none', backgroundColor: 'lightgray' }}value={pack.altitudeReceiver} disabled={true}></InputBase>
                        </div>
                    </Stack>
                </Stack>
            </div>
            <Button variant="contained" onClick={handleSubmit}>
            Submit
            </Button>
        </Stack>

      </Box>
    </Modal>
  );
};

export default EditPopupForm;
