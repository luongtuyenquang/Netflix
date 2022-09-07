import trendingNow from './trendingNow'
import topRated from './topRated'
import movieSeries from './movieSeries'

const allMovies = [...trendingNow, ...topRated, ...movieSeries]

export default allMovies
