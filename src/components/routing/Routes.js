import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from '../layout/Sidebar'
import Explore from '../explore/Explore'

const Routes = props => {
    return (
        <Switch>
            <Sidebar>
                <Route path="/explore" component={Explore}/>
            </Sidebar>
        </Switch>
    )
}

export default Routes