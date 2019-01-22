import React, {Component, Fragment} from 'react';
import MovieListItem from './MovieListItem'
import PropTypes from 'prop-types'

export default class MovieList extends Component {
    render() {
        let movies = this.props.movies;
        return <Fragment>
            {movies.map((movie, index) => (
                    movie.title ? <MovieListItem movie={movie} key={index}/> : null
            ))}
            </Fragment>
    }
}

MovieList.propTypes = {
    movies: PropTypes.array.isRequired
};