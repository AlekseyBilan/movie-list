import React, { Component } from 'react';
import {movieUrl, apiKey} from './../appSettings';

import '../styles/preview.scss';

export default class Preview extends Component {
    constructor (props){
        super(props);
        this.state = {
            movie: {}
        };
    }
    getAdditionalData(id){
        fetch(`${movieUrl}/${id}?api_key=${apiKey}`)
            .then(res => res.json())
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