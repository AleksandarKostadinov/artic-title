import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext';

class Logout extends Component {
  logout = () => {
    const { Auth } = this.context

    Auth.logout()
  }

  render() {
    this.logout()

    return (
      <Redirect to='/login' />
    )
  }
}

Logout.contextType = AuthContext

export default Logout
