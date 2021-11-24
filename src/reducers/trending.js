import { 
    GET_TRENDING_ALL,
    TRENDING_ALL_ERROR
} from "../actions/type"

const initialState = {
    trending: [],
    loading: true,
    error: {}
}

const profileReducer = ( state = initialState, action ) => {
    const { type, payload } = action

    switch (type) {
        case GET_TRENDING_ALL:
            return {
                ...state,
                trending: payload,
                loading: false
            }
        case TRENDING_ALL_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
                trending: null
            }
        default:
            return state
    }
}

export default profileReducer