import { Grid, Dialog, TextField, Avatar, ListItem, DialogTitle, DialogActions, DialogContentText, DialogContent, Paper, Alert, Typography, Checkbox, Button, FormControl, Select, MenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'
import PropTypes from 'prop-types';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LoadingButton from '@mui/lab/LoadingButton';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { updateData } from '../api/ApiServer';
import NumberFormat from 'react-number-format';
import { useAuth } from '../contexts/AuthContext';
import { default as VNnum2words } from 'vn-num2words';
import Calculator from './Calculator';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="&#8363;"
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function ToDo() {

  const members = ['Hoàng', 'Hiên', 'Hiếu', 'Hưng', 'Tiến'];
  const [alertMessage, setAlertMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [memPay, setMemPay] = React.useState('');
  const [listMemEat, setListMemEat] = React.useState([]);
  const [amountInWord, setAmountInWord] = React.useState('');
  const [infomation, setInfomation] = React.useState('');

  const [open, setOpen] = React.useState(false);

  const [amount, setAmount] = React.useState({
    textmask: '(100) 000-0000',
    numberformat: '0'
  });

  const { currentUser } = useAuth();

  const handleChange = (event) => {
    setAmount({
      ...amount,
      [event.target.name]: event.target.value,
    });
    if (event.target.value === '') {
      setAmountInWord('');
    } else {
      setAmountInWord(VNnum2words(parseInt(event.target.value)) + ' đồng');
    }
  };

  const handleClickOpen = () => {
    setLoading(true);
    if (memPay === '' || infomation === '' || listMemEat.length === 0 || amount.numberformat === '' || parseInt(amount.numberformat) === 0) {
      setAlertMessage('Please fill all fields');
      setLoading(false);
      setOpen(true);
    } else {
      var param = "todayMoney=" + amount.numberformat + "&";
      for (var i = 0; i < listMemEat.length; i++) {
        param += "l=" + listMemEat[i] + "&";
      }
      param += "memPay=" + memPay;
      param += "&todayMonInWords=" + amountInWord;
      param += "&register=" + currentUser.displayName;
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
    <div style={{ width: '100%', margin: '0 auto' }}>
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
            510Pay - For Real Money
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
            <FormControl sx={{ m: 1, width: '30ch' }}>
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
            <TextField
              sx={{ width: '30ch', margin: '0 auto' }}
              value={amount.numberformat}
              onChange={handleChange}
              name="numberformat"
              id="formatted-numberformat-input"
              InputProps={{
                inputComponent: NumberFormatCustom
              }}
            />

          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              sx={{ width: '30ch', margin: '0 auto' }}
              id="outlined-read-only-input"
              label="Amount In Words"
              value={amountInWord}
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              type={'text'}
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
                  OK
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Paper>
      <Paper
        sx={{
          p: 1,
          marginBottom: '10px',
          marginTop: '10px',
          maxWidth: '100%',
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
      >
        <Item sx={{ maxWidth: '45ch', margin: '0 auto'}}>
          <Typography sx={{ fontSize: 20, fontWeight: 1000 }} color="text.first" gutterBottom>
            Calculator
          </Typography>
          <Grid item xs={12} md={12}>
            <Calculator
              setAmount={setAmount}
            />
          </Grid>
        </Item>
      </Paper>
    </div>
  );
}
