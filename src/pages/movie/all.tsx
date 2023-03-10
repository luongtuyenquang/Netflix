import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MovieCard, { SkeletonMovieCard } from '../../components/Card/MovieCard'
import SearchMovie from '../../components/SearchMovie'
import BackToTop from '../../components/BackToTop'
import { useGetListAllMovies } from '../../modules/api'
import { changeColorHeader, sortMoviesByYear } from '../../utils'

const AllMovies: React.FC = () => {
  const router = useRouter()
  const { listAllMovies, isLoading } = useGetListAllMovies()

  const sortListAllMovies = sortMoviesByYear(listAllMovies, 'descrease')

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement
    changeColorHeader({
      header,
      pathName: router.pathname,
      pathNameUrl: '/movie/all',
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Netflix - Tất cả phim</title>
      </Head>

      <section className='all-movies'>
        {/* <SearchMovie setSortAllMovies={setSortAllMovies} allMoviesData={sortListAllMovies} /> */}
        <p className='movies__title search-movie--pt-4'>
          Hiện đang có tất cả <span>{sortListAllMovies.length}</span> bộ phim
        </p>
        <div className='movies-list'>
          {isLoading
            ? Array.from({ length: 12 }, (_, index) => <SkeletonMovieCard key={index} />)
            : sortListAllMovies.map((item) => {
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
          {!sortListAllMovies.length && !isLoading && (
            <p className='movies-favourite__empty'>Không có tìm thấy phim trong danh sách !</p>
          )}
        </div>
        <BackToTop />
      </section>
    </>
  )
}

export default AllMovies
