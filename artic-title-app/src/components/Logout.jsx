import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { Redirect } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext';

class Logout extends Component {
  logout = () => {
    const { Auth } = this.context
    toast.success(`You have loggeed out. Bye, ${Auth.getUsername()}`, {
      position: toast.POSITION.TOP_RIGHT
    })
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
