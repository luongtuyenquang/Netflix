import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import headerScroll from '../../common/HeaderScroll'
import MovieCard from '../../common/MovieCard'

function MoviesFavourite() {
    const router = useRouter()
    const movies = useSelector((state) => state.movies)

    useEffect(() => {
        const header = document.querySelector('.header')
        headerScroll(header, router.pathname, '/movie/favourite', 'black')
    }, [])

    return (
        <>
            <Head>
                <title>Netflix - Phim yêu thích</title>
            </Head>

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
        </>
    )
}

export default MoviesFavourite
