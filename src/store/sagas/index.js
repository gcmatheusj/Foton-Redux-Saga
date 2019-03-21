import { all, takeLatest } from 'redux-saga/effects';

import { Types as BooksTypes } from '~/store/ducks/books';

import { indexBooks, showBooks, paginateBooks } from './books';

export default function* rootSaga() {
  return yield all([
    takeLatest(BooksTypes.LOAD_REQUEST, indexBooks),
    takeLatest(BooksTypes.PAGINATE_REQUEST, paginateBooks),
    takeLatest(BooksTypes.SEARCH_REQUEST, showBooks),
  ]);
}
