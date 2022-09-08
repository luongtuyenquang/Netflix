import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import MovieCard from '../common/MovieCard'
import trendingNow from '../store-data/trendingNow'
import topRated from '../store-data/topRated'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Netflix - Trang chủ</title>
            </Head>

            <Banner />
            <main className='main'>
                <section className='movies'>
                    <p className='movies__title'>Đang là xu hướng</p>
                    <div className='movies-list'>
                        {trendingNow.map((item) => {
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
                <section className='movies'>
                    <p className='movies__title'>Tỉ lệ xem cao nhất</p>
                    <div className='movies-list'>
                        {topRated.map((item) => {
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
            </main>
        </>
    )
}

export default Home
