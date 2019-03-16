import React from 'react'
import BindingForm from './BindingForm';

export default () => {
  return (
    <BindingForm handleSubmit={(e, data) => {
      e.preventDefault()
      console.log(data)
    }} idEnd='-test'>
      <input
        type='text'
        className='form-control'
        id='title-test' />

      <label htmlFor='description-test'>Description</label>
      <textarea
        className='form-control'
        id='description-test'
        rows='3' />

      <div className='form-group'>
        <label htmlFor='body'>Content</label>
        <textarea
          className='form-control'
          id='body-test'
          rows='8' />
      </div>
    </BindingForm>
  )
}
