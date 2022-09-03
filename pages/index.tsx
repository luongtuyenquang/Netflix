import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import MoviesList from '../components/MoviesList'

const Home: NextPage = () => {
    return (
        <div className=''>
            <Head>
                <title>Netflix - Trang chủ</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className='container-fluid'>
                <div className='container'>
                    <Header />
                    <Banner />

                    <main className='main'>
                        <section className='movies'>
                            <p className='movies__title'>Trending Now</p>
                            <MoviesList />
                        </section>
                        <section className='movies'>
                            <p className='movies__title'>Top Rated</p>
                            <MoviesList />
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Home
