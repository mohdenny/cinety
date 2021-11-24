import { combineReducers } from "redux"
import movies from "./movies"
import trending from "./trending"

export default combineReducers({
    movies,
    trending
})