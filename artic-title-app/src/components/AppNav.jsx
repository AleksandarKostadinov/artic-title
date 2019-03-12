import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AppNav extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg navbar-primary bg-light'>
        <NavLink className='navbar-brand' to='/'>Artic title</NavLink>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink exact activeClassName='activeLink' className='nav-link' to='/register'>Register</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact activeClassName='activeLink' className='nav-link' to='/login'>Login</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact activeClassName='activeLink' className='nav-link' to='/articles/create'>Create Articles</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact activeClassName='activeLink' className='nav-link' to='/articles/top'>Top Articles</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact activeClassName='activeLink' className='nav-link' to='/articles/feed'>Feed</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
