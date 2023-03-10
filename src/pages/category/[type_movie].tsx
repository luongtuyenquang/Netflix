import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import MovieCard, { SkeletonMovieCard } from '../../components/Card/MovieCard'
import { changeColorHeader, sortMoviesByYear } from '../../utils'
import CATEGORIES_EXIST from '../../global/constants/categoriesExistData'
import { useGetListAllMovies } from '../../modules/api'

const TypeMovie: React.FC = () => {
  const router = useRouter()
  const [typeMovie, setTypeMovie] = useState('')
  const [nameTypeMovie, setNameTypeMovie] = useState('')

  const { listAllMovies, isLoading } = useGetListAllMovies()
  const sortListAllMovies = sortMoviesByYear(listAllMovies, 'descrease')

  useEffect(() => {
    const header = document.querySelector('.header') as HTMLElement
    changeColorHeader({
      header,
      pathName: router.pathname,
      pathNameUrl: '/category/[type_movie]',
    })
  }, [router])

  useEffect(() => {
    CATEGORIES_EXIST.map((type) => {
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
        {isLoading
          ? Array.from({ length: 12 }, (_, index) => <SkeletonMovieCard key={index} />)
          : sortListAllMovies.map((item) => {
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
            })}
      </div>
    </section>
  )
}

export default TypeMovie
