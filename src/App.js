import React from 'react';
import Provider from "react-redux/es/components/Provider";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Preview from "./components/Preview";
import NotFound from "./components/NotFound";
import MovieList from './components/MovieList';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import rootReducer from './rootReducer';

import './styles/app.scss';

const middleware = [thunk];
const store = createStore(rootReducer, load(), applyMiddleware(...middleware, save()));

const App = () => {
    return(
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path='/' render={ () => <MovieList store={store}/>}/>
                    <Route path='/preview/:id' render={ (props) => <Preview {...props}/>}/>
                    <Route path='*' component={NotFound} />
                </Switch>
            </Router>
        </Provider>
    )
};

export default App;
