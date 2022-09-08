import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import headerScroll from '../common/HeaderScroll'
import MovieCard from '../common/MovieCard'
import allMovies from '../store-data/allMovies'

function AllMovies() {
    const router = useRouter()
    const shuffleAllMovies = allMovies.sort((a, b) => b.movie.year - a.movie.year)

    useEffect(() => {
        const header = document.querySelector('.header')
        headerScroll(header, router.pathname, '/all', 'black')
    }, [])

    return (
        <>
            <Head>
                <title>Netflix - Tất cả phim</title>
            </Head>

            <section className='all-movies'>
                <p className='movies__title'>Danh sách tất cả phim hiện có</p>
                <div className='all-movies__list'>
                    {shuffleAllMovies.map((item) => {
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
        </>
    )
}

export default AllMovies
