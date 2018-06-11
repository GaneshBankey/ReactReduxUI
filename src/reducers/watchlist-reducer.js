import { FETCH_WATCHLIST } from "../constants/action-types";
const initialState = {
    watchlist: []
};
const watchlistReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WATCHLIST:
            return {
                ...state,
                watchlist: [...state.watchlist, action.payload]
            };
        default:
            return state;
    }
};
export default watchlistReducer;