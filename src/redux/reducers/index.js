import { combineReducers } from 'redux';
import cartReducers from './cartReducers';
import productReducers from './productReducers';

const rootReducers = combineReducers({
  products: productReducers,
  cart: cartReducers,
});

export default rootReducers;
