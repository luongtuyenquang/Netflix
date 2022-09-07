import { useRouter } from 'next/router'
import { useEffect } from 'react'
import headerScroll from '../../common/HeaderScroll'
import MovieCard from '../../common/MovieCard'
import movieSeries from '../../store-data/movieSeries'

function MovieSeries() {
    const router = useRouter()

    useEffect(() => {
        const header = document.querySelector('.header')
        headerScroll(header, router.pathname, '/movie/series', 'black')
    }, [])

    return (
        <section className='movie-series'>
            <p className='movies__title'>Danh sách phim bộ hiện có</p>
            <div className='movie-series__list'>
                {movieSeries.map((item) => {
                    return (
                        <MovieCard
                            image={item.movie.thumb_url}
                            name={item.movie.name}
                            originName={item.movie.origin_name}
                            slug={item.movie.slug}
                            key={item.movie._id}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default MovieSeries
