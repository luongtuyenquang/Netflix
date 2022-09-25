import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import headerScroll from '../../common/headerScroll'
import MovieCard from '../../common/MovieCard'
import SearchMovie from '../../components/SearchMovie'
import BackToTop from '../../components/BackToTop'
import sortMoviesByYear from '../../common/sortMoviesByYear'
import { AllMoviesProps } from '../../interface/allTypesMovie'

const AllMovies: React.FC<AllMoviesProps> = ({ moviesData, movieSeriesData }) => {
  const router = useRouter()
  const allMoviesData = [...moviesData, ...movieSeriesData]

  const [sortAllMovies, setSortAllMovies] = useState(sortMoviesByYear(allMoviesData, 'descrease'))

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement

    headerScroll({
      header: header,
      pathName: router.pathname,
      pathNameUrl: '/movie/all',
      color: 'black',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Netflix - Tất cả phim</title>
      </Head>

      <section className='all-movies'>
        <SearchMovie setSortAllMovies={setSortAllMovies} allMoviesData={allMoviesData} />
        <p className='movies__title search-movie--pt-4'>
          Hiện đang có tất cả <span>{sortAllMovies.length}</span> bộ phim
        </p>
        <div className='movies-list'>
          {sortAllMovies.length === 0 ? (
            <p className='movies-favourite__empty'>Không có tìm thấy phim trong danh sách !</p>
          ) : (
            sortAllMovies.map((item) => {
              return (
                <MovieCard
                  thumb_url={item.movie.thumb_url}
                  name={item.movie.name}
                  origin_name={item.movie.origin_name}
                  slug={item.movie.slug}
                  key={item.movie._id}
                />
              )
            })
          )}
        </div>
        <BackToTop />
      </section>
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

export default AllMovies
