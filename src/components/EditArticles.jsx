import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { actions } from '../slices/articleSlice'
const EditArticles = () => {

  const params = useParams()
  const articles = useSelector((state) => state.article.articles)
  const nav = useNavigate()
  const dispatch = useDispatch()
  const exisdtingArticle = articles.filter((article) => article.id === params.id)
  const { title, authour, image, date, content } = exisdtingArticle[0]

  const [values, setValues] = useState({
    title: title,
    content: content,
    authour: authour,
    image: image,
    date: date,
  })

  const editArticle = () => {
    dispatch(actions.edit({ id: params.id, title: values.title, authour: values.authour, image: values.image, date: values.date }))
    nav('/')
  }
  return (
    <div>
      <div className='text-3xl p-3'>
        <h1 className='text-black'>Edit Article</h1>
      </div>
      <div className='flex justify-center m-5'>
        <div className="card w-96 bg-base-100 shadow-2xl" data-theme='dark'>
        <Link to='/'><button className='btn btn-outline btn-warning w-full mb-3'>Back</button></Link>
          <input type="text" placeholder="Title" className="mb-3 input input-bordered w-full max-w-xs" value={values.title} onChange={(e) => setValues({ ...values, title: e.target.value })} />
          <textarea className="textarea textarea-bordered mb-3" placeholder="Content" value={values.content} onChange={(e) => setValues({ ...values, content: e.target.value })}></textarea>
          <input type="text" placeholder="Authour" className="mb-3 input input-bordered w-full max-w-xs" value={values.authour} onChange={(e) => setValues({ ...values, authour: e.target.value })} />
          <input type="text" placeholder="Image" className="mb-3 input input-bordered w-full max-w-xs" value={values.image} onChange={(e) => setValues({ ...values, image: e.target.value })} />
          <input type="Date" placeholder="Date" className="mb-3 input input-bordered w-full max-w-xs" value={values.date} onChange={(e) => setValues({ ...values, date: e.target.value })} />
          <button className='btn btn-outline btn-info' onClick={editArticle}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default EditArticles
