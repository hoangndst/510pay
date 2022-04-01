import { Grid, Dialog, TextField, Avatar, ListItem, DialogTitle, DialogActions, DialogContentText, DialogContent, Paper, Alert, Typography, Checkbox, Button, FormControl, OutlinedInput, Select, MenuItem, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask';
import LoadingButton from '@mui/lab/LoadingButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { updateData } from '../api/ApiServer';
import { default as VNnum2words } from 'vn-num2words';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ToDo(userName) {

  const members = ['Hoàng', 'Hiên', 'Hiếu', 'Hưng', 'Tiến'];
  const [alertMessage, setAlertMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [memPay, setMemPay] = React.useState('');
  const [listMemEat, setListMemEat] = React.useState([]);
  const [todayMoney, setTodayMoney] = React.useState(0);
  const [todayMonWord, setTodayMonWord] = React.useState('');
  const [infomation, setInfomation] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setLoading(true);
    if (memPay === '' || infomation === '' || listMemEat.length === 0 || todayMoney === 0) {
      setAlertMessage('Please fill all fields');
      setLoading(false);
      setOpen(true);
    } else {
      var param = "todayMoney=" + todayMoney + "&";
      for (var i = 0; i < listMemEat.length; i++) {
        param += "l=" + listMemEat[i] + "&";
      }
      param += "memPay=" + memPay;
      param += "&todayMonInWords=" + todayMonWord;
      param += "&info=" + infomation;
      updateData(param).then(res => {
        setAlertMessage(res);
        setLoading(false);
        setOpen(true);
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleMemPay = (event) => {
    setMemPay(event.target.value);
  };

  const handleMoneyInput = (event) => {
    setTodayMoney(event.target.value);
    setTodayMonWord(VNnum2words(event.target.value) + ' đồng');
  };


  const handleToggle = (value) => () => {
    const currentIndex = listMemEat.indexOf(value);
    const newListMemEat = [...listMemEat];

    if (currentIndex === -1) {
      newListMemEat.push(value);
    } else {
      newListMemEat.splice(currentIndex, 1);
    }

    setListMemEat(newListMemEat);

  };

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
                    Participants List
                  </Typography>

                  <List dense sx={{ width: '25ch', bgcolor: 'background.paper', margin: '0 auto' }}>
                    {members.map((value) => {
                      const labelId = `checkbox-list-secondary-label-${value}`;
                      return (
                        <ListItem
                          key={value}
                          secondaryAction={
                            <Checkbox
                              edge="end"
                              onChange={handleToggle(value)}
                              checked={listMemEat.indexOf(value) !== -1}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          }
                          disablePadding
                        >
                          <ListItemButton>
                            <ListItemAvatar>
                              <Avatar
                                alt={`Avatar n°${value + 1}`}
                                // src={`/img/avatar/${members.indexOf(value) + 1}.png`}
                                src={require(`../images/avatar/${members.indexOf(value) + 1}.png`)}
                              />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={`${value}`} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography sx={{ fontSize: 15, fontWeight: 1000 }} color="text.first" gutterBottom>
                    Payer
                </Typography>
                <FormControl  sx={{ m: 1, width: '30ch' }}>
                    <Select
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    value={memPay}
                    onChange={handleMemPay}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Hoàng"}>Hoàng</MenuItem>
                      <MenuItem value={"Hiên"}>Hiên</MenuItem>
                      <MenuItem value={"Hiếu"}>Hiếu</MenuItem>
                      <MenuItem value={"Hưng"}>Hưng</MenuItem>
                      <MenuItem value={"Tiến"}>Tiến</MenuItem>
                    </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12}>
                <Typography sx={{ fontSize: 15, fontWeight: 1000 }} color="text.first" gutterBottom>
                  Amount
                </Typography>
                <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
                  <OutlinedInput
                    type='number'
                    id="outlined-adornment-amount"
                    value={todayMoney}
                    endAdornment={<InputAdornment position="end">VND</InputAdornment>}
                    aria-describedby="outlined-amount-helper-text"
                    inputProps={{
                      'aria-label': 'amount',
                    }}
                    onChange={handleMoneyInput}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                    sx={{ width: '30ch', margin: '0 auto' }}
                    id="outlined-read-only-input"
                    label="Amount In Words"
                    value={todayMonWord}
                    InputProps={{
                      readOnly: true,
                    }}
                  />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                    sx={{ width: '30ch', margin: '0 auto' }}
                    id="outlined-info-input"
                    label="Infomation"
                    value={infomation}
                    InputProps={{
                      'aria-label': 'info',
                    }}
                    onChange={(event) => setInfomation(event.target.value)}
                  />
              </Grid>
              <Grid item xs={12} md={12}>
                {/* <Button variant="contained" startIcon={<AddTaskIcon />} onClick={handleClickOpen} >
                  ADD TO TODAY LIST
                </Button> */}
                <LoadingButton
                  onClick={handleClickOpen}
                  endIcon={<AddTaskIcon />}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                >
                  ADD TO TODAY LIST
                </LoadingButton>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title" sx={{ fontSize: 20, fontWeight: 1000 }}>
                    {"Notification from 510Gangz"}
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
                      OK
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid> 
        </Paper>
    </div>
  )
}
