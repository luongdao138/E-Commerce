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
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const NavBar = ({ totalItems }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar className={classes.title} color='inherit'>
          <Link to='/' style={{ color: '#fff' }}>
            <Typography variant='h6' component='div' className={classes.logo}>
              <Avatar sizes='20px' src={logo} style={{ marginRight: '5px' }} />
              Commerce.js
            </Typography>
          </Link>
          <div className={classes.grow}></div>
          <div className={classes.button}>
            {location.pathname !== '/cart' && (
              <IconButton
                aria-label='Show cart items'
                color='inherit'
                onClick={() => {
                  history.push('/cart');
                }}
              >
                <Badge badgeContent={totalItems} color='secondary'>
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
