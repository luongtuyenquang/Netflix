import Image from 'next/image'

function MovieCard({ image, name, originName }) {
    return (
        <a href='#1' className='movie-card'>
            {image ? (
                <Image
                    src={image}
                    width='178'
                    height='267'
                    className='movie-card__image'
                    alt='Image'
                />
            ) : null}
            <div className='movie-card__info'>
                <p className='movie-card__name-vn'>{name}</p>
                <p className='movie-card__name-us'>{originName}</p>
            </div>
        </a>
    )
}

export default MovieCard
