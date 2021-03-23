import * as types from '../types/productTypes';

export const showProductLoading = () => {
  return {
    type: types.SHOW_LOADING_PRODUCT,
  };
};

export const hideProductLoading = () => {
  return {
    type: types.HIDE_LOADING_PRODUCT,
  };
};

export const fetchProducts = () => {
  return {
    type: types.FETCH_PRODUCT,
  };
};

export const fetchProductsSuccess = (products) => {
  return {
    type: types.FETCH_PRODUCT_SUCCESS,
    payload: products,
  };
};

export const fetchProductsFailure = (products) => {
  return {
    type: types.FETCH_PRODUCT_FAILURE,
  };
};
