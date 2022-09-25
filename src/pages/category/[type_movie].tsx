import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MovieCard from '../../common/MovieCard'
import headerScroll from '../../common/headerScroll'
import footerTypesMovie from '../../mock-data/footerTypesMovie'
import sortMoviesByYear from '../../common/sortMoviesByYear'
import { AllMoviesProps } from '../../interface/allTypesMovie'

const TypeMovie: React.FC<AllMoviesProps> = ({ moviesData, movieSeriesData }) => {
  const router = useRouter()
  const [typeMovie, setTypeMovie] = useState<string>('')
  const [nameTypeMovie, setNameTypeMovie] = useState<string>('')
  const allMoviesData = [...moviesData, ...movieSeriesData]
  const sortAllMovies = sortMoviesByYear(allMoviesData, 'descrease')

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement

    headerScroll({
      header: header,
      pathName: router.pathname,
      pathNameUrl: '/category/[type_movie]',
      color: 'black',
    })
  }, [router])

  useEffect(() => {
    footerTypesMovie.map((type) => {
      if (type.slug === router.query.type_movie) {
        setTypeMovie(type.category)
        setNameTypeMovie(type.name)
      }
    })
  }, [router])

  return (
    <section className='all-movies'>
      <p className='movies__title'>
        Thể loại: <span>{nameTypeMovie}</span>
      </p>
      <div className='movies-list'>
        {sortAllMovies.length === 0 ? (
          <p className='movies-favourite__empty'>Không có tìm thấy phim trong danh sách !</p>
        ) : (
          sortAllMovies.map((item) => {
            if (item.movie.category.join(', ').includes(typeMovie)) {
              return (
                <MovieCard
                  thumb_url={item.movie.thumb_url}
                  name={item.movie.name}
                  origin_name={item.movie.origin_name}
                  slug={item.movie.slug}
                  key={item.movie._id}
                />
              )
            }
          })
        )}
      </div>
    </section>
  )
}

export async function getServerSideProps() {
  const resMovies = await fetch('https://632d70830d7928c7d24b1319.mockapi.io/api/movies')
  const resMovieSeries = await fetch('https://632d70830d7928c7d24b1319.mockapi.io/api/movie-series')

  const dataMovies = await resMovies.json()
  const dataMovieSeries = await resMovieSeries.json()

  return { props: { moviesData: dataMovies, movieSeriesData: dataMovieSeries } }
}

export default TypeMovie
