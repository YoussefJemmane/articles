import { configureStore } from '@reduxjs/toolkit'
import articleSlice from '../slices/articleSlice'

export default configureStore({
  reducer: {
    article : articleSlice,
  }
})