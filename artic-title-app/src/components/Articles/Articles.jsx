import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import TopArticles from './TopArticles'
import ArticlesFeed from './ArticlesFeed'
import CreateArticle from './CreateArticle'

export default class Articles extends Component {
  render () {
    const { match } = this.props
    const { path: currentPath } = match

    return (
      <div>
        <Switch>
          <Route path={`${currentPath}/feed`} exact component={ArticlesFeed} />
          <Route path={`${currentPath}/top`} exact component={TopArticles} />
          <Route path={`${currentPath}/create`} exact component={CreateArticle} />
          <Route component={ArticlesFeed} />} />
        </Switch>
      </div>
    )
  }
}
