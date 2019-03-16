import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'
import AuthContext from './contexts/AuthContext'
import Auth from './utils/auth'

ReactDOM.render(
  <Router>
    <AuthContext.Provider value={{ Auth }} >
      <App />
    </AuthContext.Provider>
  </Router>
  , document.getElementById('root'))
