import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Product from './Product';
import { useStyles } from './style';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();
  return (
    <main style={{ marginTop: '60px' }}>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          {products.map((product) => {
            return (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </main>
  );
};

export default Products;
