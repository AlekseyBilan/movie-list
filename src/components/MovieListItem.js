import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link  } from "react-router-dom";

import Button from './Button';
import CutTextOverflow from './CutTextOverflow';
import {imagesPath, movieOverviewContainerHeight} from './../appSettings';

class MovieListItem extends Component {

    componentDidMount() {
        this.checkTextOverflow(this.props.movie);
    }

    checkTextOverflow = (movie) => {
        if(this.refs.overview.clientHeight > movieOverviewContainerHeight){
            this.refs.overview.innerHTML = CutTextOverflow({text:movie.overview, container:this.refs.overview, contentLoaded:true, height:movieOverviewContainerHeight, returnText:true});
        }
    };

    render(){
        let movie = this.props.movie, src = imagesPath+movie.poster_path, title = movie.title;

        return(
            <section className='movie-list'>
                <div className="image-wrapper">
                    <Link to={'/preview/'+movie.id}>
                        <img className="movie-icon" src={src} alt={title}/>
                    </Link>
                </div>
                <div className="about-movie-content">
                    <h4 className="movie-title">{title}</h4>
                    <span className="overview" ref="overview">
                        {movie.overview}
                    </span>
                    <div className="actions-wrap">
                        <Link to={'/preview/'+movie.id}>
                            <Button text="MORE INFO" type="button" cName="btn about-movie"/>
                        </Link>
                    </div>
                </div>
            </section>
        )
    }
}

MovieListItem.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string
    })
};

export default MovieListItem;