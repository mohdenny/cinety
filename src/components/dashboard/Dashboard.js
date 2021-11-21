import React from 'react'
import Heading from '../heading/Heading'
import Card from '../card/Card'

const Dashboard = () => {
    return (
        <>
            <Heading text="Dashboard" />

            <div className="grid grid-cols-4 gap-4">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}

export default Dashboard