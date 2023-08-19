import React, { useState } from 'react';
import { Modal, Button, Box, TextField, Stack, Typography, InputBase } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const MessagePopupForm = ({ open, onClose }) => {
  const [inputValue, setInputValue] = useState('');
 
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
                <Typography sx={{fontWeight: 'bold'}} >Issue name</Typography>
                  <InputBase sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }}></InputBase>
                  <Typography sx={{fontWeight: 'bold'}} >Detail</Typography>
                  <InputBase  multiline rows={4} sx={{ padding: '0', border: '1px solid lightgray', outline: 'none' }}></InputBase>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker/>
                  </LocalizationProvider>
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

export default MessagePopupForm;
