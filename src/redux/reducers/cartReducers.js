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
    case types.UPDATE_CART_QUANTITY_SUCCESS:
      return {
        ...state,
        item: action.payload,
      };
    case types.UPDATE_CART_QUANTITY_FAILURE:
      return state;
    case types.REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        item: action.payload,
      };
    case types.REMOVE_FROM_CART_FAILURE:
      return state;
    case types.EMPTY_CART_SUCCESS:
      return {
        ...state,
        item: action.payload,
      };
    case types.EMPTY_CART_FAILURE:
      return state;
    default:
      return state;
  }
};

export default cartReducers;
