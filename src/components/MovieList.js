import React, {Component} from 'react';
import MovieListItem from './MovieListItem'
import Search from "./Search";
import InfiniteScroll from "react-infinite-scroll-component";
import {getMovies} from '../actions'

class MovieList extends Component {
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
        let {movies} = store;
        return(
            <div>
                <Search getSearchResult={this.fetchMoreData} changeSearchQuery = {this.fetchMoreData} store = {this.store}/>
                {
                    (movies.moviesLoaded) ?
                        <InfiniteScroll
                            dataLength={movies.results.length}
                            isLoading={movies.moviesLoaded}
                            next={this.fetchMoreData.bind(this, store.movies.searchQuery, store.movies.page)}
                            hasMore={movies.hasMore}
                            loader={movies.isLoading ? <h4>Loading...</h4> : null}
                            endMessage={
                                <p style={{textAlign: 'center'}}>
                                    <b>You have seen all movies</b>
                                </p>
                            }
                        >

                        {
                        movies.results.map((movie, index) => (
                            movie.title ? <MovieListItem movie={movie} key={index}/> : null
                        ))
                        }

                        </InfiniteScroll>
                    : null
                }
            </div>
        )
    }
}

export default MovieList;