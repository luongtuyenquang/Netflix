import Link from 'next/link'
import { MouseEvent } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { ButtonNoLink } from './Button'
import { deleteMovieFavourite } from '../redux/moviesSlice'
import MovieCardTS from '../interface/movieCard'

const MovieCard: React.FC<MovieCardTS> = ({ _id, thumb_url, name, origin_name, slug }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const handleDeleteMovieFavourite = (e: MouseEvent, _id: string) => {
    e.preventDefault()
    dispatch(deleteMovieFavourite(_id))
  }

  return (
    <Link href={`/movie/${slug ? slug : ''}`}>
      <a className='movie-card'>
        <div className='movie-card__image'>
          {thumb_url ? <img src={thumb_url} alt='Image' /> : null}
        </div>
        <div className='movie-card__info'>
          <p className='movie-card__name-vn'>{name}</p>
          <p className='movie-card__name-us'>{origin_name}</p>
        </div>
        {router.pathname === '/movie/favourite' ? (
          <ButtonNoLink
            className='movies-favourite__close'
            onClick={(e: MouseEvent<HTMLDivElement>) => _id && handleDeleteMovieFavourite(e, _id)}
          >
            <i className='bx bx-x'></i>
          </ButtonNoLink>
        ) : (
          ''
        )}
      </a>
    </Link>
  )
}

export default MovieCard
