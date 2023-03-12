import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/Card/MovieCard'
import { RootState } from '../../modules/redux/store'
import MovieCardTS from '../../interface/movieCard'
import { changeColorHeader } from '../../utils'

type MovieCardProps = MovieCardTS & { _id?: string }

const MoviesFavourite: React.FC = () => {
  const router = useRouter()
  const movies = useSelector<RootState, MovieCardProps[]>((state) => state.movies)

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement
    changeColorHeader({
      header,
      pathName: router.pathname,
      pathNameUrl: '/movie/favourite',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
