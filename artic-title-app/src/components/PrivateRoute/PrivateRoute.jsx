import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'

class PrivateRoute extends React.Component {
  render () {
    const { Auth } = this.context

    const { component: Component, ...rest } = this.props

    return (
      <Route {...rest} render={(props) => (
        Auth.isUserAuthenticated()
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />
    )
  }
}

PrivateRoute.contextType = AuthContext

export default PrivateRoute
