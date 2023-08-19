import React, { useState } from 'react';
import { Modal, Button, Box, TextField, Stack, Typography, InputBase } from '@mui/material';


const DetailPopupForm = ({ open, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Submitted value:', inputValue);

    // Close the modal
    onClose();
  };
  function createData(stt, id, name, size, weight, price, status, assign, createAt, updateAt) {
    return { stt, id, name, size, weight, price, status, assign, createAt, updateAt };
  }
  
  const pack = createData(1,'iewur8473jdjdoa', "Tai nghe gaming", "100x100x100", 5, 100000, null, null, "2023-06-08 16:53:56", "2023-06-08 16:53:56")
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
            <Stack spacing={15} direction="row">
                <Typography sx={{fontWeight: 'bold'}}>Package name:</Typography>
                <Typography>{pack.name}</Typography>
                <Typography sx={{fontWeight: 'bold'}}>Size-Weight:</Typography>
                <Typography>{pack.size}-{pack.weight}</Typography>
            </Stack>
            <Stack spacing={15} direction="row">
                <Typography sx={{fontWeight: 'bold'}}>Price:</Typography>
                <Typography>{pack.price}</Typography>
                <Typography sx={{fontWeight: 'bold'}}>Size-Weight:</Typography>
                <Typography>{pack.size}-{pack.weight}</Typography>
            </Stack>
        </Stack>

      </Box>
    </Modal>
  );
};

export default DetailPopupForm;
