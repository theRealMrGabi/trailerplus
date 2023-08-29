import { useQuery } from '@tanstack/react-query'
import { SeriesApi, tvSeriesQueryKeys, TVSeriesURL } from '@/api'

export const useSeriesApi = () => {
	const { data: trendingTVSeries, isLoading: trendingTVSeriesLoading } =
		useQuery({
			queryKey: [tvSeriesQueryKeys.trendingTVSeries],
			queryFn: () => SeriesApi(TVSeriesURL.trendingTVSeries),
			select: response => {
				const slice = response.results.slice(0, 10)
				return slice
			}
		})

	const { data: popularTVSeries, isLoading: popularTVSeriesLoading } = useQuery(
		{
			queryKey: [tvSeriesQueryKeys.popularTVSeries],
			queryFn: () => SeriesApi(TVSeriesURL.popularTVSeries),
			select: response => {
				const slice = response.results.slice(0, 10)
				return slice
			}
		}
	)

	return {
		trendingTVSeries,
		trendingTVSeriesLoading,
		popularTVSeries,
		popularTVSeriesLoading
	}
}
