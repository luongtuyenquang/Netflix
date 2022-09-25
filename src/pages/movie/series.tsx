import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import headerScroll from '../../common/headerScroll'
import MovieCard from '../../common/MovieCard'
import sortMoviesByYear from '../../common/sortMoviesByYear'
import { MovieSeriesProps } from '../../interface/allTypesMovie'

const MovieSeries: React.FC<MovieSeriesProps> = ({ movieSeriesData }) => {
  const router = useRouter()
  const movieSeries = sortMoviesByYear(movieSeriesData, 'descrease')

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement

    headerScroll({
      header: header,
      pathName: router.pathname,
      pathNameUrl: '/movie/series',
      color: 'black',
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
          {movieSeries.map((item) => {
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

export async function getServerSideProps() {
  const res = await fetch('https://632d70830d7928c7d24b1319.mockapi.io/api/movie-series')
  const data = await res.json()

  return { props: { movieSeriesData: data } }
}

export default MovieSeries
