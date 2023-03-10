import axios from 'axios'
import useSWRImmutable from 'swr/immutable'
import Movie from '../../interface/movie'

const SWR_KEY = 'https://632d70830d7928c7d24b1319.mockapi.io/api/movie-series'

const fetcher = () => axios.get(SWR_KEY).then((res) => res.data)

export default function useGetListMovieSeries() {
  const { data, isLoading, ...other } = useSWRImmutable<Movie[]>(SWR_KEY, fetcher)

  const listMovieSeries = data ? data : []

  return { listMovieSeries, isLoading, ...other }
}
