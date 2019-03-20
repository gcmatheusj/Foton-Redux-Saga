import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as BooksActions, Types as BooksTypes } from '~/store/ducks/books';

export function* loadBooks() {
  try {
    const response = yield call(api.get, 'books/v1/volumes?q=design&maxResults=20');

    yield put(BooksActions.loadBooksSuccess(response.data));
  } catch (error) {
    yield put(BooksActions.loadBooksFailure());
  }
}

export function* paginateBooks(action) {
  try {
    const { startIndex } = action.payload;

    const response = yield call(
      api.get,
      `books/v1/volumes?q=design&maxResults=20&startIndex=${startIndex}`,
    );

    yield put(BooksActions.paginateBooksSuccess(response.data));
  } catch (error) {
    yield put(BooksActions.paginateBooksFailure());
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest(BooksTypes.LOAD_REQUEST, loadBooks),
    takeLatest(BooksTypes.PAGINATE_REQUEST, paginateBooks),
  ]);
}
