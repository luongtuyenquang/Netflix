import Link from 'next/link'

function MovieCard({ image, name, originName, slug }) {
    return (
        <Link href={`/movie/${slug ? slug : ''}`}>
            <a className='movie-card'>
                <div className='movie-card__image'>
                    {image ? <img src={image} alt='Image' /> : null}
                </div>
                <div className='movie-card__info'>
                    <p className='movie-card__name-vn'>{name}</p>
                    <p className='movie-card__name-us'>{originName}</p>
                </div>
            </a>
        </Link>
    )
}

export default MovieCard
