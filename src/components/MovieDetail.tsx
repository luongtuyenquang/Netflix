import { Dispatch, SetStateAction } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonLink, ButtonNoLink } from './Button'
import { addMovieFavourite } from '../modules/redux/moviesSlice'
import Movie from '../interface/movie'
import MovieCard from '../interface/movieCard'

type MovieCardProps = MovieCard & { _id: string }

interface MovieInfoProps {
  title: string
  data: string | number
}

interface MovieDetailProps {
  item: Movie
  isMovieFavourite: boolean
  setIsFavourite: Dispatch<SetStateAction<boolean>>
}

const MovieInfo: React.FC<MovieInfoProps> = ({ title, data }) => {
  return (
    <p className='movie-detail__info-general'>
      {title}: <span>{data}</span>
    </p>
  )
}

const MovieDetail: React.FC<MovieDetailProps> = ({ item, isMovieFavourite, setIsFavourite }) => {
  const dispatch = useDispatch()

  const handleAddMovieFavourite = ({ _id, thumb_url, name, origin_name, slug }: MovieCardProps) => {
    dispatch(addMovieFavourite({ _id, thumb_url, name, origin_name, slug }))
    if (isMovieFavourite) {
      setIsFavourite(false)
    } else {
      setIsFavourite(true)
    }
  }
  return (
    <div className='movie-detail__group'>
      <div className='movie-detail__image'>
        <div className='movie-detail__image-parent'>
          <img crossOrigin='anonymous' src={item.movie.thumb_url} alt='Hinh anh' />
          <div className='movie-detail__image-group'>
            <ButtonNoLink
              className={`movie-detail__btn ${
                isMovieFavourite ? 'movie-detail__btn--disable' : ''
              }`}
              onClick={() =>
                handleAddMovieFavourite({
                  _id: item.movie._id,
                  thumb_url: item.movie.thumb_url,
                  name: item.movie.name,
                  origin_name: item.movie.origin_name,
                  slug: item.movie.slug,
                })
              }
            >
              <i className={`${isMovieFavourite ? 'bx bx-x' : 'bx bx-heart'}`}></i>
              <span className='banner__btn-title'>
                {isMovieFavourite ? 'Hủy yêu thích' : 'Yêu thích'}
              </span>
            </ButtonNoLink>
            <ButtonLink
              href={item.episodes[0].server_data[0].link_embed}
              className='movie-detail__btn '
              target='_blank'
            >
              <i className='bx bx-play movie-detail__btn--size'></i>
              <span className='banner__btn-title'>Watch</span>
            </ButtonLink>
          </div>
        </div>
      </div>
      <div className='movie-detail__info'>
        <div className='movie-detail__info-group'>
          <p className='movie-detail__info-name'>{item.movie.name}</p>
          <p className='movie-detail__info-origin-name'>{item.movie.origin_name}</p>
        </div>
        <div className='movie-detail__info-movie'>
          <MovieInfo title='Trạng thái' data={`${item.movie.quality} + ${item.movie.lang}`} />
          <MovieInfo title='Đạo diễn' data={item.movie.director[0]} />
          <MovieInfo title='Quốc gia' data={item.movie.country[0].name} />
          <MovieInfo title='Năm sản xuất' data={item.movie.year} />
          <MovieInfo title='Thể loại' data={item.movie.category.join(', ')} />
          <MovieInfo title='Diễn viên' data={item.movie.actor.join(', ')} />
          <MovieInfo title='Thời lượng' data={item.movie.time} />
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
