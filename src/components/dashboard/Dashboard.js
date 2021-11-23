import React, { Fragment, useEffect } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getPopular } from "../../actions/movies"
import Heading from "../heading/Heading"
import Chip from "../chip/Chip"
import Card from "../card/Card"

const Dashboard = ({ getPopular, movies: { movies } }) => {
    const movie = movies.data

    useEffect(() => {
        getPopular()
    }, [getPopular])

    return (
        <>  
            <div className="flex flex-col space-y-4">
                <Heading text="Dashboard" />

                <div className="flex flex-row space-x-4 border-t-2 border-b-2 py-2 items-center justify-center">
                    <Chip text="Popular"/>
                    <Chip text="Now Playing"/>
                    <Chip text="Upcoming"/>
                    <Chip text="Trending"/>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {
                        movie && movie.map(item => {
                            return (
                                <Fragment key={item.id}>
                                    <Card image={item.backdrop_path} title={item.title} overview={item.overview} />
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
    movies: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    movies: state.movies
})

export default connect(mapStateToProps, { getPopular })(
    Dashboard
)