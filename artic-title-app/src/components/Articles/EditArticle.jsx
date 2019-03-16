import React, { Component } from 'react'
import { toast } from 'react-toastify'
import { removeEnd, kebapToCamel } from '../../utils/stringParser'
import { articleService } from '../../services/articleService'
import { handleArticleErrors } from '../handlers/handleArticleErrors';

class EditArticle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      article: {
        title: '',
        description: '',
        body: ''
      },
      hasFetched: false
    }
  }

  goBack = (e) => {
    e.preventDefault()

    this.props.history.goBack()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { title, description, body } = this.state.article

    articleService.edit(this.props.match.params.slug, { title, description, body })
      .then(data => {
        const { error } = data

        if (error) {
          toast.error(error, {
            position: toast.POSITION.TOP_LEFT
          })
        } else {
          toast.success(`Article "${data.article.title}" edited successfully!`, {
            position: toast.POSITION.TOP_RIGHT
          })
        }

        this.props.history.push('/articles/all')
      })
      .catch((err) => {
        if (err.error) {
          toast.error(err.error, {
            position: toast.POSITION.TOP_LEFT
          })
        }
        toast.error(JSON.stringify(err), {
          position: toast.POSITION.TOP_LEFT
        })
        this.props.history.push('/articles/all')
      })
  }

  handleChange = ({ target }) => {
    const { value, id } = target
    const parsedId = kebapToCamel(removeEnd(id, '-edi'))

    this.setState((prevState) => {
      return { article: Object.assign({}, { ...prevState.article }, { [parsedId]: value }) }
    })
  }

  componentDidMount() {

    const { slug } = this.props.match.params

    articleService.getDetails(slug)
      .then(data => {
        this.setState({ ...data, hasFetched: true })
      })
  }


  render() {
    if (!this.state.hasFetched) {
      return <div>Loading...</div>
    }

    const { title, description, body } = this.state.article

    return (
      <div className='container p-3 mb-2 bg-dark text-white'>
        <h3>Edit Article Form</h3>
        <div className='row justify-content-md-center'>
          <div className='col col-md-8'>
            <form onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='title-edi'>Title</label>
                <input
                  type='text'
                  className='form-control'
                  id='title-edi'
                  value={title}
                  onChange={this.handleChange} />
              </div>

              <div className='form-group'>
                <label htmlFor='description-edi'>Description</label>
                <textarea
                  className='form-control'
                  id='description-edi'
                  rows='3'
                  value={description}
                  onChange={this.handleChange} />
              </div>

              <div className='form-group'>
                <label htmlFor='body'>Content</label>
                <textarea
                  className='form-control'
                  id='body-edi'
                  rows='8'
                  value={body}
                  onChange={this.handleChange} />
              </div>

              <button className='btn btn-secondary' onClick={this.goBack}>back</button>
              <button type='submit' className='btn btn-success'>Edit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default EditArticle
