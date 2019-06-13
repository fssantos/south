import { all, call, put, takeLatest, select } from 'redux-saga/effects';
import store from 'store';
import * as selectors from '../selectors';
import {
    fetchBooks,
    changeBooksFilter,
    fetchMoreBooks,
    fetchBooksCompleted,
    fetchMoreBooksCompleted,
    favoriteClick,
    favoriteClickCompleted,
    fetchFavorites,
    fetchFavoritesCompleted
} from '../ducks';
import { getBooksFromApi, getFavoritesFromStorage } from '../api';

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

function* handleFavoriteClick(action) {
    const { item } = action.payload;
    if (store.get(`favorite:${item.id}`)) {
        store.remove(`favorite:${item.id}`);
        yield put(favoriteClickCompleted({ item, function: `REMOVE` }));
    } else {
        store.set(`favorite:${item.id}`, item);
        yield put(favoriteClickCompleted({ item, function: `ADD` }));
    }
}

function* fetchFavoritesSaga() {
    try {
        const favorites = yield call(() => getFavoritesFromStorage());
        yield put(fetchFavoritesCompleted({ favorites }));
    } catch (error) {
        yield put(fetchFavoritesCompleted(error));
    }
}

export default function* bookSaga() {
    yield all([
        takeLatest(fetchBooks, fetchBooksSaga),
        takeLatest(changeBooksFilter, fetchBooksSaga),
        takeLatest(fetchMoreBooks, fetchMoreBooksSaga),
        takeLatest(favoriteClick, handleFavoriteClick),
        takeLatest(fetchFavorites, fetchFavoritesSaga)
    ]);
}
