import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import * as selectors from '../selectors';
import {
    fetchBooks,
    changeBooksFilter,
    fetchMoreBooks,
    fetchBooksCompleted,
    fetchMoreBooksCompleted,
    addFavorite,
    addFavoriteCompleted
} from '../ducks';
import { getBooksFromApi } from '../api';

function* fetchBooksSaga(action) {
    const { filter } = action.payload;
    /*     const { searchTerm } = action.payload; */
    try {
        const books = yield call(() => getBooksFromApi({ searchTerm: filter, startIndex: 1 }));
        yield put(fetchBooksCompleted({ books }));
    } catch (error) {
        yield put(fetchBooksCompleted(error));
    }
}

function* fetchMoreBooksSaga() {
    /*     const { searchTerm } = action.payload; */
    try {
        const filter = yield select(selectors.getFilter);
        const startIndex = yield select(selectors.getStartIndex);
        const books = yield call(() =>
            getBooksFromApi({ searchTerm: filter, startIndex: startIndex + 10 })
        );
        yield put(fetchMoreBooksCompleted({ books, startIndex }));
    } catch (error) {
        yield put(fetchMoreBooksCompleted(error));
    }
}

function* saveFavorite({ item }) {
    /*     const { searchTerm } = action.payload; */
    yield console.log({ item });
    yield put(addFavoriteCompleted({ item }));
}

export default function* bookSaga() {
    yield all([
        takeLatest(fetchBooks, fetchBooksSaga),
        takeLatest(changeBooksFilter, fetchBooksSaga),
        takeLatest(fetchMoreBooks, fetchMoreBooksSaga),
        takeLatest(addFavorite, saveFavorite)
    ]);
}
