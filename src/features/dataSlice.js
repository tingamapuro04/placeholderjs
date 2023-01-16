import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";
export const getData = createAsyncThunk(
  'photo',
  async () => {
    return fetch(url)
      .then(data => data.json())
      .catch(err => console.log(err))
  }
)

const initialState = {
  isLoading: false,
  photos: []
};


const dataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: {
    [getData.fulfilled]: (state, action) => {
      state.isLoading = false
      state.photos = action.payload},
    [getData.pending]: (state, action) => {
      state.isLoading = true
    },

    [getData.rejected]: (state, action) => {
      state.isLoading = false
    }
  }
})


const photos = dataSlice.reducer;

export default photos;
