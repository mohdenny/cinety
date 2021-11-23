import api from "../utils/api"
import { API_KEY } from "../utils/config"
import {  GET_MOVIE_POPULAR, MOVIE_POPULAR_ERROR } from "./type"

export const getPopular = () => async (dispatch) => {
    try {
        const res = await api.get(`/movie/popular?api_key=${API_KEY}`)

        dispatch({
            type: GET_MOVIE_POPULAR,
            payload: { data: res.data.results, page: res.data.page }
        })
    } catch (err) {
        dispatch({
            type: MOVIE_POPULAR_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}