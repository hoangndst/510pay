import { Grid, Paper, Button, Alert, Typography, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../modules/firebase';
import { updateProfile } from 'firebase/auth';
import { collection, addDoc } from "firebase/firestore"; 


export default function SignUp() {
  
  const [userName, setUserName] = React.useState('');
  const [userID, setUserID] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const { signUp, currentUser } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signUp(email, password);
      let url = "./images/avatar/" + userID + ".png";
      updateProfile(auth.currentUser, { 
        displayName: userName, photoURL: url 
      }).then(() => {
        console.log("User profile updated");
      }).catch(error => {
        console.log(error);
      });
      setLoading(false)
    } catch (error) {
      setLoading(false);
      setAlertMessage(error.message);
      setOpen(true);
    }
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Paper
          sx={{
            minWidth: '100%',
            flexGrow: 1,
            backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >      
          <div style={ { width: '95%', margin: '0 auto' } }>
              <Alert
                  style={{ margin: '10px auto 10px', fontWeight: 'bold' }}
                  severity="info">
                  It's beta, don't expect too much!
              </Alert>
              <Paper
                  sx={{
                      p: 1,
                      margin: '0 auto 10px',
                      maxWidth: '100%',
                      flexGrow: 1,
                      backgroundColor: (theme) =>
                      theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                  }}
              >
                    <Typography sx={{ fontSize: 20, fontWeight: 1000 }} color="text.first" gutterBottom>
                      Sign Up - 510Pay
                    </Typography>
                
                  <Grid container spacing={1} marginTop={1}>
                    <Grid item xs={12} md={12}>
                        <TextField
                            required
                            type={'text'}
                            sx={{ width: '30ch', margin: '0 auto' }}
                            id="outlined-username-input"
                            label="Username"
                            value={userName}
                            InputProps={{
                              'aria-label': 'username',
                            }}
                            onChange={(event) => setUserName(event.target.value)}
                          />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            required
                            type={'number'}
                            sx={{ width: '30ch', margin: '0 auto' }}
                            id="outlined-id-input"
                            label="ID"
                            value={userID}
                            InputProps={{
                              'aria-label': 'id',
                            }}
                            onChange={(event) => setUserID(event.target.value)}
                          />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField
                            required
                            type={'email'}
                            sx={{ width: '30ch', margin: '0 auto' }}
                            id="outlined-email-input"
                            label="Email"
                            value={email}
                            InputProps={{
                              'aria-label': 'email',
                            }}
                            onChange={(event) => setEmail(event.target.value)}
                          />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField
                            required
                            type={'password'}
                            sx={{ width: '30ch', margin: '0 auto' }}
                            id="outlined-password-input"
                            label="Password"
                            value={password}
                            InputProps={{
                              'aria-label': 'password',
                            }}
                            onChange={(event) => setPassword(event.target.value)}
                          />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <TextField
                            required
                            type={'password'}
                            sx={{ width: '30ch', margin: '0 auto' }}
                            id="outlined-confirm-password-input"
                            label="Confirm password"
                            value={confirmPassword}
                            InputProps={{
                              'aria-label': 'confirm password',
                            }}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                          />
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <LoadingButton
                          onClick={handleSubmit}
                          // endIcon={}
                          sx={{ width: '30ch', margin: '0 auto' }}
                          loading={loading}
                          loadingPosition="end"
                          variant="contained"
                        >
                          Sign Up
                        </LoadingButton>
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title" sx={{ fontSize: 20, fontWeight: 1000 }}>
                            {"Notification from 510Pay"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              <strong>
                                {alertMessage}
                              </strong>
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} autoFocus>
                              Oke
                            </Button>
                          </DialogActions>
                        </Dialog>
                    </Grid>
                  </Grid> 
              </Paper>
          </div>
        </Paper>
      </header>
    </div>
  )
}
