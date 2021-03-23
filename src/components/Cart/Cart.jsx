import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import CartItem from './CartItem';
import { useStyles } from './style';

const EmptyCart = () => {
  <Typography variant='subtitle1'>
    You have no items in your cart! Start adding some!
  </Typography>;
};

const FilledCart = ({ cart, classes }) => {
  return (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => {
          return (
            <Grid item xs={12} md={4} key={item.id}>
              <CartItem item={item} />
            </Grid>
          );
        })}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant='h5'>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            type='button'
            size='medium'
            variant='contained'
            color='secondary'
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            type='button'
            size='medium'
            variant='contained'
            color='primary'
          >
            Checkout{' '}
          </Button>
        </div>
      </div>
    </>
  );
};

const Cart = ({ cart }) => {
  const classes = useStyles();
  if (!cart.line_items) {
    return <div>Loading...!</div>;
  }
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} gutterBottom variant='h4'>
        Your Shopping Cart
      </Typography>
      {cart.line_items.length !== 0 ? (
        <FilledCart cart={cart} classes={classes} />
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default Cart;
