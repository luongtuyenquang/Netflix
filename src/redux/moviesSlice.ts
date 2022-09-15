import { createSlice } from '@reduxjs/toolkit'
import MovieCardTS from '../interface/movieCard'

let index = -1

const initialState: MovieCardTS[] = []

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovieFavourite: (state, action) => {
      index = state.findIndex((item) => item._id === action.payload._id)
      if (index === -1) {
        state.push(action.payload)
      } else {
        state.splice(index, 1)
      }
    },
    deleteMovieFavourite: (state, action) => {
      index = state.findIndex((item) => item._id === action.payload)
      state.splice(index, 1)
    },
  },
})

const { reducer, actions } = movieSlice
export const { addMovieFavourite, deleteMovieFavourite } = actions
export default reducer
