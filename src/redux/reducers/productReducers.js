import { initState } from '../initState';
import * as types from '../types/productTypes';

const productReducers = (state = initState.products, action) => {
  switch (action.type) {
    case types.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case types.FETCH_PRODUCT_FAILURE:
      return {
        ...state,
        items: [],
      };
    case types.SHOW_LOADING_PRODUCT:
      return {
        ...state,
        isLoading: true,
      };
    case types.HIDE_LOADING_PRODUCT:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default productReducers;
