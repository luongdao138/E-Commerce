import { all } from 'redux-saga/effects';
import cartSaga from './cartSaga';
import productSaga from './productSaga';

export default function* rootSaga() {
  yield all([productSaga(), cartSaga()]);
}
