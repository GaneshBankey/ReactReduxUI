import React, { Component} from 'react';
import { connect } from 'react-redux';
import  uuidv1 from 'uuid';
import { fetchWatchlist } from '../actions/watchlist-action';

const mapDispatchToProps = dispatch => {
    return {
        fetchWatchlist : watchlist => dispatch(fetchWatchlist(watchlist))
    };
};

class ConnectedHeader extends Component{
    constructor(){
        super();
        this.state = {
            id: 0
        };
        this.fetchWatchlist = this.fetchWatchlist.bind(this);
    }


    fetchWatchlist(event){

        event.preventDefault();
        const id = this.state.id +1;
        const ROOT_URL = '/api/watchlists';
        fetch(ROOT_URL, {
            mode: 'cors',
            headers : {
                "Accept": "application/json",
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin':'*',
                'Authorization' : 'AuthToken=b65a8c25-9d08-4f9b-b709-43be11887428'
            }
        }).then(response => response.json())
        .then( watchlist=> {
            watchlist.map(item =>{
                this.props.fetchWatchlist(item);
            });
            //this.props.fetchWatchlist(watchlist);
            console.log(watchlist);
        }).catch( error => console.log(error))

        //this.props.fetchWatchlist({id: id, name: 'Test_'+id});

        this.setState({id:id});
    }

    render(){

        return (
            <button type="button" className="btn btn-primary" onClick={this.fetchWatchlist}>Load Watchlist</button>
        );
    }
}

const HeaderComponent = connect(null, mapDispatchToProps)(ConnectedHeader);

export default HeaderComponent;