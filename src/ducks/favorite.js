import { createAction, handleActions } from 'redux-actions';

export const favoriteClick = createAction('FAVORITE_CLICK');
export const favoriteClickCompleted = createAction('FAVORITE_CLICK_COMPLETED');
export const fetchFavorites = createAction('FETCH_FAVORITES');
export const fetchFavoritesCompleted = createAction('FETCH_FAVORITES_COMPLETED');

export default handleActions(
    {
        [favoriteClickCompleted]: (state, { payload }) => {
            if (payload.function === 'ADD') return [...state, payload.item];
            return state.filter(e => e.id !== payload.item.id);
        },
        [fetchFavoritesCompleted]: (state, { payload }) => payload.favorites
    },
    []
);
