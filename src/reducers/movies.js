import { GET_MOVIE_POPULAR, MOVIE_POPULAR_ERROR } from "../actions/type"

const initialState = {
    movies: [],
    loading: true,
    error: {}
}

const profileReducer = ( state = initialState, action ) => {
    const { type, payload } = action

    switch (type) {
        case GET_MOVIE_POPULAR:
            return {
                ...state,
                movies: payload,
                loading: false
            }
        case MOVIE_POPULAR_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                movies: null
            }
        default:
            return state
    }
}

export default profileReducer