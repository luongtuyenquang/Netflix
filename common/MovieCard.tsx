import Link from 'next/link'
import { useRouter } from 'next/router'


function MovieCard({ image, name, originName, slug }) {
    const router = useRouter()

    return (
        <Link href={`/movie/${slug ? slug : ''}`} className='movie-card'>
            <div className='movie-card__image'>
                {image ? <img src={image} alt='Image' /> : null}
            </div>
            <div className='movie-card__info'>
                <p className='movie-card__name-vn'>{name}</p>
                <p className='movie-card__name-us'>{originName}</p>
            </div>
            {router.pathname === '/movie/favourite' ? (
                <div className='movies-favourite__close'>
                    <i className='bx bx-x'></i>
                </div>
            ) : (
                ''
            )}
        </Link>
    )
}

export default MovieCard
