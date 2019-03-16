import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { removeEnd, kebapToCamel } from '../utils/stringParser'
import { authService } from '../services/authService'
import AuthContext from '../contexts/AuthContext'
import { handleValidationErrors } from './handlers/handleValidationErrors'

class Login extends Component {

  constructor (props) {
    super(props)
    
    this.state = {
      email: '', 
      password: ''
    }
  }
  

  

  handleSubmit = (e) => {
    e.preventDefault()

    const { email, password } = this.state
    const user = {  email, password }

    const { Auth } = this.context

    authService.login({ ...user })
      .then(data => {
        const { errors } = data

        if(errors) {
          handleValidationErrors(errors)

          return
        }
        toast.success(`Wellcome, ${data.user.username}. You have logged in.`, {
          position: toast.POSITION.TOP_RIGHT
        })
        Auth.saveUserInfo(data)
        this.props.history.push('/articles/all')
      })
      .catch()
  }

  handleChange = ({ target }) => {
    const { value, id } = target
    const parsedId = kebapToCamel(removeEnd(id, '-log'))

    this.setState({ [parsedId]: value })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className='container p-3 mb-2 bg-dark text-white'>
        <h3>Login Form</h3>
        <div className='row justify-content-md-center'>
          <div className='col-md-auto'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='email-log'>Email</label>
                  <input
                    type='text'
                    className='form-control'
                    id='email-log'
                    placeholder='Email'
                    value={email}
                    onChange={this.handleChange} />
                </div>
                <div className='form-group col-md-6'>
                <label htmlFor='password-log'>Password</label>
                  <input
                    type='password'
                    className='form-control'
                    id='password-log'
                    placeholder='Password'
                    value={password}
                    onChange={this.handleChange}  
                    />
                </div>
              </div>

              <button type='submit' className='btn btn-primary'>Sign in</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

Login.contextType = AuthContext

export default Login

