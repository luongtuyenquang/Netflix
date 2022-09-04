import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './moviesSlice'

const rootReducer = {
    movies: movieReducer,
}

const store = configureStore({
    reducer: rootReducer,
})

export default store
