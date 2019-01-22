import {apiKey, getMoviesUrl, movieUrl, language } from '../appSettings';

export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE = 'GET_MOVIE';
export const CLEAR_LOCAL_STORAGE_MOVIES = 'CLEAR_LOCAL_STORAGE_MOVIES';

export function getMovies(searchQuery, currentPage) {
    return async function (dispatch) {
        try {
            const result = await fetch(`${getMoviesUrl}?api_key=${apiKey}&language=${language}&query=${searchQuery}&page=${currentPage}`);
            const movies = await result.json();
            return dispatch({
                type: GET_MOVIES,
                data: Object.assign(movies, {searchQuery}, {currentPage})
            });
        } catch (e) {
            console.log(e);
        }
    };
}

export function getMovie(id) {
    return async function (dispatch) {
        try {
            const result = await fetch(`${movieUrl}/${id}?api_key=${apiKey}&language=${language}`);
            const movie = await result.json();

            return dispatch({
                type: GET_MOVIE,
                data: movie
            });
        } catch (e) {
            console.log(e);
        }
    };
}

export function clearLocalStorageMovies() {
    return async function (dispatch) {
        return dispatch({
            type: CLEAR_LOCAL_STORAGE_MOVIES
        });
    };
}
