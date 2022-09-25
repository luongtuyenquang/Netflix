import { useDispatch } from 'react-redux'
import { ButtonLink, ButtonNoLink } from '../common/Button'
import { MovieDetailProps } from '../interface/allTypesMovie'
import MovieFavouriteTS from '../interface/movieFavourite'
import { addMovieFavourite } from '../redux/moviesSlice'

const MovieDetail: React.FC<MovieDetailProps> = ({ item, isMovieFavourite, setIsFavourite }) => {
  const dispatch = useDispatch()

  const handleAddMovieFavourite = ({
    _id,
    thumb_url,
    name,
    origin_name,
    slug,
  }: MovieFavouriteTS) => {
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
          <img src={item.movie.thumb_url} alt='Hinh anh' />
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
              rel='noopener noreferrer'
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
          <p className='movie-detail__info-general'>
            Trạng thái:{' '}
            <span>
              {item.movie.quality} + {item.movie.lang}
            </span>
          </p>
          <p className='movie-detail__info-general'>
            Đạo diễn: <span>{item.movie.director[0]}</span>
          </p>
          <p className='movie-detail__info-general'>
            Quốc gia: <span>{item.movie.country[0].name}</span>
          </p>
          <p className='movie-detail__info-general'>
            Năm sản xuất: <span>{item.movie.year}</span>
          </p>
          <p className='movie-detail__info-general'>
            Thể loại: <span>{item.movie.category.join(', ')}</span>
          </p>
          <p className='movie-detail__info-general'>
            Diễn viên: <span>{item.movie.actor.join(', ')}</span>
          </p>
          <p className='movie-detail__info-general'>
            Thời lượng: <span>{item.movie.time}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
