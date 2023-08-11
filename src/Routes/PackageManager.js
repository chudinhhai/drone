import { Button, TextField, Stack, Table, TableContainer, Paper, TableHead, TableRow, TableBody, TableCell , tableCellClasses } from '@mui/material'
import React from 'react'
import '../App.css';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const theme = createTheme({
  palette: {
    white: {
      main: '#fafbfc',
      contrastText: '#050505',
    },
    lightblue: {
      main: '#5cbef2',
      contrastText: '#fafbfc'
    },
    blue: {
      main: '#0d92d9',
      contrastText: '#fafbfc'
    }
  },
});

function createData(stt, id, name, size, weight, price, status, assign, createAt, updateAt) {
  return { stt, id, name, size, weight, price, status, assign, createAt, updateAt };
}

const rows = [
  createData(1,'iewur8473jdjdoa', "Tai nghe gaming", "100x100x100", 5, null, null, null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
  createData(2,'iewur8473jdjdoa', "Tai nghe gaming", "100x100x100", 5, null, null, null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
  createData(3,'iewur8473jdjdoa', "Tai nghe gaming", "100x100x100", 5, null, null, null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
  createData(4,'iewur8473jdjdoa', "Tai nghe gaming", "100x100x100", 5, null, null, null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
  createData(5,'iewur8473jdjdoa', "Tai nghe gaming", "100x100x100", 5, null, null, null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
  createData(6,'iewur8473jdjdoa', "Tai nghe gaming", "100x100x100", 5, null, null, null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
];

function PackageManager({ sidebarWidth }) {
  const [sidebar, setSidebar] = useState(false);
//   useEffect(() => {
//     document.querySelector('.content').style.marginLeft = `${sidebarWidth}px`;
// }, [sidebarWidth])
  
  return (
    <ThemeProvider theme={theme}>
      <div className={sidebar ? "package resize" : "package"} >
        <div className='box-buttons'>
          <Stack spacing={2}>
            <div>
              <Stack spacing={1}>
                <div>
                  <TextField
                  id="searchBar"
                  label="searchBar"
                  type="search"
                  variant="filled"
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  />
                </div>
                <div>
                  <Stack spacing={1} direction="row">
                    <Button variant='contained' className='button-all'>All</Button>
                    <Button variant='contained' className='button-finished'>Finished</Button>
                    <Button variant='contained' className='button'>Started</Button>
                    <Button variant='contained' className='button'>Unassigned</Button>
                  </Stack>
                </div>
              </Stack>
            </div>
            <div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">#</StyledTableCell>
                      <StyledTableCell align="left">Id</StyledTableCell>
                      <StyledTableCell align="left">Name</StyledTableCell>
                      <StyledTableCell align="left">Size</StyledTableCell>
                      <StyledTableCell align="left">Weight</StyledTableCell>
                      <StyledTableCell align="left">Price</StyledTableCell>
                      <StyledTableCell align="left">Status</StyledTableCell>
                      <StyledTableCell align="left">Assign</StyledTableCell>
                      <StyledTableCell align="left">Create at</StyledTableCell>
                      <StyledTableCell align="left">Update at</StyledTableCell>
                      <StyledTableCell align="left">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <StyledTableRow key={row.stt}>
                        <StyledTableCell align="left">{row.stt}</StyledTableCell>
                        <StyledTableCell align="left">{row.id}</StyledTableCell>
                        <StyledTableCell align="left">{row.name}</StyledTableCell>
                        <StyledTableCell align="left">{row.size}</StyledTableCell>
                        <StyledTableCell align="left">{row.weight}</StyledTableCell>
                        <StyledTableCell align="left">{row.price}</StyledTableCell>
                        <StyledTableCell align="left">{row.status}</StyledTableCell>
                        <StyledTableCell align="left">{row.assign}</StyledTableCell>
                        <StyledTableCell align="left">{row.createAt}</StyledTableCell>
                        <StyledTableCell align="left">{row.updateAt}</StyledTableCell>
                        <StyledTableCell aligh="left">
                          <Stack spacing={0}>
                            <Button variant='contained' color='white' style={{ fontSize: '10px' , width: '50px', height: '25px', borderRadius: '0' }}> Detail </Button>
                            <Button variant='contained' color='lightblue' style={{ fontSize: '10px' , width: '50px', height: '25px', borderRadius: '0' }}> Edit </Button>
                            <Button variant='contained' color='blue' style={{ fontSize: '10px' , width: '50px', height: '25px', borderRadius: '0' }}> Assign </Button>
                          </Stack>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Stack>
          


        </div>
        
      </div>
    </ThemeProvider>

  )
}

export default PackageManager
