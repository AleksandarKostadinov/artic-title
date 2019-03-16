import React, { Component } from 'react'
import AuthContext from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import './NavWithLinks.css'

class NavWithLinks extends Component {
  goBack = () => {
    this.props.history.goBack()
  }

  render() {
    const { slug, author } = this.props
    const { Auth } = this.context
    const { username } = author

    return (
      <div className='d-flex flex-md-row'>
        <div className='p-2 bd-highlight' >
          <button className='btn btn-secondary' onClick={this.goBack}>back</button>
        </div>
        {
          (username === Auth.getUsername() || Auth.isUserAdmin())
            ? <React.Fragment>
              <div className='p-2 bd-highlight' >
                <Link to={`/articles/edit/${slug}`}>Edit</Link>
              </div>
              <div className='p-2 bd-highlight' >
                <Link className='delete-link' to={`/articles/delete/${slug}`}>Delete</Link>
              </div>
            </React.Fragment>
            : null
        }

      </div>
    )
  }
}

NavWithLinks.contextType = AuthContext

export default NavWithLinks
