import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const mapStateToProps = state => {
    return {
       watchlist: state.watchlist
    };
};

const ConnectedWatchlist = ({ watchlist}) => (

    <ul className="list-group list-group-flush">
        {
            watchlist.map(
                el => (

                    <li className="list-group-item" key={el.id}>
                        {el.name}
                    </li>
                )
            )
        }
    </ul>
);

const WatchlistComponent = connect(mapStateToProps)(ConnectedWatchlist);

ConnectedWatchlist.propTypes = {
  watchlist: PropTypes.array.isRequired
};

export default WatchlistComponent;