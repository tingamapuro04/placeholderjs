import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getPhoto = (id) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  createAsyncThunk(
    'Photo',
    async () => {
      return fetch(url)
        .then(data => data.json())
        .catch(err => console.log(err))
    }
  )
}

const initialState = {
  isLoading: true,
  photo: {},
  error: ''
}

const photoSlice = createSlice({
  name: 'Mimi',
  initialState,
  extraReducers: {
    [getPhoto.fulfilled]: (state, action) => {
      state.isLoading = false
      state.photo = action.payload
    },
    [getPhoto.pending]: (state, action) => {
      state.isLoading = true
    },
    [getPhoto.rejected]: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

export  {getPhoto}
const photo = getPhoto.reducer;
export default photo
