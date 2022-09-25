import MovieCard from '../common/MovieCard'
import { TrendingNowProps } from '../interface/allTypesMovie'

const TrendingNow: React.FC<TrendingNowProps> = ({ trendingNowMovies }) => {
  return (
    <>
      {trendingNowMovies.map((item) => {
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

export default TrendingNow
