import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleListItem.css'

export default ({ article }) => {
  const detailsUrl = `/articles/details/${article.slug}`
  return (
    <div className='col col-sm-3 border border-danger'>
      List Item works!

      <h1>{article.title}</h1>
      <p>{article.description}</p>
      <div>
        <span className='badge badge-success'>Posted 2012-08-02 20:47:04</span>
        <Link to={detailsUrl} className='link'>Details</Link>
        {/* <div className='pull-right'><span className='label'>alice</span> <span className='label'>story</span> <span className='label'>blog</span> <span className='label'>personal</span></div> */}
      </div>
      <hr />
    </div>
  )
}
