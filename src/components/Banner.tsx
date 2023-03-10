import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { ButtonLink } from './Button'
import Movie from '../interface/movie'

type BannerProps = { venomMovie: Movie }

export const SkeletonBanner: React.FC = () => {
  return (
    <div className='banner__image'>
      <SkeletonTheme baseColor='#202020' highlightColor='#444'>
        <Skeleton height='100%' style={{ top: '-1px' }} />
      </SkeletonTheme>
    </div>
  )
}

const Banner: React.FC<BannerProps> = ({ venomMovie }) => {
  return (
    <section className='banner'>
      <div className='banner__image'>
        <img crossOrigin='anonymous' src={venomMovie.movie.poster_url} alt='banner' />
      </div>

      <div className='banner__info'>
        <p className='banner__info-title'>{venomMovie.movie.name}</p>
        <p className='banner__info-content'>{venomMovie.movie.content}</p>
        <div className='banner__btn'>
          <ButtonLink
            href={`${venomMovie.episodes[0].server_data[0].link_embed}`}
            className='btn'
            target='_blank'
          >
            <i className='bx bx-play'></i>
            <span className='banner__btn-title'>Play</span>
          </ButtonLink>
          <ButtonLink href={`/movie/${venomMovie.movie.slug}`} className='btn'>
            <i className='bx bx-info-circle'></i>
            <span className='banner__btn-title'>More Info</span>
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default Banner
