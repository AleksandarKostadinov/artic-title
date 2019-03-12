import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AppNav extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-primary bg-light'>
        <NavLink className='navbar-brand' to='/'>Navbar</NavLink>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <NavLink className='nav-link' to='/'>Home <span className='sr-only'>(current)</span></NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/register'>Register</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/login'>Login</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/articles'>Articles</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
