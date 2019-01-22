import React, { Component} from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import {getMovies} from './actions'

import './styles/app.scss';

class App extends Component{
    constructor (props){
        super(props);
        this.store = this.props.store;
    }

    componentDidMount() {
        this.unsubscribe = this.store.subscribe(()=>this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    fetchMoreData = (str, page = 0) => {
        this.store.dispatch(getMovies(str, page+1));
    };

    render() {
        const store = this.store.getState();

        return (
            <div>
                <Search getSearchResult={this.fetchMoreData} changeSearchQuery = {this.fetchMoreData} store = {this.store}/>
                {
                (store.movies.moviesLoaded) ?
                    <InfiniteScroll
                        dataLength={store.movies.results.length}
                        isLoading={store.movies.moviesLoaded}
                        next={this.fetchMoreData.bind(this, store.movies.searchQuery, store.movies.page)}
                        hasMore={store.movies.hasMore}
                        loader={store.movies.isLoading ? <h4>Loading...</h4> : null}
                        endMessage={
                            <p style={{textAlign: 'center'}}>
                                <b>You have seen all movies</b>
                            </p>
                        }
                    >
                        <MovieList movies={store.movies.results}/>
                    </InfiniteScroll>
                : null
                }
            </div>
        )
    }
}

export default App;
