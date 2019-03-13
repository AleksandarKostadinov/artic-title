import React from 'react'

export default ({ article }) => {
  return (
    <div className='constainer'>
      <div className='row'>
        <div className='col'>
          <h1>{article.title}</h1>
          <p>By: {article.author.username}</p>
        </div>
      </div>
    </div>
  )
}
