import React, { useState } from 'react';
import { Modal, Button, Box, TextField, Stack, Typography, InputBase, Select, MenuItem } from '@mui/material';

const AddDronePopupForm = ({ open, onClose }) => {
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
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
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
        <Stack spacing={3}>
            <Typography variant='h3' sx={{fontWeight: 'bold'}}>Enter information</Typography>
            <div>
                <Stack spacing={1} style={{ width: '550px', height: '100%' }}>
                    <Stack spacing={3} direction="row">
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Drone name</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }}></InputBase>
                        </div>
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Model name</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }}></InputBase>
                        </div>
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Serial</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }}></InputBase>
                        </div>
                    </Stack>
                    <Stack spacing={3} direction="row">
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Max height</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }}></InputBase>
                        </div>
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Max weight</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }}></InputBase>
                        </div>
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Max speed</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }}></InputBase>
                        </div>
                    </Stack>
                    <Stack spacing={3} direction="row">
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Type</Typography>
                            <Select
                                value={selectedValue}
                                onChange={handleChange}
                                input={<InputBase id="dropdown-input" />}
                                sx={{ width: '168px', border: '1px solid lightgray'}}
                            >
                                <MenuItem value="option1">UDP</MenuItem>
                                <MenuItem value="option2">TCP</MenuItem>
                                <MenuItem value="option3">Serial</MenuItem>
                            </Select>
                        </div>
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>IP</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }}></InputBase>
                        </div>
                        <div>
                            <Typography sx={{fontWeight: 'bold'}}>Port</Typography>
                            <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }}></InputBase>
                        </div>
                    </Stack>
                </Stack>
            </div>
            <Stack spacing={2} direction='row'>
                <Button variant="contained" onClick={handleSubmit}>
                    Submit
                </Button>
                <Button onClick={handleSubmit}>
                    Close
                </Button>
            </Stack>

        </Stack>

      </Box>
    </Modal>
  );
};

export default AddDronePopupForm;
