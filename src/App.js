import { CssBaseline } from '@material-ui/core';
import React, { useEffect } from 'react';
import Products from './components/Product/Products';
import NavBar from './components/NavBar/NavBar';
import { connect } from 'react-redux';
import * as productActions from './redux/actions/productActions';
import * as cartActions from './redux/actions/cartActions';
import Cart from './components/Cart/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/CheckoutForm/Checkout/Checkout';

function App(props) {
  const {
    fetchProducts,
    products,
    isLoading,
    cart,
    fetchCart,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    emptyCart,
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
    <Router>
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
          <Switch>
            <Route exact path='/'>
              <Products products={products} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path='/cart'>
              <Cart
                cart={cart}
                updateCartQuantity={updateCartQuantity}
                removeFromCart={removeFromCart}
                emptyCart={emptyCart}
              />
            </Route>
            <Route exact path='/checkout'>
              <Checkout />
            </Route>
          </Switch>
        )}
        <CssBaseline />
      </div>
    </Router>
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
    updateCartQuantity: (productId, quantity) => {
      dispatch(cartActions.updateCartQuantity(productId, quantity));
    },
    removeFromCart: (productId) => {
      dispatch(cartActions.removeFromCart(productId));
    },
    emptyCart: () => {
      dispatch(cartActions.emptyCart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
