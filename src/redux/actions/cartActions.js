import * as types from '../types/cartTypes';

export const fetchCart = () => {
  return {
    type: types.FETCH_CART,
  };
};

export const fetchCartSuccess = (cart) => {
  return {
    type: types.FETCH_CART_SUCCESS,
    payload: cart,
  };
};
export const fetchCartFailure = () => {
  return {
    type: types.FETCH_CART_FAILURE,
    payload: {},
  };
};

export const addCart = (productId, quantity) => {
  return {
    type: types.ADD_CART,
    payload: {
      productId,
      quantity,
    },
  };
};

export const addCartSuccess = (cart) => {
  return {
    type: types.ADD_CART_SUCCESS,
    payload: cart,
  };
};

export const addCartFailure = () => {
  return {
    type: types.ADD_CART_FAILURE,
  };
};
