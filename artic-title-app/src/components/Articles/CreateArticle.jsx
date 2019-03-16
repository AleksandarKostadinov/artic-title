import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { removeEnd, kebapToCamel } from '../../utils/stringParser'
import { articleService } from '../../services/articleService'

class CreateArticle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: 'Default title',
      description: 'WOW something happened',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur unde enim mollitia numquam corrupti totam quia natus! A nesciunt deserunt dolores vel dolor tenetur optio voluptatum minus libero pariatur? Veniam?'
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { title, description, body } = this.state

    console.log(title, description, body)

    articleService.create({ title, description, body })
      .then(data => {
        toast.success(`Article "${data.article.title}" created successfully!`, {
          position: toast.POSITION.TOP_RIGHT
        })

        this.props.history.push('/articles/all')
      })
      .catch(err => {
        toast.error(JSON.stringify(err), {
          position: toast.POSITION.TOP_LEFT
        })
      })
  }

  handleChange = ({ target }) => {
    const { value, id } = target
    const parsedId = kebapToCamel(removeEnd(id, '-cre'))

    this.setState({ [parsedId]: value })
  }

  render() {
    const { title, description, body } = this.state

    return (
      <div className='container p-3 mb-2 bg-dark text-white'>
        <h3>Create Article Form</h3>
        <div className='row justify-content-md-center'>
          <div className='col col-md-8'>
            <form onSubmit={this.handleSubmit}>
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
                  onChange={this.handleChange} />
              </div>
              
              <button type='submit' className='btn btn-success'>Create</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateArticle
