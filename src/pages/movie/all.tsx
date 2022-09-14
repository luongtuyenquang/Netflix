import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import headerScroll from '../../common/HeaderScroll'
import MovieCard from '../../common/MovieCard'
import allMovies from '../../store-data/allMovies'
import SearchMovie from '../../components/SearchMovie'

const AllMovies: React.FC = () => {
  const router = useRouter()
  const [sortAllMovies, setSortAllMovies] = useState(
    allMovies.sort((a, b) => b.movie.year - a.movie.year)
  )

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement

    headerScroll({
      header: header,
      pathName: router.pathname,
      pathNameUrl: '/movie/all',
      color: 'black',
    })
  }, [])

  return (
    <>
      <Head>
        <title>Netflix - Tất cả phim</title>
      </Head>

      <section className='all-movies'>
        <SearchMovie setSortAllMovies={setSortAllMovies} />
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
                  image={item.movie.thumb_url}
                  name={item.movie.name}
                  originName={item.movie.origin_name}
                  slug={item.movie.slug}
                  key={item.movie._id}
                />
              )
            })
          )}
        </div>
      </section>
    </>
  )
}

export default AllMovies
