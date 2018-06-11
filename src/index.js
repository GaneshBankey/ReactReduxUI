console.log(`I'm a silly entry point`);

const arr = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);
window.iAmJavascriptES6 = iAmJavascriptES6;


import WatchlistStore from "./store/watchlist-store";
import { fetchWatchlist } from "./actions/watchlist-action";

import WatchlistApp from "./WatchlistApp";
import style from "./main.css";


window.store = WatchlistStore;
window.fetchWatchlist = fetchWatchlist;