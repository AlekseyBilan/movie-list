import React, { Component } from 'react';
import {movieUrl, apiKey} from './../appSettings';
import PropTypes from 'prop-types';

import '../styles/preview.scss';

class Preview extends Component {
    constructor (props){
        super(props);
        this.state = {
            movie: {}
        };
    }

    getAdditionalData(id){
        fetch(`${movieUrl}/${id}?api_key=${apiKey}`)
            .then(res => res.json()).catch(error => console.log('Get movie by id =', id ,'\n Error =', error))
            .then(
                res => {
                    this.setState({
                        movie:res
                    });
                }
            )
    };

    componentDidMount() {
        this.getAdditionalData(this.props.match.params.id);
    }

    render() {
        return (
            this.state.movie ?
                <div className="preview-container">
                    <div className="content">
                        <h4 className="movie-title">{this.state.movie.title}</h4>
                        <span className="overview">{this.state.movie.overview}</span>
                    </div>
                </div>
            : null
        )
    }
}

Preview.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        overview: PropTypes.string
    })
};

export default Preview;