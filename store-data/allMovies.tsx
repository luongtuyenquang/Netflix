import trendingNow from './trendingNow'
import topRated from './topRated'
import movieSeries from './movieSeries'
import MovieTS from '../interface/movie'

const allMovies: MovieTS[] = [...trendingNow, ...topRated, ...movieSeries]

export default allMovies
