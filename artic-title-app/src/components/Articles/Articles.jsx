import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import CreateArticle from './CreateArticle'
import Article from './Article'
import EditArticle from './EditArticle'
import { ArticlesFeed, AllArticles } from '../hocs/hocs'
import DeleteArticle from './DeleteArticle'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

export default class Articles extends Component {
  render () {
    const { match } = this.props
    const { path: currentPath } = match

    return (
      <div>
        <Switch>
          <Route path={`${currentPath}/feed`} exact component={ArticlesFeed} />
          <Route path={`${currentPath}/all`} exact component={AllArticles} />
          <PrivateRoute path={`${currentPath}/create`} exact component={CreateArticle} />
          <Route path={`${currentPath}/details/:slug`} component={Article} />
          <PrivateRoute path={`${currentPath}/edit/:slug`} component={EditArticle} />
          <PrivateRoute path={`${currentPath}/delete/:slug`} component={DeleteArticle} />
          <Route component={AllArticles} />} />
        </Switch>
      </div>
    )
  }
}
