import React from 'react'
import ArticleListItem from './ArticleListItem/ArticleListItem'

export default ({ articles }) => {
  return (
    <div className='container'>
      List works!
      <div className='row bg-secondary text-white'>
        {articles.map(a => <ArticleListItem article={a} key={a.slug} />)}
      </div>
    </div>
  )
}
