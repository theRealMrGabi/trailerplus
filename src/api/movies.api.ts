import { _axios } from '@/api'
import { NowShowingMovies } from '@/interface'

export const moviesQueryKeys = Object.freeze({
	nowShowingMovies: 'nowShowingMovies'
})

export const NowShowingMoviesApi = async ({ page = 1 }: { page?: number }) => {
	try {
		const response: NowShowingMovies = await _axios.get(
			`movie/now_playing?language=en-US&page=${page}`
		)
		return response
	} catch (error) {
		throw error
	}
}
