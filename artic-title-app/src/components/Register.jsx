import React, { Component } from 'react'

export default class Register extends Component {
  render () {
    return (
      <div className='container p-3 mb-2 bg-dark text-white'>
        <h3>Register Form</h3>
        <div className='row justify-content-md-center'>
          <div className='col-md-auto'>
            <form>
              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='email-reg'>Email</label>
                  <input type='email' className='form-control' id='email-reg' placeholder='Email' />
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='username-reg'>Username</label>
                  <input type='text' className='form-control' id='username-reg' placeholder='Username' />
                </div>
              </div>

              <div className='form-row'>
                <div className='form-group col-md-6'>
                  <label htmlFor='password-reg'>Password</label>
                  <input type='password' className='form-control' id='password-reg' placeholder='Password' />
                </div>
                <div className='form-group col-md-6'>
                  <label htmlFor='conf-password-reg'>Confirm Password</label>
                  <input type='password' className='form-control' id='conf-password-reg' placeholder='Confirm Password' />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='bio-reg'>Bio</label>
                <input type='text' className='form-control' id='bio-reg' placeholder='Bio' />
              </div>
              <div className='form-group'>
                <label htmlFor='image-reg'>Image Url</label>
                <input type='text' className='form-control' id='image-reg' placeholder='Image Url' />
              </div>

              <button type='submit' className='btn btn-primary'>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
