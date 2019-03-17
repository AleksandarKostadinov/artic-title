import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext';

class AppNav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { Auth } = this.context
    const { collapsed } = this.state

    const toShow = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const toCollapse = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
        <div className="container">
          <button onClick={this.toggleNavbar} className={`${toCollapse}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <NavLink className='navbar-brand' to='/'>Artic title</NavLink>
          <div className={`${toShow}`} id="navbarResponsive">
            <ul className='nav navbar-nav'>
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
                      <NavLink exact activeClassName='activeLink' className='nav-link' to='/profiles/me'>Helllo {Auth.getUsername()}!</NavLink>
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
        </div>
      </nav>
    )
  }
}

AppNav.contextType = AuthContext

export default AppNav
