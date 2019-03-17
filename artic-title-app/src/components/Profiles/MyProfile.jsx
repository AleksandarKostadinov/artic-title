import React, { Component } from 'react'
import { profilesService } from '../../services/profilesService'

export default class MyProfile extends Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: {},
      hasFetched: false
    }
  }

  componentDidMount () {
    profilesService.getMe()
      .then((data) => {
        this.setState({ profile: data.user, hasFetched: true })
      })
  }

  render () {
    if (!this.state.hasFetched) {
      return <div>Loading...</div>
    }

    const { profile } = this.state
    const roles = profile.roles.join(', ')

    return (
      <div>
        <div className='container'>
          <div className='row profile'>
            <div className='col-md-3'>
              <div className='profile-sidebar'>
                <div className='profile-usertitle'>
                  <div className='profile-usertitle-name'>
                    {profile.username}
                  </div>
                </div>
                <div className='profile-userbuttons'>
                  <button type='button' className='btn btn-success btn-sm'>Edit</button>
                  {/* </div>
                <div className='profile-usermenu'>
                  <ul className='nav'>
                    <li>
                      <a href='#' target='_blank'>
                        <i className='glyphicon glyphicon-ok' />
                        Tasks </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='glyphicon glyphicon-flag' />
                        Help </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className='col-md-9'>
              <div className='profile-content'>
                {
                  roles
                    ? `User is ${roles}`
                    : 'Regular User'
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
