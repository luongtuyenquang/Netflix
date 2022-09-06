import allMovies from '../../store-data/allMovies'
import MovieCard from '../../common/MovieCard'

function MoviesFavourite() {
    return (
        <section className='movies-favourite'>
            <p className='movies__title'>Danh sách các bộ phim yêu thích</p>
            <div className='movies-favourite__list'>
                {allMovies.length === 0 ? (
                    <p className='movies-favourite__empty'>
                        Không có phim yêu thích trong danh sách !
                    </p>
                ) : (
                    allMovies.map((item) => {
                        return (
                            <MovieCard
                                image={item.movie.thumb_url}
                                name={item.movie.name}
                                originName={item.movie.origin_name}
                                key={item.movie._id}
                            />
                        )
                    })
                )}
            </div>
        </section>
    )
}

export default MoviesFavourite
