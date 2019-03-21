import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as BooksActions } from '~/store/ducks/books';

export function* indexBooks() {
  try {
    const response = yield call(api.get, 'books/v1/volumes?q=design&maxResults=21');

    yield put(BooksActions.loadBooksSuccess(response.data));
  } catch (error) {
    yield put(BooksActions.loadBooksFailure());
  }
}

export function* showBooks(action) {
  try {
    const { search } = action.payload;

    const response = yield call(api.get, `books/v1/volumes?q=${search}&maxResults=21`);

    yield put(BooksActions.searchBooksSuccess(response.data));
  } catch (error) {
    yield put(BooksActions.searchBooksFailure());
  }
}

export function* paginateBooks(action) {
  try {
    const { startIndex } = action.payload;

    const response = yield call(
      api.get,
      `books/v1/volumes?q=design&maxResults=21&startIndex=${startIndex}`,
    );

    yield put(BooksActions.paginateBooksSuccess(response.data));
  } catch (error) {
    yield put(BooksActions.paginateBooksFailure());
  }
}
