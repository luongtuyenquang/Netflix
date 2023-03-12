import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../interface/movieCard'
import { RootState } from '../../modules/redux/store'
import Toastify from '../../components/Toastify'
import SeriesMovie from '../../components/SeriesMovie'
import MovieDetail from '../../components/MovieDetail'
import { changeColorHeader } from '../../utils'
import { useGetListAllMovies } from '../../modules/api'
import Skeleton from 'react-loading-skeleton'
import SkeletonContainer from '../../containers/SkeletonContainer'

type MovieCardProps = MovieCard & { _id?: string }

const SkeletonMovieSlug: React.FC = () => {
  return (
    <div className='movie-detail__group'>
      <SkeletonContainer>
        <div className='movie-detail__skeleton'>
          <Skeleton width={300} height={400} />
          <div className='movie-detail__skeleton-info'>
            <Skeleton height={25} style={{ marginBottom: '3rem' }} />
            <Skeleton count={7} borderRadius={50} style={{ marginBottom: '2rem' }} />
          </div>
        </div>
      </SkeletonContainer>
    </div>
  )
}

const MovieSlug: React.FC = () => {
  const router = useRouter()
  const movies = useSelector<RootState, MovieCardProps[]>((state) => state.movies)
  const movieSlug = router.query.movieSlug

  const [isFavourite, setIsFavourite] = useState(false)
  const { listAllMovies, isLoading } = useGetListAllMovies()

  const isMovieFavourite = movies.some((movie) => movie.slug === movieSlug)
  const isMovieSeries = listAllMovies
    .filter((listMovieSeries) => listMovieSeries.type === 'series')
    .some((item) => item.movie.slug === movieSlug)

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement
    changeColorHeader({
      header,
      pathName: router.pathname,
      pathNameUrl: router.pathname,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>{isLoading && 'loading...'}</title>
      </Head>

      {isFavourite && isMovieFavourite && (
        <Toastify
          isIndex={isMovieFavourite}
          icon={'bx bx-check'}
          message={'Đã thêm vào phim yêu thích !'}
        />
      )}
      <section className='movie-detail'>
        {isLoading ? (
          <SkeletonMovieSlug />
        ) : (
          listAllMovies.map((item) => {
            if (movieSlug === item.movie.slug) {
              return (
                <div key={item.movie._id}>
                  <MovieDetail
                    item={item}
                    isMovieFavourite={isMovieFavourite}
                    setIsFavourite={setIsFavourite}
                  />
                  {isMovieSeries && <SeriesMovie item={item} />}
                  <div className='movie-detail__description'>
                    <p className='movie-detail__description-title'>Nội dung phim:</p>
                    <p className='movie-detail__description-name'>
                      {item.movie.name} - {item.movie.origin_name}
                    </p>
                    <p className='movie-detail__description-content'>{item.movie.content}</p>
                  </div>
                </div>
              )
            }
          })
        )}
      </section>
    </>
  )
}

export default MovieSlug
