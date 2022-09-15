import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import MovieCard from '../common/MovieCard'
import trendingNow from '../store-data/trendingNow'
import topRated from '../store-data/topRated'

const Home: NextPage = () => {
  const sortTrendingNow = trendingNow.sort((a, b) => b.movie.year - a.movie.year)
  const sortTopRated = topRated.sort((a, b) => b.movie.year - a.movie.year)

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
            {sortTrendingNow.map((item) => {
              return (
                <MovieCard
                  thumb_url={item.movie.thumb_url}
                  name={item.movie.name}
                  origin_name={item.movie.origin_name}
                  slug={item.movie.slug}
                  key={item.movie._id}
                />
              )
            })}
          </div>
        </section>
        <div className='line'></div>
        <section className='movies'>
          <p className='movies__title'>Tỉ lệ xem cao nhất</p>
          <div className='movies-list'>
            {sortTopRated.map((item) => {
              return (
                <MovieCard
                  thumb_url={item.movie.thumb_url}
                  name={item.movie.name}
                  origin_name={item.movie.origin_name}
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
