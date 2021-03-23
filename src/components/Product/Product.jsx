import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core';
import React from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStyles } from './style';

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const { name, media, price, description, id } = product;
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={media.source} title={name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='h6' gutterBottom>
            {name}
          </Typography>
          <Typography variant='h6' gutterBottom>
            {price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: description }}
          variant='body2'
          color='textSecondary'
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label='Add To Cart' onClick={() => onAddToCart(id, 1)}>
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
