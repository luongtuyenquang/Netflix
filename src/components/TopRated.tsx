import MovieCard from '../common/MovieCard'
import { TopRatedProps } from '../interface/allTypesMovie'

const TopRated: React.FC<TopRatedProps> = ({ topRatedMovies }) => {
  return (
    <>
      {topRatedMovies.map((item) => {
        return (
          <MovieCard
            thumb_url={item.movie.thumb_url}
            name={item.movie.name}
            origin_name={item.movie.origin_name}
            slug={item.movie.slug}
            key={item.movie._id}
          />
        )
      })}
    </>
  )
}

export default TopRated
