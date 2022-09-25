import MovieTS from '../interface/movie'

type DataProps = MovieTS[]
type TypeProps = 'increase' | 'descrease'

const sortMoviesByYear = (data: DataProps, type: TypeProps) => {
  if (type === 'increase') {
    return data.sort((a, b) => a.movie.year - b.movie.year)
  }
  if (type === 'descrease') {
    return data.sort((a, b) => b.movie.year - a.movie.year)
  }
  return data
}
export default sortMoviesByYear
