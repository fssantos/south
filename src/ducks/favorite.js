import { createAction, handleActions } from 'redux-actions';

export const addFavorite = createAction('ADD_FAVORITE');
export const addFavoriteCompleted = createAction('ADD_FAVORITE_COMPLETED');

export default handleActions(
    {
        [addFavoriteCompleted]: (state, { payload }) => payload.item
    },
    []
);
