import './App.css';
import ToDo from './components/ToDo';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import * as React from 'react';
import TabPanel from '@mui/lab/TabPanel';
import { Paper, Avatar } from '@mui/material';
import Information from './components/Information';
import DataChart from './components/DataChart';
import TestCam from './components/TestCam';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useAuth } from './contexts/AuthContext';

function App() {

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
  };

  const { currentUser } = useAuth();
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
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
            <Box sx={{ flexGrow: 0, margin: '5px auto' }}>
              <Tooltip title="Profile">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar 
                    alt={`Avatar`}
                    src={require(`${currentUser.photoURL}`)}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <TabContext value={value} sx={{}}>
              <Box sx={{ borderBottom: 0, borderColor: 'divider'}}>
                <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                  <Tab sx={{fontWeight: 'Bold'}} label="510Pay" value="1" />
                  <Tab sx={{fontWeight: 'Bold'}} label="Information" value="2" />
                  <Tab sx={{fontWeight: 'Bold'}} label="Data" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <ToDo />  
              </TabPanel>
              <TabPanel value="2">
                <Information />
              </TabPanel>
              <TabPanel value="3">
                <DataChart />
              </TabPanel>
            </TabContext>    
        </Paper>
      </header>
    </div>
  );
}

export default App;
