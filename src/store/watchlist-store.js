import { createStore , applyMiddleware} from "redux";

import watchlistReducer from "../reducers/watchlist-reducer";

const WatchlistStore = createStore(watchlistReducer);

export default WatchlistStore;