import { CssBaseline } from '@material-ui/core';
import React, { useEffect } from 'react';
import Products from './components/Product/Products';
import NavBar from './components/NavBar/NavBar';
import { connect } from 'react-redux';
import * as productActions from './redux/actions/productActions';
import * as cartActions from './redux/actions/cartActions';
import Cart from './components/Cart/Cart';

function App(props) {
  const {
    fetchProducts,
    products,
    isLoading,
    cart,
    fetchCart,
    addToCart,
  } = props;
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
    fetchCart();
  }, []);

  const handleAddToCart = (productId, quantity) => {
    addToCart(productId, quantity);
  };
  return (
    <div className='App'>
      <NavBar totalItems={cart.total_items} />
      {isLoading ? (
        <div className='loading'>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
      ) : (
        // <Products products={products} onAddToCart={handleAddToCart} />
        <Cart cart={cart} />
      )}
      <CssBaseline />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products.items,
    isLoading: state.products.isLoading,
    cart: state.cart.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(productActions.fetchProducts());
    },
    fetchCart: () => {
      dispatch(cartActions.fetchCart());
    },
    addToCart: (productId, quantity) => {
      dispatch(cartActions.addCart(productId, quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
