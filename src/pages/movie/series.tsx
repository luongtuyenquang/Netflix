import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import headerScroll from '../../common/HeaderScroll'
import MovieCard from '../../common/MovieCard'
import movieSeries from '../../store-data/movieSeries'

const MovieSeries: React.FC = () => {
  const router = useRouter()
  const sortMovieSeries = movieSeries.sort((a, b) => b.movie.year - a.movie.year)

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement

    headerScroll({
      header: header,
      pathName: router.pathname,
      pathNameUrl: '/movie/series',
      color: 'black',
    })
  }, [])

  return (
    <>
      <Head>
        <title>Netflix - Phim bộ</title>
      </Head>
      <section className='all-movies'>
        <p className='movies__title'>Danh sách phim bộ hiện có</p>
        <div className='movies-list'>
          {sortMovieSeries.map((item) => {
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
