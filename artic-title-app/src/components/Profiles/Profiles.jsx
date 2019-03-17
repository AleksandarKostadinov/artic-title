import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import Login from '../Login'
import MyProfile from './MyProfile'
import './Profiles.css'
import ProfileDetails from './ProfileDetails';

export default class Profiles extends Component {
  
  render () {
    const { match } = this.props
    const { path: currentPath } = match

    return (
      <div>
        <Switch>
          <PrivateRoute path={`${currentPath}/me`} exact component={MyProfile} />
          <PrivateRoute path={`${currentPath}/:username`} component={ProfileDetails} />
          <Route component={Login} />} />
        </Switch>
      </div>
    )
  }
}