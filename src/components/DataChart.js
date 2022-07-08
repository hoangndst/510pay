import { Grid, Paper, Alert, Typography, Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import { useEffect } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import { getData } from '../api/ApiServer';
import BrandingProvider from '../modules/BrandingProvider';
import { useTheme } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function DataChart() {

  const [dayData, setDayData] = React.useState([]);
  const [weekData, setWeekData] = React.useState([]);
  const theme = useTheme();
  const [chartDayData, setChartDayData] = React.useState({
    labels: dayData.map(item => item.day),
    datasets: [
      {
        label: "Amount",
        data: dayData.map(item => item.amount),
        backgroundColor: [
          //   "rgba(75,192,192,1)",
          "#ecf0f1",
          //   "#50AF95",
          //   "#f3ba2f",
          //   "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  const [chartWeekData, setChartWeekData] = React.useState({
    labels: weekData.map(item => item.week),
    datasets: [
      {
        label: "Amount",
        data: weekData.map(item => item.amount),
        backgroundColor: [
          //   "rgba(75,192,192,1)",
          "#ecf0f1",
          //   "#50AF95",
          //   "#f3ba2f",
          //   "#2a71d0",
        ],
        borderColor: "#0047AB",
        borderWidth: 2,
      },
    ],
  });


  useEffect(() => {
    getData('&option=dayAmount').then(res => {
      setDayData(res.data);
      setChartDayData({
        labels: res.data.slice(res.data.length - 10, res.data.length).map(item => item.day),
        datasets: [
          {
            label: "Amount",
            data: res.data.map(item => item.amount),
            backgroundColor: [
              //   "rgba(75,192,192,1)",
              "#ecf0f1",
              //   "#50AF95",
              //   "#f3ba2f",
              //   "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });
    });
    getData('&option=weekAmount').then(res => {
      setWeekData(res.data);
      setChartWeekData({
        labels: res.data.map(item => item.week),
        datasets: [
          {
            label: "Amount",
            data: res.data.map(item => item.amount),
            backgroundColor: [
              //   "rgba(75,192,192,1)",
              "#ecf0f1",
              //   "#50AF95",
              //   "#f3ba2f",
              //   "#2a71d0",
            ],
            borderColor: "#0047AB",
            borderWidth: 2,
          },
        ],
      });
    });

  }, []);


  const [date, setDate] = React.useState(new Date());


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
            <Typography sx={{ fontSize: 20, fontWeight: 1000 }} color="text.first" gutterBottom>
              510Pay Data
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Item>
                  <Line
                    data={chartDayData}
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: 'Daily Amount',
                          position: 'bottom'
                        }
                      }
                    }}
                  />
                </Item>
              </Grid>
              <Grid item xs={12} md={12}>
                <Item>
                  <Line
                    data={chartWeekData}
                    options={{
                      plugins: {
                        title: {
                          display: true,
                          text: 'Weekly Amount',
                          position: 'bottom'
                        }
                      }
                    }}
                  />
                </Item>
              </Grid>
            </Grid>
          </Paper>

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
            <Typography sx={{ fontSize: 20, fontWeight: 1000 }} color="text.first" gutterBottom>
              CALENDER
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Item>
                    <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />
                  </Item>
                </LocalizationProvider>

              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </BrandingProvider>
  )
}