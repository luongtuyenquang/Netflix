import { useRouter } from 'next/router'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import trendingNow from '../../store-data/trendingNow'
import topRated from '../../store-data/topRated'
import { ButtonLink, ButtonNoLink } from '../../common/Button'
import { addMovieFavourite } from '../../redux/moviesSlice'

function MovieSlug() {
    const router = useRouter()
    const movieSlug = router.query.movieSlug
    const dispatch = useDispatch()
    const allMovies = trendingNow.concat(topRated)
    const movies = useSelector((state) => state.movies)

    const handleAddMovieFavourite = (_id, thumb_url, name, origin_name, slug) => {
        dispatch(addMovieFavourite({ _id, thumb_url, name, origin_name, slug }))
    }

    const isFavourite = movies.some((movie) => movie.slug === movieSlug)

    return (
        <>
            {allMovies.map((item) => {
                if (movieSlug === item.movie.slug) {
                    return (
                        <section className='movie-detail' key={item.movie._id}>
                            <div className='movie-detail__group'>
                                <div className='movie-detail__image'>
                                    <div className='movie-detail__image-parent'>
                                        <Image src={item.movie.thumb_url} layout='fill' priority />
                                        <div className='movie-detail__image-group'>
                                            <ButtonNoLink
                                                className={`movie-detail__btn ${
                                                    isFavourite ? 'movie-detail__btn--disable' : ''
                                                }`}
                                                onClick={() =>
                                                    handleAddMovieFavourite(
                                                        item.movie._id,
                                                        item.movie.thumb_url,
                                                        item.movie.name,
                                                        item.movie.origin_name,
                                                        item.movie.slug
                                                    )
                                                }
                                            >
                                                <i
                                                    className={`${
                                                        isFavourite ? 'bx bx-x' : 'bx bx-heart'
                                                    }`}
                                                ></i>
                                                <span className='banner__btn-title'>
                                                    {isFavourite ? 'Hủy yêu thích' : 'Yêu thích'}
                                                </span>
                                            </ButtonNoLink>
                                            <ButtonLink
                                                href={item.episodes[0].server_data[0].link_embed}
                                                className='movie-detail__btn '
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                <i className='bx bx-play movie-detail__btn--size'></i>
                                                <span className='banner__btn-title'>Watch</span>
                                            </ButtonLink>
                                        </div>
                                    </div>
                                </div>
                                <div className='movie-detail__info'>
                                    <div className='movie-detail__info-group'>
                                        <p className='movie-detail__info-name'>{item.movie.name}</p>
                                        <p className='movie-detail__info-origin-name'>
                                            {item.movie.origin_name}
                                        </p>
                                    </div>
                                    <div className='movie-detail__info-movie'>
                                        <p className='movie-detail__info-general'>
                                            Trạng thái:{' '}
                                            <span>
                                                {item.movie.quality} + {item.movie.lang}
                                            </span>
                                        </p>
                                        <p className='movie-detail__info-general'>
                                            Đạo diễn: <span>{item.movie.director[0]}</span>
                                        </p>
                                        <p className='movie-detail__info-general'>
                                            Quốc gia: <span>{item.movie.country[0].name}</span>
                                        </p>
                                        <p className='movie-detail__info-general'>
                                            Năm sản xuất: <span>{item.movie.year}</span>
                                        </p>
                                        <p className='movie-detail__info-general'>
                                            Thể loại: <span>{item.movie.category.join(', ')}</span>
                                        </p>
                                        <p className='movie-detail__info-general'>
                                            Diễn viên: <span>{item.movie.actor.join(', ')}</span>
                                        </p>
                                        <p className='movie-detail__info-general'>
                                            Thời lượng: <span>{item.movie.time}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='movie-detail__description'>
                                <p className='movie-detail__description-title'>Nội dung phim:</p>
                                <p className='movie-detail__description-name'>
                                    {item.movie.name} - {item.movie.origin_name}
                                </p>
                                <p className='movie-detail__description-content'>
                                    {item.movie.content}
                                </p>
                            </div>
                        </section>
                    )
                }
            })}
        </>
    )
}

export default MovieSlug
