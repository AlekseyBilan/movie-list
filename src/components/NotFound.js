import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <div className='container'>
                Page not found. Go to <Link to='/'>Home</Link>?
            </div>
        )
    }
}