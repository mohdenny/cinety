import React from 'react'
import Heading from '../heading/Heading'
import Chip from '../chip/Chip'
import Card from '../card/Card'

const Dashboard = () => {
    return (
        <>  
            <div className="flex flex-col space-y-4">
                <Heading text="Dashboard" />

                <div className="flex flex-row space-x-4 border-2 py-2 items-center justify-center">
                    <Chip text="Popular"/>
                    <Chip text="Now Playing"/>
                    <Chip text="Upcoming"/>
                    <Chip text="Trending"/>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </>
    )
}

export default Dashboard