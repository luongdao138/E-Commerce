import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import CartItem from './CartItem';
import { useStyles } from './style';
import { Link } from 'react-router-dom';
const Cart = ({ cart, updateCartQuantity, removeFromCart, emptyCart }) => {
  const classes = useStyles();
  const EmptyCart = () => {
    return (
      <>
        <Typography variant='subtitle1'>
          You have no items in your cart! Start adding some!
          <Link to='/' className={classes.link}>
            , start adding some
          </Link>
        </Typography>
      </>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart.line_items.map((item) => {
            return (
              <Grid item xs={12} md={4} key={item.id}>
                <CartItem
                  item={item}
                  updateCartQuantity={updateCartQuantity}
                  removeFromCart={removeFromCart}
                />
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
              onClick={emptyCart}
            >
              Empty Cart
            </Button>
            <Button
              className={classes.checkoutButton}
              type='button'
              size='medium'
              component={Link}
              to='/checkout'
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

  if (!cart.line_items) {
    return <div>Loading...!</div>;
  }
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} gutterBottom variant='h4'>
        Your Shopping Cart
      </Typography>
      {cart.line_items.length !== 0 ? <FilledCart /> : <EmptyCart />}
    </Container>
  );
};

export default Cart;
