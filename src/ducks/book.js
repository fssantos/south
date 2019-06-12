import { createAction, handleActions } from 'redux-actions';

export const fetchBooks = createAction('FETCH_BOOKS');
export const fetchBooksCompleted = createAction('FETCH_BOOKS_COMPLETED');

export default handleActions(
    {
        [fetchBooksCompleted]: (state, { payload }) => payload.books
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
