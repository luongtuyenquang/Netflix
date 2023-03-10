import type { NextPage } from 'next'
import Head from 'next/head'
import Banner, { SkeletonBanner } from '../components/Banner'
import TrendingNow from '../components/TrendingNow'
import TopRated from '../components/TopRated'
import { sortMoviesByYear } from '../utils'
import Movie from '../interface/movie'
import { useGetListMovies } from '../modules/api'
import { SkeletonMovieCard } from '../components/Card/MovieCard'

interface MovieProps {
  movies: Movie[]
}

const Home: NextPage<MovieProps> = () => {
  const { listMovies, isLoading } = useGetListMovies()

  const filterTypeTrendingNow = listMovies.filter((item) => {
    if (item.type === 'trending-now') {
      return item
    }
  })

  const filterTypeTopRated = listMovies.filter((item) => {
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

      {isLoading ? <SkeletonBanner /> : <Banner venomMovie={trendingNowMovies[1]} />}

      <main className='main'>
        <section className='movies'>
          <p className='movies__title'>Đang là xu hướng</p>

          <div className='movies-list'>
            {isLoading ? (
              Array.from({ length: 6 }, (_, index) => <SkeletonMovieCard key={index} />)
            ) : (
              <TrendingNow trendingNowMovies={trendingNowMovies} />
            )}
          </div>
        </section>
        <div className='line'></div>
        <section className='movies'>
          <p className='movies__title'>Tỉ lệ xem cao nhất</p>
          <div className='movies-list'>
            {isLoading ? (
              Array.from({ length: 6 }, (_, index) => <SkeletonMovieCard key={index} />)
            ) : (
              <TopRated topRatedMovies={topRatedMovies} />
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
