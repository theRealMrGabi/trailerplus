import { _axios } from '@/api'
import { MoviesResponse } from '@/interface'

export const moviesQueryKeys = Object.freeze({
	nowShowingMovies: 'nowShowingMovies',
	trendingMovies: 'trendingMovies',
	popularMovies: 'popularMovies',
	upcomingMovies: 'upcomingMovies',
	allTimeTopRatedMovies: 'allTimeTopRatedMovies'
})

export const URL = {
	nowShowing: 'movie/now_playing?language=en-US&page=1',
	trendingMovies: 'trending/movie/week?language=en-US&page=1',
	popularMovies: 'movie/popular?language=en-US&page=1',
	upcomingMovies: 'movie/upcoming?language=en-US&page=1',
	allTimeTopRatedMovies: 'movie/top_rated?language=en-US&page=1'
}

export const MoviesApi = async (url: string) => {
	try {
		const response: MoviesResponse = await _axios.get(url)
		return response
	} catch (error) {
		throw error
	}
}
