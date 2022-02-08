import React, { useState, useEffect } from 'react';

import { NavLink, withRouter } from 'react-router-dom';
import Routes from './Routes';

//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
/* import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  MenuList,
  MenuItem,
  ListItemText,
 } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

 */

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';



function NavigationBar() {


  /* const [appData, setAppData] = useState({ customers: [], packages: [] });
  const [invoices, setInvoices] = useState([]);


  fetch("/data.json").then(response => response.json())
   .then(data => { setAppData(data) });
 */


    const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (open) => (
    event,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event).key === 'Tab' ||
        (event).key === 'Shift')
    ) {
      return;
    }

    setIsOpen(open);
  };
  
  const activeRoute = (routeName) => {
    return window.location.pathname === routeName ? true : false;
  }


    return (

        <div className="App">
        
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  onClick={toggleDrawer(true)}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Mail Delivery Service
                </Typography>
  
              </Toolbar>
            </AppBar>
          </Box>
  

          <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer(false)}  >
          <div           
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <MenuList style={{ width: "300px" }}>
              {Routes.map((prop, key) => {
           
                  return (
                    <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                      <MenuItem selected={activeRoute(prop.path)}>
                        <ListItemText primary={prop.sidebarName} />
                       
                      </MenuItem>
                    </NavLink>
                  );
                
                
              })}
            </MenuList>
          </div>
        </Drawer>

    </div>

        );
}
export default  withRouter(NavigationBar);