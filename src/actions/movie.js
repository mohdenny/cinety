import api from "../utils/api"
import { GET_MOVIE_POPULAR } from "./type"

export const getPopular = () => async (dispatch) => {
    dispatch({ type: GET_MOVIE_POPULAR })

    try {
        const res = await api.get(`/movie/popular?${API_KEY}`)
    }
}