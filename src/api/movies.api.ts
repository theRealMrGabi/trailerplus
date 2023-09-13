import { _axios } from '@/api'
import {
	MoviesResponse,
	MovieDetails,
	MovieCredits,
	MovieVideosResponse
} from '@/interface'

export const moviesQueryKeys = Object.freeze({
	nowShowingMovies: 'nowShowingMovies',
	trendingMovies: 'trendingMovies',
	popularMovies: 'popularMovies',
	upcomingMovies: 'upcomingMovies',
	allTimeTopRatedMovies: 'allTimeTopRatedMovies',
	movieDetails: 'movieDetails',
	movieCredits: 'movieCredits',
	movieVideos: 'movieVideos'
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

export const MovieDetailApi = async (id: number) => {
	try {
		const response: MovieDetails = await _axios.get(
			`movie/${id}?language=en-US`
		)
		return response
	} catch (error) {
		throw error
	}
}

export const MovieCreditsApi = async (id: number) => {
	try {
		const response: MovieCredits = await _axios.get(`movie/${id}/credits`)
		return response
	} catch (error) {
		throw error
	}
}

export const MovieVideosApi = async ({
	id,
	type
}: {
	id: number
	type: 'movie' | 'tv'
}) => {
	try {
		const response: MovieVideosResponse = await _axios.get(
			`${type}/${id}/videos?language=en-US`
		)
		return response
	} catch (error) {
		throw error
	}
}
