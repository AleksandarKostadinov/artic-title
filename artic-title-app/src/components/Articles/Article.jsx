import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ArticleDetails from './ArticleDetails'
import { articleService } from '../../services/articleService'

export default class Article extends Component {
  constructor (props) {
    super(props)

    this.state = {
      article: {},
      hasFetched: false
    }

    this.slug = this.props.match.params.slug
  }

  componentDidMount () {
    articleService.getDetails(this.slug)
      .then(data => {
        this.setState({ ...data, hasFetched: true })
      })
  }

  render () {
    const { match } = this.props
    const { path: currentPath } = match

    if (!this.state.hasFetched) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Switch>
          <Route path={currentPath} render={(props) => <ArticleDetails {...props} article={this.state.article} />} />
        </Switch>
      </div>
    )
  }
}
