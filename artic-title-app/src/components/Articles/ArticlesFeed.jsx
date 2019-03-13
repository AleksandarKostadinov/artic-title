import React, { Component } from 'react'
import { articleService } from '../../services/articleService';
import ArticlesList from './ArticlesList'

export default class ArticlesFeed extends Component {
  constructor (props) {
    super(props)

    this.state = {
      articles: [],
      articlesCount: 0,
      hasFeatched: false
    }
  }

  componentDidMount () {
    articleService.getFeed()
      .then(data => {
        this.setState({ ...data, hasFeatched: true })
      })
  }

  render () {
    if (!this.state.hasFeatched) {
      return <div>Loading...</div>
    }

    return (
      <div>
        Feed works!
        <ArticlesList articles={this.state.articles} />
      </div>
    )
  }
}
