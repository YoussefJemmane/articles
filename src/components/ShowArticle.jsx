import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const ShowArticle = () => {
  const params = useParams()
  const articles = useSelector(state => state.article.articles)
  const exisdtingArticle = articles.filter((article) => article.id === params.id)
  const { title, authour, image, date, content } = exisdtingArticle[0]
  return (
    <div>
      <div>
        <h1 className='text-3xl mb-5'>Show Article</h1>
        <div className="card bg-base-100 shadow-2xl" data-theme="dark">
          <Link to='/'><button className='btn btn-outline btn-info mb-5'>Back</button></Link>
          <h1 className='text-3xl mb-4'>{title} by {authour}</h1>
          <div className='flex justify-end'>
            <div className="badge badge-primary">{date}</div>
          </div>
          <div className='flex justify-center'>
            <img src={image} alt="" className='rounded-md my-5' />
          </div>
          <div className="flex justify-start text-xl first-of-type:text-teal-500">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default ShowArticle