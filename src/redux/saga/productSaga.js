import { all, call, put, takeEvery } from '@redux-saga/core/effects';
import * as types from '../types/productTypes';
import * as productService from '../../services/productService';
import * as productActions from '../actions/productActions';

function* fetchProducts() {
  try {
    yield put(productActions.showProductLoading());
    const products = yield call(productService.getAllProducts);
    yield put(productActions.fetchProductsSuccess(products));
  } catch (error) {
    yield put(productActions.fetchProductsFailure());
  }
  yield put(productActions.hideProductLoading());
}

function* watchFetchProducts() {
  yield takeEvery(types.FETCH_PRODUCT, fetchProducts);
}

export default function* productSaga() {
  yield all([watchFetchProducts()]);
}
