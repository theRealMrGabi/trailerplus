import { useQuery } from '@tanstack/react-query'
import { moviesQueryKeys, MoviesApi, URL } from '@/api'

export const useMoviesApi = () => {
	const { data: nowShowingMovies, isLoading: nowShowingLoading } = useQuery({
		queryKey: [moviesQueryKeys.nowShowingMovies],
		queryFn: () => MoviesApi(URL.nowShowing),
		select: response => {
			const slice = response.results.slice(0, 14)
			return slice
		}
	})

	const { data: trendingMovies, isLoading: trendingMoviesLoading } = useQuery({
		queryKey: [moviesQueryKeys.trendingMovies],
		queryFn: () => MoviesApi(URL.trendingMovies),
		select: response => {
			const slice = response.results.slice(0, 10)
			return slice
		}
	})

	const { data: popularMovies, isLoading: popularMoviesLoading } = useQuery({
		queryKey: [moviesQueryKeys.popularMovies],
		queryFn: () => MoviesApi(URL.popularMovies),
		select: response => {
			const slice = response.results.slice(0, 10)
			return slice
		}
	})

	const { data: upcomingMovies, isLoading: upcomingMoviesLoading } = useQuery({
		queryKey: [moviesQueryKeys.upcomingMovies],
		queryFn: () => MoviesApi(URL.upcomingMovies),
		select: response => {
			const slice = response.results.slice(0, 10)
			return slice
		}
	})

	const {
		data: allTimeTopRatedMovies,
		isLoading: allTimeTopRatedMoviesLoading
	} = useQuery({
		queryKey: [moviesQueryKeys.allTimeTopRatedMovies],
		queryFn: () => MoviesApi(URL.allTimeTopRatedMovies),
		select: response => {
			const slice = response.results.slice(0, 10)
			return slice
		}
	})

	return {
		nowShowingMovies,
		nowShowingLoading,
		trendingMovies,
		trendingMoviesLoading,
		popularMovies,
		popularMoviesLoading,
		upcomingMovies,
		upcomingMoviesLoading,
		allTimeTopRatedMovies,
		allTimeTopRatedMoviesLoading
	}
}
