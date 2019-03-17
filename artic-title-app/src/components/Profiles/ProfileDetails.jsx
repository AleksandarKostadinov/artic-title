import React, { Component } from 'react'
import { profilesService } from '../../services/profilesService'
import { toast } from 'react-toastify';

export default class ProfileDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      profile: {},
      hasFetched: false
    }
  }

  follow = () => {
    profilesService.follow(this.state.profile.username)
    .then((data) => {
      toast.success(`You are now following ${data.profile.username}!`, {
        position: toast.POSITION.TOP_RIGHT
      })
      this.setState({profile: data.profile})
      this.props.history.push('/articles/feed')
    })
    .catch(err => console.log(err))
  }

  unfollow = () => {
    profilesService.unfollow(this.state.profile.username)
      .then((data) => {
        toast.success(`You are not following ${data.profile.username} any more!`, {
          position: toast.POSITION.TOP_RIGHT
        })
        this.setState({profile: data.profile})
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    const { username } = this.props.match.params

    profilesService.getProfile(username)
      .then((data) => {
        this.setState({ profile: data.profile, hasFetched: true })
      })
  }

  render() {
    if (!this.state.hasFetched) {
      return <div>Loading...</div>
    }

    const { profile } = this.state

    return (<div className='container'>
      {JSON.stringify(profile)}
      <div className='row profile'>
        <div className='col-md-3'>
          <div className='profile-sidebar'>
            <div className='profile-usertitle'>
              <div className='profile-usertitle-name'>
                {profile.username}
              </div>
            </div>
            <div className='profile-userbuttons'>
              {
                profile.following
                  ? <button onClick={this.unfollow} type='button' className='btn btn-denger btn-sm'>Unfollow</button>
                  : <button onClick={this.follow} type='button' className='btn btn-success btn-sm'>Follow</button>
              }
            </div>
          </div>
        </div>
        {
          profile.bio
            ? (
              <div className="col-md-9">
                <div className="profile-content">
                  {profile.bio}
                </div>
              </div>
            )
            : null
        }
      </div>
    </div>
    )
  }
}
