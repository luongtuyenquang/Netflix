import { ButtonLink } from '../common/Button'
import { ItemMovieProps } from '../interface/allTypesMovie'

const SeriesMovie: React.FC<ItemMovieProps> = ({ item }) => {
  return (
    <div className='movie-series__group'>
      <p className='movie-series__title'>Tập phim: </p>
      <div className='movie-series__list-series'>
        {item.episodes[0].server_data.map((item, index) => {
          return (
            <ButtonLink
              href={item.link_embed}
              className='movie-series__btn'
              target='_blank'
              rel='noopener noreferrer'
              key={index}
            >
              Tập {index + 1}
            </ButtonLink>
          )
        })}
      </div>
    </div>
  )
}

export default SeriesMovie
