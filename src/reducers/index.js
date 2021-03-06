import {GET_MOVIES, GET_MOVIE, CLEAR_LOCAL_STORAGE_MOVIES} from '../actions'

const initialState = {
    results: [],
    moviesLoaded: false,
    movieLoaded: false,
    searchQuery:'',
    page: null,
    pageCount: null,
    hasMore: true,
    movie: []
};

export default function reducer(state, action){
    if(!state)state=initialState;
    const { type, data } = action;
    switch (type){
        case GET_MOVIES:
            return {
                results: state.results.concat(data.results),
                moviesLoaded: true,
                pageCount: data.total_pages,
                page: data.currentPage,
                searchQuery: data.searchQuery || state.searchQuery,
                hasMore: data.currentPage < data.total_pages
            };

        case GET_MOVIE:
            return {
                movie: data,
                movieLoaded: true
            };

        case CLEAR_LOCAL_STORAGE_MOVIES:
            return initialState;

        default:
            return state;
    }
}