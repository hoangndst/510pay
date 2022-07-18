import { Grid, Container, Button, Alert, Typography, Box, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import BrandingProvider from '../modules/BrandingProvider';
import { useTheme } from '@mui/material/styles'
import Slide from '@mui/material/Slide';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SignIn() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = React.useState('');
  const navigate = useNavigate();
  const { signIn, currentUser } = useAuth();
  const theme = useTheme();

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
      // console.log(currentUser.email);
      setLoading(false);
      navigate('/510pay');
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
    <BrandingProvider>
      <Box sx={{ width: '100%', minHeight: '100vh', margin: '0px auto' }}>
        <Tooltip
          sx={{
            marginRight: theme.spacing(1),
            position: 'absolute',
            bottom: 20,
            right: 20,
          }}
          title="Notifications"
        >
          <IconButton size='small' aria-label="notification" color="primary"
            onClick={handleClickOpenDialog}
          >
            <Badge badgeContent={1} color="error">
              <NotificationsNoneOutlinedIcon color="action" />
            </Badge>
          </IconButton>
        </Tooltip>
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
            <img
              src={require(`../images/avatar/6.png`)}
              alt="510pay"
              style={{
                width: '30%',
                margin: '0 auto',
                display: 'block',

              }}
            />
          </Box>

          <Box
            sx={{
              maxWidth: '500px',
              margin: '0 auto',
              marginBottom: '20px',

            }}
          >
            <Alert
              sx={{
                fontWeight: 'bold',
              }}
              severity="warning"
            >
              Its beta, dont expect too much!
            </Alert>
            <Dialog
              open={openDialog}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleCloseDialog}
              aria-describedby="alert-dialog-slide"
            >
              <DialogTitle>{"Do you want to test this Web App?"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <strong>This account is for testing purposes only!</strong>
                  <br />
                  Email: <strong> test@510pay.com </strong>
                  <br />
                  Password: <strong> 123456 </strong>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog}>Got it</Button>
              </DialogActions>
            </Dialog>
          </Box>

          <Box sx={{ margin: '0 auto', maxWidth: '500px' }} container spacing={2} >

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  type={'email'}
                  sx={{ width: '100%' }}
                  id="outlined-email-input"
                  label="Email"
                  value={email}
                  InputProps={{
                    'aria-label': 'email',
                  }}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type={'password'}
                  sx={{ width: '100%', margin: '0 auto' }}
                  id="outlined-password-input"
                  label="Password"
                  value={password}
                  InputProps={{
                    'aria-label': 'password',
                  }}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <LoadingButton
                  onClick={handleSubmit}
                  endIcon={<EmailIcon />}
                  sx={{ width: '100%', margin: '0 auto', height: '5ch' }}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                >
                  Log In
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
                      OKE
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>

          </Box>
        </Container>
      </Box >
    </BrandingProvider >
  )
}
