import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { actions } from '../slices/articleSlice'
const ListArticles = () => {
  const article = useSelector(state => state.article.articles)
  const dispatch = useDispatch()
  const destroy = () => {
    dispatch(actions.delete({ article }))
  }

  return (
    <div>
      <div className='flex justify-end'>
        <a href="./revision.zip"><button className='btn btn-outline btn-primary'>Download</button></a>
      </div>
      <div className='text-3xl p-3'>
        <h1 className='text-black'>List of Articles</h1>
      </div>
      <Link to='/add'><button className='btn btn-outline btn-success'>Add</button></Link>
      <div className='flex justify-center'>

        <div className='grid lg:grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2'>
          {article.map((article) =>
            <div className="flex items-center p-4  rounded-lg shadow-sm  mt-5" data-theme='light' key={article.id}>
              <div className="card w-96 bg-base-100 shadow-2xl m-5" data-theme='halloween' >
                <figure><img src={article.image} className='rounded-md' alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">{article.title} by {article.authour}<Link to={`/show/${article.id}`} className='text-cyan-700'>Read More...</Link></h2>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{article.date}</div>
                  </div>
                  <div className="flex justify-between mt-5">
                    <button className='btn btn-outline btn-error' onClick={destroy}>Delete</button>
                    <Link to={`/edit/${article.id}`}><button className='btn btn-outline btn-info'>Edit</button></Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default ListArticles