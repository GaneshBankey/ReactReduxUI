import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import WatchlistStore from './store/watchlist-store';
import WatchlistComponent from './components/watch-list-component';
import HeaderComponent from './components/header-component';

const WatchlistApp = () => {
  return (
      <Provider store={WatchlistStore}>
         <div className="container">
             <div className="row">
                 <HeaderComponent/>
             </div>
             <div className="row">
                 <div className="col-md-4 offset-md-1">
                     <h2>Watchlists</h2>
                     <WatchlistComponent/>
                 </div>
                 <div className="col-md-6 offset-md-1">
                     <h2> Watchlist Details</h2>
                 </div>
             </div>
         </div>

      </Provider>
  );
};

export default WatchlistApp;

ReactDOM.render(<WatchlistApp />, document.getElementById("app"));
