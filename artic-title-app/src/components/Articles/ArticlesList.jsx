import React from 'react'
import ArticleListItem from './ArticleListItem/ArticleListItem'

export default ({ articles }) => {
  return (
    <div className='container'>
      <div className='row bg-secondary text-white'>
        {
          articles.map.length
            ? articles.map(a => <ArticleListItem article={a} key={a.slug} />)
            : <h5>Follow some one to get your articles feed!</h5>
        }
      </div>
    </div>
  )
}
