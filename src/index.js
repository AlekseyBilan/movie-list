import { render } from 'react-dom'
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

import App from './App';
import Preview from './components/Preview'
import NotFound from './components/NotFound'
import rootReducer from './rootReducer';
import './styles/index.scss';

import * as serviceWorker from './serviceWorker';

const middleware = [thunk];
const store = createStore(rootReducer, load(), applyMiddleware(...middleware, save()));

render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/' render={ () => <App store={store}/>}/>
                <Route path='/preview/:id' render={ props => <Preview {...props}/>}/>
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
