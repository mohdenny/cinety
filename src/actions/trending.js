import api from "../utils/api"
import { API_KEY } from "../utils/config"
import { 
    GET_TRENDING_ALL,
    TRENDING_ALL_ERROR
} from "./type"

export const getTrendingAll = () => async (dispatch) => {
    try {
        const res = await api.get(`/trending/all/day?api_key=${API_KEY}`)

        dispatch({
            type: GET_TRENDING_ALL,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: TRENDING_ALL_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}