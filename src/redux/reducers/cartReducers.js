import { initState } from '../initState';
import * as types from '../types/cartTypes';

const cartReducers = (state = initState.cart, action) => {
  switch (action.type) {
    case types.FETCH_CART_SUCCESS:
      return {
        ...state,
        item: action.payload,
      };
    case types.FETCH_CART_FAILURE:
      return {
        ...state,
        item: {},
      };
    case types.ADD_CART_SUCCESS:
      return {
        ...state,
        item: action.payload,
      };
    case types.ADD_CART_FAILURE:
      return {
        ...state,
        item: {},
      };
    default:
      return state;
  }
};

export default cartReducers;
