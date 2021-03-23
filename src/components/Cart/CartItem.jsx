import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useStyles } from './style';

const CartItem = ({ item, updateCartQuantity, removeFromCart }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardMedia image={item.media.source} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant='h5'>{item.name}</Typography>
        <Typography variant='h6'>
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cartActions}>
        <div className={classes.buttons}>
          <Button
            type='button'
            size='small'
            onClick={() => {
              updateCartQuantity(item.id, item.quantity - 1);
            }}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type='button'
            size='small'
            onClick={() => {
              updateCartQuantity(item.id, item.quantity + 1);
            }}
          >
            +
          </Button>
        </div>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => {
            removeFromCart(item.id);
          }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
