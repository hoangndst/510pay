import { Grid, Paper, Alert, Typography, Box, Container } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import BrandingProvider from '../modules/BrandingProvider';
import { useTheme } from '@mui/material/styles'
import ReactPlayer from 'react-player/lazy'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function TestCam() {

  const theme = useTheme();

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
              maxWidth: '690px',
              margin: '0 auto',
              marginBottom: '20px',
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={12}>
                <Item>
                  <ReactPlayer
                    url={'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'}
                    controls={true}
                  />
                </Item>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
    </BrandingProvider>

  )
}