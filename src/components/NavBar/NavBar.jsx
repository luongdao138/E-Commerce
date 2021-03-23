import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import logo from '../../assets/e-commerce.jpg';
import { useStyles } from './style';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  return (
    <>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.title} color='inherit'>
          <Typography variant='h6' component='div' className={classes.logo}>
            {/* <img src={logo} alt='' height='25px' className={classes.image} /> */}
            <Avatar sizes='20px' src={logo} style={{ marginRight: '5px' }} />
            Commerce.js
          </Typography>
          <div className={classes.grow}></div>
          <div className={classes.button}>
            <IconButton aria-label='Show cart items' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
