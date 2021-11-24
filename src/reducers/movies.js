import { 
    GET_MOVIE_POPULAR, 
    MOVIE_POPULAR_ERROR,
    GET_MOVIE_NOWPLAYING, 
    MOVIE_NOWPLAYING_ERROR, 
    GET_MOVIE_UPCOMING, 
    MOVIE_UPCOMING_ERROR,
    GET_MOVIE_TOPRATED, 
    MOVIE_TOPRATED_ERROR
} from "../actions/type"

const initialState = {
    movies: [],
    loading: true,
    clicked: null,
    error: {}
}

const profileReducer = ( state = initialState, action ) => {
    const { type, payload } = action

    switch (type) {
        case GET_MOVIE_POPULAR:
        case GET_MOVIE_NOWPLAYING:
        case GET_MOVIE_UPCOMING:
        case GET_MOVIE_TOPRATED:
            return {
                ...state,
                movies: payload,
                clicked: payload.clicked,
                loading: false
            }
        case MOVIE_POPULAR_ERROR:
        case MOVIE_NOWPLAYING_ERROR:
        case MOVIE_UPCOMING_ERROR:
        case MOVIE_TOPRATED_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                clicked: null,
                movies: null
            }
        default:
            return state
    }
}

export default profileReducer