import MovieCard from '../../common/MovieCard'
import { useSelector } from 'react-redux'

function MoviesFavourite() {
    const movies = useSelector((state) => state.movies)

    return (
        <section className='movies-favourite'>
            <p className='movies__title'>Danh sách các bộ phim yêu thích</p>
            <div className='movies-favourite__list'>
                {movies.length === 0 ? (
                    <p className='movies-favourite__empty'>
                        Không có phim yêu thích trong danh sách !
                    </p>
                ) : (
                    movies.map((movie) => {
                        return (
                            <MovieCard
                                id={movie._id}
                                image={movie.thumb_url}
                                name={movie.name}
                                originName={movie.origin_name}
                                slug={movie.slug}
                                key={movie._id}
                            />
                        )
                    })
                )}
            </div>
        </section>
    )
}

export default MoviesFavourite
