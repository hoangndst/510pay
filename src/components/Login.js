import { Grid, Dialog, Chip, Stack, Avatar, ListItem, DialogTitle, DialogActions, DialogContentText, DialogContent, Paper, Alert, Typography, FormControlLabel, Checkbox, Button, FormControl, OutlinedInput, Select, MenuItem, FormGroup, InputAdornment } from '@mui/material'
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles'
import React from 'react'
import { useEffect } from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import FaceIcon from '@mui/icons-material/Face';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { updateData } from '../api/ApiServer';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ToDo(userName) {



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
            

              </Grid>
            </Grid> 
        </Paper>
    </div>
  )
}
