import { Grid, TextField, Paper, Alert, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { getData } from '../api/ApiServer';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Infomation() {

  // const members = ['Hoàng', 'Hiên', 'Hiếu', 'Hưng', 'Tiến'];
  const [date, setDate] = React.useState(new Date());
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState([]);
  const [logRow, setLogRow] = React.useState([]);
  const [logColumns, setLogColumns] = React.useState([]);


  useEffect(() => {
    getData('option=toPay').then(res => {
      setRows(res.rows);
      setColumns(res.columns);
    });
  }, []);

  useEffect(() => {
    if (date) {
      let params = 'option=log&date=' + date.toLocaleDateString('vi-VN');
      // console.log(params);
      getData(params).then(res => {
        // console.log(res.date);
        setLogRow(res.rows);
        setLogColumns(res.columns);
        // console.log(res);
      });
    }
  }, [date]);

  return (
    
    <div style={ { width: '100%', margin: '0 auto' } }>    
        <Alert
            style={{ marginBottom: '10px', fontWeight: 'bold' }}
            severity="info">
            It's beta, don't expect too much!
        </Alert>
        <Paper
            sx={{
                p: 1,
                marginBottom: '10px',
                maxWidth: '100%',
                flexGrow: 1,
                backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Item>
              <Typography sx={{ fontSize: 20, fontWeight: 1000 }} color="text.first" gutterBottom>
                  510GANGZ - TO PAY
              </Typography>
            </Item>
            <Grid container spacing={1} marginTop={1}>
              <Grid item xs={12} md={12}>
                <Typography sx={{ fontSize: 15, fontWeight: 1000 }} color="text.first" gutterBottom>
                  Account Balance
                </Typography>
                <div style={{ height: 400, width: '30ch', margin: '0px auto' }}>
                  <div style={{ height: 350, width: '30ch' }}>    
                    <DataGrid 
                      rows={rows} 
                      columns={columns} 
                      components={{ Toolbar: GridToolbar }}
                      // hideFooter
                      // autoHeight
                      
                      disableSelectionOnClick
                      // disableColumnMenu
                      disableColumnSelector
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={12}>
                  <Typography sx={{ fontSize: 15, fontWeight: 1000 }} color="text.first" gutterBottom>
                    Day AuditLog
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      // label="Pick day to show log"
                      value={date}
                      inputFormat="dd/MM/yyyy"
                      onChange={(newValue) => {
                        setDate(newValue);
                        // console.log(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <div style={{ height: 400, width: '30ch', margin: '10px auto' }}>
                  <div style={{ height: 350, width: '30ch' }}>    
                    <DataGrid 
                      rows={logRow}
                      columns={logColumns}
                      components={{ Toolbar: GridToolbar }}
                      // hideFooter
                      // autoHeight
                      
                      disableSelectionOnClick
                      // disableColumnMenu
                      disableColumnSelector
                    />
                  </div>
                </div>
              </Grid>
            </Grid> 
        </Paper>
    </div>
  )
}
