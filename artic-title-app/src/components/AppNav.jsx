import React, { Component, Fragment } from 'react'
import { NavLink} from 'react-router-dom'
import AuthContext from '../contexts/AuthContext';

class AppNav extends Component {
  render () {
    const { Auth } = this.context

    return (
      <nav className='navbar navbar-expand-lg navbar-primary bg-light'>
        <NavLink className='navbar-brand' to='/'>Artic title</NavLink>

        <div className='collapse navbar-collapse'>

          <ul className='navbar-nav mr-auto'>
            {
              Auth.isUserAuthenticated()
                ? (<Fragment>
                  <li className='nav-item'>
                    <NavLink exact activeClassName='activeLink' className='nav-link' to='/articles/create'>Create Articles</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink exact activeClassName='activeLink' className='nav-link' to='/articles/feed'>Feed</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink exact activeClassName='activeLink' className='nav-link' to='/articles/all'>All</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink exact activeClassName='activeLink' className='nav-link' to='/me'>Helllo { Auth.getUsername() }!</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink exact activeClassName='activeLink' className='nav-link' to='/logout'>logout</NavLink>
                  </li>
                </Fragment>)
                : (<Fragment>
                  <li className='nav-item'>
                    <NavLink exact activeClassName='activeLink' className='nav-link' to='/register'>Register</NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink exact activeClassName='activeLink' className='nav-link' to='/login'>Login</NavLink>
                  </li>
                </Fragment>)
            }
          </ul>
        </div>
      </nav>
    )
  }
}

AppNav.contextType = AuthContext

export default AppNav
