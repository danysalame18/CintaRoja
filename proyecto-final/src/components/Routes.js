import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Pages/Home/Home'
import Premier from '../components/Pages/Premier/Premier'
import Bundesliga from '../components/Pages/Bundesliga/Bundesliga'
import LaLiga from '../components/Pages/LaLiga/LaLiga'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path ="/" component={Home} />
                <Route exact path="/premier" component={Premier} />
                <Route exact path="/bundesliga" component={Bundesliga} />
                <Route exact path="/laliga" component={LaLiga} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes