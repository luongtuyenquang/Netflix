import Link from 'next/link'
import { MouseEvent } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { ButtonNoLink } from '../Button'
import { deleteMovieFavourite } from '../../modules/redux/moviesSlice'
import MovieCard from '../../interface/movieCard'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

type MovieCardProps = MovieCard & { _id?: string }

export const SkeletonMovieCard: React.FC = () => {
  return (
    <div className='movie-card'>
      <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <Skeleton height={260} style={{ marginBottom: '10px' }} />
        <Skeleton width='50%' borderRadius={50} style={{ marginBottom: '10px' }} />
        <Skeleton width='80%' borderRadius={50} style={{ marginBottom: '10px' }} />
      </SkeletonTheme>
    </div>
  )
}

const MovieCard: React.FC<MovieCardProps> = ({ _id, thumb_url, name, origin_name, slug }) => {
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
          <img crossOrigin='anonymous' src={thumb_url} alt='Image' />
        </div>
        <div className='movie-card__info'>
          <p className='movie-card__name-vn'>{name}</p>
          <p className='movie-card__name-us'>{origin_name}</p>
        </div>
        {router.pathname === '/movie/favourite' ? (
          <ButtonNoLink
            className='movies-favourite__close'
            onClick={(e) => _id && handleDeleteMovieFavourite(e, _id)}
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
