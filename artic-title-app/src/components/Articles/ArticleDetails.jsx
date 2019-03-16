import React from 'react'
import { Link } from 'react-router-dom'
import NavWithLinks from '../NavWithLinks/NavWithLinks'

export default ({ article, ...otherProps }) => {
  return (
    <div className='row justify-content-center'>
      <div className='col col-md-8 col-of'>
        <div className='blog-post'>
          <h2 className='blog-post-title'>{article.title}</h2>
          <p className='blog-post-meta'>{article.createdAt} by <Link to='/profiles'>{article.author.username}</Link></p>

          <p>{article.description}</p>
          <hr />
          <p>{article.body}</p>
          <hr />
          <NavWithLinks slug={article.slug} author={article.author} {...otherProps} />
        </div>
      </div>
    </div>
  )
}
