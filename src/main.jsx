import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import EditArticles from './components/EditArticles'
import FormArticles from './components/FormArticles'
import ListArticles from './components/ListArticles'
import ShowArticle from './components/ShowArticle'
import './index.css'
import store from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListArticles />} />
          <Route path='/add' element={<FormArticles />} />
          <Route path='/edit/:id' element={<EditArticles />} />
          <Route path='/show/:id' element={<ShowArticle />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
