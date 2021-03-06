import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { removeEnd, kebapToCamel } from '../utils/stringParser'
import { authService } from '../services/authService'
import AuthContext from '../contexts/AuthContext'
import { handleValidationErrors } from './handlers/handleValidationErrors'

class Register extends Component {

  constructor (props) {
    super(props)
    
    this.state = {
      username: '',
      email: '', 
      password: '', 
      confPassword: '',
      bio: '', 
      image: '' 
    }
  }
  

  

  handleSubmit = (e) => {
    e.preventDefault()

    const { username, email, password, bio, image } = this.state
    const user = { username, email, password, bio, image }

    const { Auth } = this.context

    authService.register({ ...user })
      .then(data => {
        const { errors } = data

        if(errors) {
          handleValidationErrors(errors)

          return
        }

        toast.success(`Wellcome, ${data.user.username}. You have registered.`, {
          position: toast.POSITION.TOP_RIGHT
        })
        Auth.saveUserInfo(data)
        this.props.history.push('/articles/all')
      })
  }

  handleChange = ({ target }) => {
    const { value, id } = target
    const parsedId = kebapToCamel(removeEnd(id, '-reg'))

    this.setState({ [parsedId]: value })
  }

  render () {
    const { username, email, password, confPassword, bio, image } = this.state

    return (
      <div className='container p-3 mb-2 bg-dark text-white'>
        <h3>Register Form</h3>
        <div className='row justify-content-md-center'>
          <div className='col-md-auto'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='email-reg'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email-reg'
                    placeholder='Email'
                    value={email}
                    onChange={this.handleChange} />
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='username-reg'>Username</label>
                  <input
                    type='text'
                    className='form-control'
                    id='username-reg'
                    placeholder='Username'
                    value={username}
                    onChange={this.handleChange} />
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='password-reg'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='password-reg'
                    placeholder='Password'
                    value={password}
                    onChange={this.handleChange}  
                    />
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='conf-password-reg'>Confirm Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='conf-password-reg'
                    placeholder='Confirm Password'
                    value={confPassword}
                    onChange={this.handleChange}  />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='bio-reg'>Bio</label>
                <input
                  type='text'
                  className='form-control'
                  id='bio-reg'
                  placeholder='Bio' 
                  value={bio}
                  onChange={this.handleChange} />
              </div>
              <div className='form-group'>
                <label htmlFor='image-reg'>Image Url</label>
                <input
                  type='text'
                  className='form-control'
                  id='image-reg'
                  placeholder='Image Url'
                  value={image}
                  onChange={this.handleChange} />
              </div>
              {
                image
                  ? <img src={image} alt="Your avatar" />
                  : null
              }
              <br />
              <button type='submit' className='btn btn-primary'>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Register.contextType = AuthContext

export default Register
