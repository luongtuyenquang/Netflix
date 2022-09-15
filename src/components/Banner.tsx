import trendingNow from '../store-data/trendingNow'
import { ButtonLink } from '../common/Button'

const Banner: React.FC = () => {
  const venomMovie = trendingNow[1]

  return (
    <section className='banner'>
      <div className='banner__image'>
        <img src={venomMovie.movie.poster_url} alt='banner' />
      </div>

      <div className='banner__info'>
        <p className='banner__info-title'>{venomMovie.movie.name}</p>
        <p className='banner__info-content'>{venomMovie.movie.content}</p>
        <div className='banner__btn'>
          <ButtonLink
            href={`${venomMovie.episodes[0].server_data[0].link_embed}`}
            className='btn'
            target='_blank'
            rel='noopener noreferrer'
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