import { _axios } from '@/api'
import { TVSeriesResponse } from '@/interface'

export const tvSeriesQueryKeys = Object.freeze({
	trendingTVSeries: 'trendingTVSeries',
	popularTVSeries: 'popularTVSeries'
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
