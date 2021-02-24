import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import UserInformation from './UserInformation'
import Users from './Users'

function App() {

    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Users />
                    </Route>
                    <Route exact path='/user/:n'>
                        <UserInformation />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
}

export default App
