import Movie from '../../interface/movie'
import { useGetListMovies, useGetListMovieSeries } from '../api/'

export default function useGetListAllMovies() {
  const { listMovies } = useGetListMovies()
  const { listMovieSeries } = useGetListMovieSeries()

  let listAllMovies = [] as Movie[]
  let isLoading = false

  if (listMovies.length && listMovieSeries.length)
    listAllMovies = [...listMovies, ...listMovieSeries]

  if (!listAllMovies.length) isLoading = true

  return { listAllMovies, isLoading }
}
