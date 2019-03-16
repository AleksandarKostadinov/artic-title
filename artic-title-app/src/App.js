import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import AppNav from './components/AppNav'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Articles from './components/Articles/Articles'
import Register from './components/Register'
import Profiles from './components/Profiles/Profiles';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ToastContainer autoClose={10000} />
        <AppNav />
        {/* <Nav /> */}
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/logout' component={Logout} exact />
          <Route path='/articles' component={Articles} />
          <Route path='/profiles' component={Profiles} />
        </Switch>
      </div>
    )
  }
}

export default App
