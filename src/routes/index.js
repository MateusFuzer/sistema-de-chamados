import {Router, Switch} from 'react-router-dom'
import Route from './Routes'
import React from 'react'
import SignIn from '../Pages/Signin'
import SignUp from '../Pages/SignUp'
import Dashboard from '../Pages/Dashboard'

export default function Routes() {
    return (
       <Switch>
           <Route exact path = '/' componet = { SignIn }/>
           <Route exact path = '/register' componet = { SignUp }/>
           <Route exact path = '/dashboard' componet = { Dashboard } isPrivate/>

       </Switch>
    )
}
