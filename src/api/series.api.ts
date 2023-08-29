import { _axios } from '@/api'
import { TVSeriesResponse, TVSeriesDetails, MovieCredits } from '@/interface'

export const tvSeriesQueryKeys = Object.freeze({
	trendingTVSeries: 'trendingTVSeries',
	popularTVSeries: 'popularTVSeries',
	seriesDetails: 'seriesDetails',
	seriesCredits: 'seriesCredits'
})

export const TVSeriesURL = {
	trendingTVSeries: 'trending/tv/day?language=en-US',
	popularTVSeries: 'tv/popular?language=en-US'
}

export const SeriesApi = async (url: string) => {
	try {
		const response: TVSeriesResponse = await _axios.get(url)
		return response
	} catch (error) {
		throw error
	}
}

export const SeriesDetailsApi = async (id: number) => {
	try {
		const response: TVSeriesDetails = await _axios.get(
			`tv/${id}?language=en-US`
		)
		return response
	} catch (error) {
		throw error
	}
}

export const SeriesCreditsApi = async (id: number) => {
	try {
		const response: MovieCredits = await _axios.get(
			`tv/${id}/credits?language=en-US`
		)
		return response
	} catch (error) {
		throw error
	}
}
