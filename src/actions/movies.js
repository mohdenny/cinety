import api from "../utils/api"
import { API_KEY } from "../utils/config"
import { 
    GET_MOVIE_POPULAR, 
    MOVIE_POPULAR_ERROR, 
    GET_MOVIE_NOWPLAYING, 
    MOVIE_NOWPLAYING_ERROR, 
    GET_MOVIE_UPCOMING, 
    MOVIE_UPCOMING_ERROR, 
    GET_MOVIE_TOPRATED, 
    MOVIE_TOPRATED_ERROR 
} from "./type"

export const getPopular = (button = null) => async (dispatch) => {
    try {
        const res = await api.get(`/movie/popular?api_key=${API_KEY}`)

        dispatch({
            type: GET_MOVIE_POPULAR,
            payload: { data: res.data.results, page: res.data.page, term: 'popular' }
        })
    } catch (err) {
        dispatch({
            type: MOVIE_POPULAR_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const getNowPlaying = (button = null) => async (dispatch) => {
    try {
        const res = await api.get(`/movie/now_playing?api_key=${API_KEY}`)

        dispatch({
            type: GET_MOVIE_NOWPLAYING,
            payload: { data: res.data.results, page: res.data.page, term: 'now_playing' }
        })
    } catch (err) {
        dispatch({
            type: MOVIE_NOWPLAYING_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const getUpcoming = (button = null) => async (dispatch) => {
    try {
        const res = await api.get(`/movie/upcoming?api_key=${API_KEY}`)

        dispatch({
            type: GET_MOVIE_UPCOMING,
            payload: { data: res.data.results, page: res.data.page, term: 'upcoming' }
        })
    } catch (err) {
        dispatch({
            type: MOVIE_UPCOMING_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

export const getTopRated = (button = null) => async (dispatch) => {
    try {
        const res = await api.get(`/movie/top_rated?api_key=${API_KEY}`)

        dispatch({
            type: GET_MOVIE_TOPRATED,
            payload: { data: res.data.results, page: res.data.page, term: 'top_rated' }
        })
    } catch (err) {
        dispatch({
            type: MOVIE_TOPRATED_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}