import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ButtonLink, ButtonNoLink } from '../../common/Button'
import { addMovieFavourite } from '../../redux/moviesSlice'
import headerScroll from '../../common/HeaderScroll'
import allMovies from '../../store-data/allMovies'
import movieSeries from '../../store-data/movieSeries'
import MovieFavouriteTS from '../../interface/movieFavourite'
import MovieCardTS from '../../interface/movieCard'
import { RootState } from '../../redux/store'
import Toastify from '../../components/Toastify'

const MovieSlug: React.FC = () => {
  const router = useRouter()
  const movieSlug = router.query.movieSlug
  const dispatch = useDispatch()
  const movies = useSelector<RootState, MovieCardTS[]>((state) => state.movies)
  const indexMovieFavourite = movies.some((movie) => movie.slug === movieSlug)
  const isMovieSeries = movieSeries.some((item) => item.movie.slug === movieSlug)

  const handleAddMovieFavourite = ({
    _id,
    thumb_url,
    name,
    origin_name,
    slug,
  }: MovieFavouriteTS) => {
    dispatch(addMovieFavourite({ _id, thumb_url, name, origin_name, slug }))
  }

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement

    headerScroll({
      header: header,
      pathName: router.pathname,
      pathNameUrl: router.pathname,
      color: 'black',
    })
  }, [])

  return (
    <>
      {indexMovieFavourite ? (
        <Toastify
          isIndex={indexMovieFavourite}
          icon={'bx bx-check'}
          message={'Đã thêm vào phim yêu thích !'}
        />
      ) : null}
      {allMovies.map((item) => {
        if (movieSlug === item.movie.slug) {
          return (
            <section className='movie-detail' key={item.movie._id}>
              <div className='movie-detail__group'>
                <div className='movie-detail__image'>
                  <div className='movie-detail__image-parent'>
                    <Image src={item.movie.thumb_url} layout='fill' priority />
                    <div className='movie-detail__image-group'>
                      <ButtonNoLink
                        className={`movie-detail__btn ${
                          indexMovieFavourite ? 'movie-detail__btn--disable' : ''
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
                        <i className={`${indexMovieFavourite ? 'bx bx-x' : 'bx bx-heart'}`}></i>
                        <span className='banner__btn-title'>
                          {indexMovieFavourite ? 'Hủy yêu thích' : 'Yêu thích'}
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
              {isMovieSeries ? (
                <div className='movie-series__group'>
                  <p className='movie-series__title'>Tập phim: </p>
                  <div className='movie-series__list-series'>
                    {item.episodes[0].server_data.map((item, index) => {
                      return (
                        <ButtonLink
                          href={item.link_embed}
                          className='movie-series__btn'
                          target='_blank'
                          rel='noopener noreferrer'
                          key={index}
                        >
                          Tập {index + 1}
                        </ButtonLink>
                      )
                    })}
                  </div>
                </div>
              ) : (
                ''
              )}
              <div className='movie-detail__description'>
                <p className='movie-detail__description-title'>Nội dung phim:</p>
                <p className='movie-detail__description-name'>
                  {item.movie.name} - {item.movie.origin_name}
                </p>
                <p className='movie-detail__description-content'>{item.movie.content}</p>
              </div>
            </section>
          )
        }
      })}
    </>
  )
}

export default MovieSlug
