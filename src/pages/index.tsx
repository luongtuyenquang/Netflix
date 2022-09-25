import type { NextPage } from 'next'
import Head from 'next/head'
import Banner from '../components/Banner'
import TrendingNow from '../components/TrendingNow'
import TopRated from '../components/TopRated'
import sortMoviesByYear from '../common/sortMoviesByYear'
import MovieTS from '../interface/movie'

interface MovieProps {
  movies: MovieTS[]
}

const Home: NextPage<MovieProps> = ({ movies }) => {
  const filterTypeTrendingNow = movies.filter((item) => {
    if (item.type === 'trending-now') {
      return item
    }
  })
  const filterTypeTopRated = movies.filter((item) => {
    if (item.type === 'top-rated') {
      return item
    }
  })
  const trendingNowMovies = sortMoviesByYear(filterTypeTrendingNow, 'descrease')
  const topRatedMovies = sortMoviesByYear(filterTypeTopRated, 'descrease')

  return (
    <>
      <Head>
        <title>Netflix - Trang chủ</title>
      </Head>

      <Banner trendingNowMovies={trendingNowMovies} />
      <main className='main'>
        <section className='movies'>
          <p className='movies__title'>Đang là xu hướng</p>
          <div className='movies-list'>
            <TrendingNow trendingNowMovies={trendingNowMovies} />
          </div>
        </section>
        <div className='line'></div>
        <section className='movies'>
          <p className='movies__title'>Tỉ lệ xem cao nhất</p>
          <div className='movies-list'>
            <TopRated topRatedMovies={topRatedMovies} />
          </div>
        </section>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://632d70830d7928c7d24b1319.mockapi.io/api/movies')
  const data = await res.json()

  return { props: { movies: data } }
}

export default Home
