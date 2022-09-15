import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import headerScroll from '../../common/HeaderScroll'
import MovieCard from '../../common/MovieCard'
import { RootState } from '../../redux/store'
import MovieCardTS from '../../interface/movieCard'

const MoviesFavourite: React.FC = () => {
  const router = useRouter()
  const movies = useSelector<RootState, MovieCardTS[]>((state) => state.movies)

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement

    headerScroll({
      header: header,
      pathName: router.pathname,
      pathNameUrl: '/movie/favourite',
      color: 'black',
    })
  }, [])

  return (
    <>
      <Head>
        <title>Netflix - Phim yêu thích</title>
      </Head>

      <section className='all-movies'>
        <p className='movies__title'>Danh sách các bộ phim yêu thích</p>
        <div className='movies-list'>
          {movies.length === 0 ? (
            <p className='movies-favourite__empty'>Không có phim yêu thích trong danh sách !</p>
          ) : (
            movies.map((movie) => {
              return (
                <MovieCard
                  _id={movie._id}
                  thumb_url={movie.thumb_url}
                  name={movie.name}
                  origin_name={movie.origin_name}
                  slug={movie.slug}
                  key={movie._id}
                />
              )
            })
          )}
        </div>
      </section>
    </>
  )
}

export default MoviesFavourite
