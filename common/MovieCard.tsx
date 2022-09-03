import Image from 'next/image'
import movie_image from '../public/assets/images/dead-zone.jpg'

function MovieCard() {
    return (
        <a href='#1' className='movie-card'>
            <Image src={movie_image} className='movie-card__image' alt='Image' />
            <div className='movie-card__info'>
                <p className='movie-card__name-vn'>Dưới Màn Lửa Dưới Màn Lửa Dưới Màn Lửa</p>
                <p className='movie-card__name-us'>Kimdom Dưới Màn Lửa Dưới Màn Lửa Dưới Màn Lửa</p>
            </div>
        </a>
    )
}

export default MovieCard
