import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import headerScroll from '../../common/headerScroll'
import MovieCardTS from '../../interface/movieCard'
import { RootState } from '../../redux/store'
import Toastify from '../../components/Toastify'
import { AllMoviesProps } from '../../interface/allTypesMovie'
import SeriesMovie from '../../components/SeriesMovie'
import MovieDetail from '../../components/MovieDetail'

const MovieSlug: React.FC<AllMoviesProps> = ({ moviesData, movieSeriesData }) => {
  const router = useRouter()
  const movies = useSelector<RootState, MovieCardTS[]>((state) => state.movies)
  const movieSlug = router.query.movieSlug

  const [isFavourite, setIsFavourite] = useState<boolean>(false)

  const allMoviesData = [...moviesData, ...movieSeriesData]
  const isMovieFavourite = movies.some((movie) => movie.slug === movieSlug)
  const isMovieSeries = movieSeriesData.some((item) => item.movie.slug === movieSlug)

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement

    headerScroll({
      header: header,
      pathName: router.pathname,
      pathNameUrl: router.pathname,
      color: 'black',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {isFavourite && isMovieFavourite ? (
        <Toastify
          isIndex={isMovieFavourite}
          icon={'bx bx-check'}
          message={'Đã thêm vào phim yêu thích !'}
        />
      ) : null}
      {allMoviesData.map((item) => {
        if (movieSlug === item.movie.slug) {
          return (
            <section className='movie-detail' key={item.movie._id}>
              <MovieDetail
                item={item}
                isMovieFavourite={isMovieFavourite}
                setIsFavourite={setIsFavourite}
              />
              {isMovieSeries ? <SeriesMovie item={item} /> : ''}
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

export async function getServerSideProps() {
  const resMovies = await fetch('https://632d70830d7928c7d24b1319.mockapi.io/api/movies')
  const resMovieSeries = await fetch('https://632d70830d7928c7d24b1319.mockapi.io/api/movie-series')

  const dataMovies = await resMovies.json()
  const dataMovieSeries = await resMovieSeries.json()

  return { props: { moviesData: dataMovies, movieSeriesData: dataMovieSeries } }
}

export default MovieSlug
