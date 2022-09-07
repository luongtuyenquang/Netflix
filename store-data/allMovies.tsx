import trendingNow from './trendingNow'
import topRated from './topRated'

export const allMovies = [...trendingNow, ...topRated]

export const shuffleAllMovies = allMovies.sort((a, b) => b.movie.year - a.movie.year)
