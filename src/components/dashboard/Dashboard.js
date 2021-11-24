import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getPopular, getNowPlaying, getUpcoming } from "../../actions/movies"
import { getTrendingAll } from "../../actions/trending"
import Heading from "../heading/Heading"
import Chip from "../chip/Chip"
import Card from "../card/Card"

const Dashboard = ({ 
    getPopular, 
    getNowPlaying, 
    getUpcoming, 
    getTrendingAll, 
    movies: { movies }, 
    trending: { trending }
}) => {
    const movie = movies.data
    const clicked = movies.clicked

    useEffect(() => {
        getPopular()
    }, [getPopular])

    return (
        <>  
            <div className="flex flex-col space-y-4">
                <Heading text="Dashboard" />

                <div className="flex flex-row space-x-4 border-t-2 border-b-2 py-2 items-center justify-center">
                    <Chip text="Popular" action={getPopular} name="popular" clicked={clicked}/>
                    <Chip text="Now Playing" action={getNowPlaying} name="now-playing" clicked={clicked}/>
                    <Chip text="Upcoming" action={getUpcoming} name="upcoming" clicked={clicked}/>
                    <Chip text="Trending" action={getTrendingAll} name="trending" clicked={clicked}/>
                </div>

                <div className="grid grid-cols-4 gap-4">
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
    getTrendingAll: PropTypes.func.isRequired,
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
    getTrendingAll 
})(
    Dashboard
)