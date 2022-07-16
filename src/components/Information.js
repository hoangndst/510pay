import { Grid, TextField, Paper, Alert, Typography, CardMedia, Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { getData } from '../api/ApiServer';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useEffect } from 'react';
import BrandingProvider from '../modules/BrandingProvider';
import { useTheme } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Infomation() {

  const [date, setDate] = React.useState(new Date());
  const [rows, setRows] = React.useState([]);
  const [columns, setColumns] = React.useState([]);
  const [logRow, setLogRow] = React.useState([]);
  const [logColumns, setLogColumns] = React.useState([]);
  const theme = useTheme();

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
    <BrandingProvider>
      <Box sx={{ width: '100%', minHeight: '100vh', margin: '0px auto' }}>
        <Container
          sx={{
            padding: theme.spacing(2),
          }}
        >
          <Box
            sx={{
              maxWidth: '500px',
              margin: '0 auto',
              marginBottom: '20px',
            }}
          >
            <Alert
              sx={{
                fontWeight: 'bold'
              }}
              severity="warning"
            >
              Its beta, dont expect too much!
            </Alert>
          </Box>
          <Paper
            sx={{
              p: 1,
              maxWidth: '500px',
              margin: '0 auto',
              marginBottom: '20px',
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Item>
              <Typography sx={{ fontSize: 20, fontWeight: 1000 }} color="text.first" gutterBottom>
                510Pay - For Real Money
              </Typography>
            </Item>
            <Grid container spacing={2} marginTop={1}>
              <Grid item xs={12} md={12}>
                <Typography sx={{ fontSize: 15, fontWeight: 1000 }} color="text.first" gutterBottom>
                  Account Balance
                </Typography>
                <div style={{ height: 400, width: '35ch', margin: '0px auto' }}>
                  <div style={{ height: 350 }}>
                    <DataGrid
                      rows={rows}
                      columns={columns}
                      components={{ Toolbar: GridToolbar }}
                      disableSelectionOnClick
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
                <div style={{ height: 400, width: '35ch', margin: '10px auto' }}>
                  <div style={{ height: 350 }}>
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
          <Paper
            sx={{
              p: 1,
              maxWidth: '5000px',
              margin: '0 auto',
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <CardMedia
              component={"iframe"}
              src={"https://docs.google.com/spreadsheets/d/e/2PACX-1vSEiOE6Vzj9UFKMdqLmvPsHiWBikjx2K3Ypu1Ntbr7t8lQWTdhStBrav4ToNC0uJMu9ID-dkfnYtzPB/pubhtml?gid=0&single=false"}
              title="Sheet"
              style={{ height: '1000px', maxWidth: '1500px', margin: '0px auto' }}
            />
          </Paper>
        </Container>
      </Box>
    </BrandingProvider>
  )
}
