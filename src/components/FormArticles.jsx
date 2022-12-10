import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { actions } from '../slices/articleSlice'
const FormArticles = () => {
  const [title, setTitle] = useState('')
  const [authour, setAuthour] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [date, setDate] = useState('')
  const nav = useNavigate()
  const dispatch = useDispatch()
  const addArticle = () => {
    dispatch(actions.add({ id: uuidv4(), title, authour, content, image, date }))
    nav('/')
  }
  return (
    <div>
      <div className='text-3xl p-3'>
        <h1 className='text-black'>Add Article</h1>
      </div>
      <div className='flex justify-center m-5'>
        <div className="card w-96 bg-base-100 shadow-2xl" data-theme='dark'>
          <Link to='/'><button className='btn btn-outline btn-warning w-full mb-3'>Back</button></Link>
          <input type="text" placeholder="Title" className="mb-3 input input-bordered w-full max-w-xs" onChange={(e) => setTitle(e.target.value)} />
          <textarea className="textarea textarea-bordered mb-3" placeholder="Content" onChange={(e) => setContent(e.target.value)}></textarea>
          <input type="text" placeholder="Authour" className="mb-3 input input-bordered w-full max-w-xs" onChange={(e) => setAuthour(e.target.value)} />
          <input type="text" placeholder="Image" className="mb-3 input input-bordered w-full max-w-xs" onChange={(e) => setImage(e.target.value)} />
          <input type="Date" placeholder="Date" className="mb-3 input input-bordered w-full max-w-xs" onChange={(e) => setDate(e.target.value)} />
          <button className='btn btn-outline btn-info' onClick={addArticle}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default FormArticles
