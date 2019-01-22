import { combineReducers } from 'redux';

import movies from './reducers';

const rootReducer = combineReducers({
    movies,
});

export default rootReducer;