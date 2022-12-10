import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'article',
  initialState: {
    articles: []
  },
  reducers: {
    add: (state, action) => {
      state.articles.push(action.payload);
    },
    delete: (state, { payload: index }) => {
      state.articles.splice(index, 1);
    },
    edit: (state, action) => {
      const {id , title , content, authour, date , image} = action.payload;
      const exist = state.articles.find(article => article.id === id);
      if(exist){
        exist.title = title;
        exist.content = content;
        exist.authour = authour;
        exist.date = date;
        exist.image = image;
      }
    }
  }
})





export const actions = counterSlice.actions

export default counterSlice.reducer
