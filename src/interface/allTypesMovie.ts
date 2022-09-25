import { Dispatch, SetStateAction } from 'react'
import MovieTS from './movie'

export interface AllMoviesProps {
  moviesData: MovieTS[]
  movieSeriesData: MovieTS[]
}

export interface TrendingNowProps {
  trendingNowMovies: MovieTS[]
}

export interface TopRatedProps {
  topRatedMovies: MovieTS[]
}

export interface MovieSeriesProps {
  movieSeriesData: MovieTS[]
}

export interface ItemMovieProps {
  item: MovieTS
}

export interface MovieDetailProps {
  item: MovieTS
  isMovieFavourite: boolean
  setIsFavourite: Dispatch<SetStateAction<boolean>>
}
