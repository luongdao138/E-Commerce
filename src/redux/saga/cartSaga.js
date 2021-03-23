import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as cartActions from '../actions/cartActions';
import * as types from '../types/cartTypes';
import * as cartService from '../../services/cartService';
import {
  showProductLoading,
  hideProductLoading,
} from '../actions/productActions';

function* emptyCart() {
  try {
    yield put(showProductLoading());
    const cart = yield call(cartService.emptyCart);
    yield put(cartActions.emptyCartSuccess(cart));
  } catch (error) {
    yield put(cartActions.emptyCartFailure());
  }
  yield put(hideProductLoading());
}

function* removeFromCart(action) {
  try {
    yield put(showProductLoading());
    const cart = yield call(cartService.removeFromCart, action.payload);
    yield put(cartActions.removeFromCartSuccess(cart));
  } catch (error) {
    yield put(cartActions.removeFromCartFailure());
  }
  yield put(hideProductLoading());
}

function* updateCartQuantity(action) {
  try {
    yield put(showProductLoading());
    const cart = yield call(
      cartService.updateCartQuantity,
      action.payload.productId,
      action.payload.quantity
    );
    yield put(cartActions.updateCartQuantitySuccess(cart));
  } catch (error) {
    yield put(cartActions.updateCartQuantityFailure());
  }
  yield put(hideProductLoading());
}

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

function* watchUpdateCartQuantity() {
  yield takeEvery(types.UPDATE_CART_QUANTITY, updateCartQuantity);
}

function* watchRemoveFormCart() {
  yield takeEvery(types.REMOVE_FROM_CART, removeFromCart);
}

function* watchEmptyCart() {
  yield takeEvery(types.EMPTY_CART, emptyCart);
}

export default function* cartSaga() {
  yield all([
    watchFetchCart(),
    watchAddToCart(),
    watchUpdateCartQuantity(),
    watchRemoveFormCart(),
    watchEmptyCart(),
  ]);
}
