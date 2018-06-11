import { FETCH_WATCHLIST, AUTHENTICATION } from "../constants/action-types";
export const fetchWatchlist = watchlist => ({ type: FETCH_WATCHLIST, payload: watchlist });
export const authenticate = authDetails => ({ type: AUTHENTICATION, payload: authDetails});

