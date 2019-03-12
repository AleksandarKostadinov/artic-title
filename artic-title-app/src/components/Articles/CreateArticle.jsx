import React, { Component } from 'react'
import { removeEnd, kebapToCamel } from '../utils/stringParser';

class CreateArticle extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: 'Default title',
      description: 'WOW something happened',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur unde enim mollitia numquam corrupti totam quia natus! A nesciunt deserunt dolores vel dolor tenetur optio voluptatum minus libero pariatur? Veniam?'
    }
  }

  handleChange = ({ target }) => {
    const { value, id } = target
    const parsedId = kebapToCamel(removeEnd(id, '-cre'))

    this.setState({ [parsedId]: value })
  }

  render () {
    const { title, description, body } = this.state

    return (
      <div>
        <form>
          <div className='form-group'>
            <label htmlFor='title-cre'>Title</label>
            <input
              type='text'
              className='form-control'
              id='title-cre'
              value={title} 
              onChange={this.handleChange} />
          </div>

          <div className='form-group'>
            <label htmlFor='description-cre'>Description</label>
            <textarea
              className='form-control'
              id='description-cre'
              rows='3'
              value={description}
              onChange={this.handleChange} />
          </div>

          <div className='form-group'>
            <label htmlFor='body'>Content</label>
            <textarea 
              className='form-control'
              id='body-cre'
              rows='8'
              value={body} 
              onChange={this.handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateArticle
