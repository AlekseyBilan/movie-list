import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
import {clear} from 'redux-localstorage-simple';
import {clearLocalStorageMovies} from '../actions'
import '../styles/search.scss';

class Search extends Component {
    constructor(props) {
        super(props);

        this.btnClickHandler = this.btnClickHandler.bind(this);
    }

    btnClickHandler = () => {
        if (!this.refs.searchQuery.value) return false;
        let searchStr = this.refs.searchQuery.value;
        clear('movies');//localStorage.removeItem('movies');
        this.props.store.dispatch(clearLocalStorageMovies());
        this.props.getSearchResult(searchStr);
    };

    render() {
        return (
            <div className='search-container'>
                <input className="search-query" type="text" ref="searchQuery"
                       placeholder="Type search query here, to get results"/>
                <Button type="button" text="Search" onClick={this.btnClickHandler} cName={'btn search-button'}
                        disabled={false}/>
            </div>
        )
    }
}

Search.propTypes = {
    getSearchResult: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired
};

export default Search;