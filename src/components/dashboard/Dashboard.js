import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getPopular, getNowPlaying, getUpcoming, getTopRated } from "../../actions/movies"
import Heading from "../heading/Heading"
import Chip from "../chip/Chip"
import Card from "../card/Card"

const Dashboard = ({ 
    getPopular, 
    getNowPlaying, 
    getUpcoming, 
    getTopRated,
    movies: { movies }
}) => {
    const movie = movies.data
    const clicked = movies.clicked

    useEffect(() => {
        getPopular('popular')
    }, [getPopular])

    return (
        <>  
            <div className="flex flex-col space-y-4">
                {/* <Heading text="Dashboard" /> */}

                <div className="flex flex-row space-x-4 bg-white border-b-2 py-2 items-center justify-center">
                    <Chip text="Popular" action={getPopular} name="popular" clicked={clicked}/>
                    <Chip text="Now Playing" action={getNowPlaying} name="now-playing" clicked={clicked}/>
                    <Chip text="Upcoming" action={getUpcoming} name="upcoming" clicked={clicked}/>
                    <Chip text="Top Rated" action={getTopRated} name="top-rated" clicked={clicked}/>
                </div>

                <div className="px-4 grid grid-cols-4 gap-4">
                    {
                        movie && movie.map(item => {
                            return (
                                <Fragment key={item.id}>
                                    <Card imageUrl={item.backdrop_path} title={item.title} overview={item.overview} rating={item.vote_average}/>
                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

Dashboard.propTypes = {
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
    Dashboard
)