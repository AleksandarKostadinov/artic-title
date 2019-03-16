import React from 'react'
import { Link } from 'react-router-dom'

export default ({ article }) => {
  console.log(article)

  return (
    <div className='row justify-content-center'>
      <div className='col col-md-8 col-of'>
        <div className='blog-post'>
          <h2 className='blog-post-title'>{article.title}</h2>
          <p className='blog-post-meta'>{article.createdAt} by <a href='#'>{article.author.username}</a></p>

          <p>{article.description}</p>
          <hr />
          <p>{article.body}</p>
          <hr />
          <p>
            <Link to={`/articles/edit/${article.slug}`}>Edit</Link>  <Link to={`/articles/delete/${article.slug}`}>Delete</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
