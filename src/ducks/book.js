import { createAction, handleActions } from 'redux-actions';

export const fetchBooks = createAction('FETCH_BOOKS');
export const fetchMoreBooks = createAction('FETCH_MORE_BOOKS');
export const fetchBooksCompleted = createAction('FETCH_BOOKS_COMPLETED');
export const fetchMoreBooksCompleted = createAction('FETCH_MORE_BOOKS_COMPLETED');

export default handleActions(
    {
        [fetchBooksCompleted]: (state, { payload }) => ({ ...payload.books, startIndex: 1 }),
        [fetchMoreBooksCompleted]: (state, { payload }) => ({
            ...state,
            startIndex: payload.startIndex + 10,
            items: [...new Set([...state.items, ...payload.books.items])]
        })
    },
    []
);

/* 
export default handleActions(
    {
        [fetchBooksCompleted]: (state, { payload }) => ({
            ...state,
            books: {
                items: [...state.books.items, payload.books.items]
            }
        })
    },
    []
); */
