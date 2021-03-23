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

export const updateCartQuantity = (productId, quantity) => {
  return {
    type: types.UPDATE_CART_QUANTITY,
    payload: { productId, quantity },
  };
};

export const updateCartQuantitySuccess = (cart) => {
  return {
    type: types.UPDATE_CART_QUANTITY_SUCCESS,
    payload: cart,
  };
};

export const updateCartQuantityFailure = () => {
  return {
    type: types.UPDATE_CART_QUANTITY_FAILURE,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: types.REMOVE_FROM_CART,
    payload: productId,
  };
};

export const removeFromCartSuccess = (cart) => {
  return {
    type: types.REMOVE_FROM_CART_SUCCESS,
    payload: cart,
  };
};

export const removeFromCartFailure = () => {
  return {
    type: types.REMOVE_FROM_CART_FAILURE,
  };
};

export const emptyCart = () => {
  return {
    type: types.EMPTY_CART,
  };
};

export const emptyCartSuccess = (cart) => {
  return {
    type: types.EMPTY_CART_SUCCESS,
    payload: cart,
  };
};

export const emptyCartFailure = () => {
  return {
    type: types.EMPTY_CART_FAILURE,
  };
};
