import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import AppNav from './components/AppNav'
import Home from './components/Home'
import Login from './components/Login'
import Articles from './components/Articles'
import Register from './components/Register'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <AppNav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/register' component={Register} exact />
          <Route path='/login' component={Login} exact />
          <Route path='/articles' component={Articles} />
        </Switch>
      </div>
    )
  }
}

export default App
