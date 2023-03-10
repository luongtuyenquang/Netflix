import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import MovieCard, { SkeletonMovieCard } from '../../components/Card/MovieCard'
import { useGetListMovieSeries } from '../../modules/api'
import { changeColorHeader, sortMoviesByYear } from '../../utils'

const MovieSeries: React.FC = () => {
  const router = useRouter()
  const { listMovieSeries, isLoading } = useGetListMovieSeries()
  const movieSeries = sortMoviesByYear(listMovieSeries, 'descrease')

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement
    changeColorHeader({
      header,
      pathName: router.pathname,
      pathNameUrl: '/movie/series',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Netflix - Phim bộ</title>
      </Head>
      <section className='all-movies'>
        <p className='movies__title'>Danh sách phim bộ hiện có</p>
        <div className='movies-list'>
          {isLoading
            ? Array.from({ length: 6 }, (_, index) => <SkeletonMovieCard key={index} />)
            : movieSeries.map((item) => {
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
        </div>
      </section>
    </>
  )
}

export default MovieSeries
