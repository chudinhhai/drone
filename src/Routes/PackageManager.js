import {  InputAdornment, IconButton, Button, TextField, Stack, Table, TableContainer, Paper, TableHead, TableRow, TableBody, TableCell , tableCellClasses, Pagination, InputBase } from '@mui/material'
import React from 'react'
import '../App.css';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useState } from 'react';
import AddPopupForm from '../component/AddPackageForm';
import EditPopupForm from '../component/EditPackageForm';
import DetailPopupForm from '../component/DetailPackage';
import SearchIcon from '@mui/icons-material/Search';
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
  createData(1,'iewur8473jdjdoa', "Tai nghe gaming", "100x100x100", 500, 100000, "Di lay hang", null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
  createData(2,'adfasfsdf35542d', "Op dien thoai", "100x120x10", 3, 100000, null, null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
  createData(3,'ad36ddwe224dddd', "Mo hinh gundam mini", "100x170x90", 7500, 80000, "Di lay hang", null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
  createData(4,'asdfg24wqet43dq', "Choi lau nha", "900x100x100", 1000, 100000, "Di lay hang", null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
  createData(5,'setgcxa466q0cio', "Gau bong", "130x190x200", 8000, 60000, null, null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
  createData(6,'poimnuile2998kk', "Dong ho bo tui", "300x300x300", 5, null, null, null, "2023-06-08 16:53:56", "2023-06-08 16:53:56"),
];



function PackageManager({ sidebarWidth }) {
  const [sidebar, setSidebar] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpenDetail = () => {
    setOpenDetail(true);
  };
  const handleCloseDetail = () => {
    setOpenDetail(false);
  };
  const handleOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };
  const handleOpenEdit = () => {
    setOpenEdit(true);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Paper className='paper'  sx={{ padding: 0 }}>
        <div className='box-buttons' style={{ width: '100%', height: '100%' }}>
          <Stack spacing={1} style={{ width: '100%', height: '100%' }}>
            <div>
              <Stack spacing={1}>
                <div>
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
                </div>
                <div>
                  <Stack spacing={1} direction="row">
                    <Button variant='contained' className='button-all' sx={{ backgroundColor: 'green' }}>All</Button>
                    <Button variant='contained' className='button-finished' sx={{ backgroundColor: 'lightgray', color: 'black' }}>Finished</Button>
                    <Button variant='contained' className='button' sx={{ backgroundColor: 'lightgray', color: 'black' }}>Started</Button>
                    <Button variant='contained' className='button' sx={{ backgroundColor: 'lightgray', color: 'black' }}>Unassigned</Button>
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
                            <Button variant='contained' color='white' style={{ fontSize: '10px' , width: '50px', height: '20px', borderRadius: '0' }} onClick={handleOpenDetail}> Detail </Button>
                            <DetailPopupForm open={openDetail} onClose={handleCloseDetail} />
                            <Button variant='contained' color='lightblue' style={{ fontSize: '10px' , width: '50px', height: '20px', borderRadius: '0' }} onClick={handleOpenEdit}> Edit </Button>
                            <EditPopupForm open={openEdit} onClose={handleCloseEdit} />
                            <Button variant='contained' color='blue' style={{ fontSize: '10px' , width: '50px', height: '20px', borderRadius: '0' }} onClick={handleOpenAdd}> Assign </Button>
                            <AddPopupForm open={openAdd} onClose={handleCloseAdd} />
                          </Stack>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>

            <Pagination count={10} size="small" />
          </Stack>
          


        </div>
        </Paper>
        
        
      </div>
    </ThemeProvider>

  )
}

export default PackageManager
