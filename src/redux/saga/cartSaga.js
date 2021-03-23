import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as cartActions from '../actions/cartActions';
import * as types from '../types/cartTypes';
import * as cartService from '../../services/cartService';
import {
  showProductLoading,
  hideProductLoading,
} from '../actions/productActions';

function* addToCart(action) {
  try {
    yield put(showProductLoading());
    const cart = yield call(
      cartService.addToCart,
      action.payload.productId,
      action.payload.quantity
    );
    console.log(cart);
    yield put(cartActions.addCartSuccess(cart));
  } catch (error) {
    yield put(cartActions.addCartFailure());
  }
  yield put(hideProductLoading());
}

function* fetchCart() {
  try {
    const cart = yield call(cartService.getCart);
    // console.log(cart);
    yield put(cartActions.fetchCartSuccess(cart));
  } catch (error) {
    yield put(cartActions.fetchCartFailure());
  }
}

function* watchFetchCart() {
  yield takeEvery(types.FETCH_CART, fetchCart);
}

function* watchAddToCart() {
  yield takeEvery(types.ADD_CART, addToCart);
}

export default function* cartSaga() {
  yield all([watchFetchCart(), watchAddToCart()]);
}
