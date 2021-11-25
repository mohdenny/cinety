import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getPopular, getNowPlaying, getUpcoming, getTopRated } from "../../actions/movies"
import Heading from "../heading/Heading"
import Chip from "../chip/Chip"
import Card from "../card/Card"

const Explore = ({ 
    getPopular, 
    getNowPlaying, 
    getUpcoming, 
    getTopRated,
    movies: { movies }
}) => {
    const movie = movies.data
    const term = movies.term

    useEffect(() => {
        getPopular()
    }, [getPopular])

    return (
        <>  
            <div className="flex flex-col space-y-4 font-roboto">
                {/* <Heading text="Explore" /> */}

                <div className="flex flex-row space-x-4 bg-white border-b-2 py-2 items-center justify-center">
                    <Chip text="Popular" actions={getPopular} name="popular" term={term}/>
                    <Chip text="Now Playing" actions={getNowPlaying} name="now_playing" term={term}/>
                    <Chip text="Upcoming" actions={getUpcoming} name="upcoming" term={term}/>
                    <Chip text="Top Rated" actions={getTopRated} name="top_rated" term={term}/>
                </div>

                <div className="px-4 grid grid-cols-4 gap-4">
                    {
                        movie && <Card movie={movie}/>
                    }
                </div>
            </div>
        </>
    )
}

Explore.propTypes = {
    getPopular: PropTypes.func.isRequired,
    getNowPlaying: PropTypes.func.isRequired,
    getUpcoming: PropTypes.func.isRequired,
    getTopRated: PropTypes.func.isRequired,
    movies: PropTypes.object.isRequired,
    trending: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    movies: state.movies,
    trending: state.trending
})

export default connect(mapStateToProps, { 
    getPopular, 
    getNowPlaying, 
    getUpcoming, 
    getTopRated 
})(
    Explore
)