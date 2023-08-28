import React from 'react'
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TouchableOpacity
} from 'react-native'
import classNames from 'classnames'
import { Bars3CenterLeftIcon } from 'react-native-heroicons/solid'
import { BellIcon } from 'react-native-heroicons/outline'
import { useQuery } from '@tanstack/react-query'
import Swiper from 'react-native-swiper'

import { useUtilsContext } from '@/contexts'
import { color } from '@/utils'
import {
	BrandIdentity,
	MovieCard,
	SeriesCard,
	HeroCard,
	HeroCardSkeleton
} from '@/components'
import {
	moviesQueryKeys,
	MoviesApi,
	URL,
	SeriesApi,
	tvSeriesQueryKeys,
	TVSeriesURL
} from '@/api'

export const HomeScreen = () => {
	const { isDarkMode } = useUtilsContext()

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

	return (
		<SafeAreaView
			className={classNames('h-full', {
				'bg-trailer-grey-400': isDarkMode,
				'bg-white': !isDarkMode
			})}>
			<View className='flex flex-row justify-between items-center px-4'>
				<TouchableOpacity>
					<Bars3CenterLeftIcon
						color={isDarkMode ? color['grey-500'] : color['black-100']}
						size={28}
						height={40}
					/>
				</TouchableOpacity>

				<BrandIdentity />

				<TouchableOpacity>
					<BellIcon
						color={isDarkMode ? color['grey-500'] : color['black-100']}
						size={25}
						height={40}
					/>
				</TouchableOpacity>
			</View>

			<ScrollView>
				<View className='px-4'>
					<Text
						className={classNames('pt-2 text-2xl font-bold', {
							'text-trailer-grey-500': isDarkMode,
							'text-trailer-black-100': !isDarkMode
						})}>
						Now showing
					</Text>

					<View className='mt-5 h-[25vh]'>
						{nowShowingLoading ? (
							<HeroCardSkeleton />
						) : (
							<Swiper showsButtons={false} showsPagination={false}>
								{nowShowingMovies?.map((item, i) => (
									<View className='flex w-full gap-4' key={i}>
										<HeroCard {...item} />
									</View>
								))}
							</Swiper>
						)}
					</View>
				</View>

				<ScrollView
					className='pl-4'
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}>
					<MovieCard
						movie={trendingMovies!}
						title='trending'
						loading={trendingMoviesLoading}
					/>
					<MovieCard
						movie={popularMovies!}
						title='popular'
						loading={popularMoviesLoading}
					/>
					<MovieCard
						movie={upcomingMovies!}
						title='upcoming'
						loading={upcomingMoviesLoading}
					/>
					<SeriesCard
						series={trendingTVSeries!}
						title='trending'
						loading={trendingTVSeriesLoading}
					/>
					<SeriesCard
						series={popularTVSeries!}
						title='popular'
						loading={popularTVSeriesLoading}
					/>
					<MovieCard
						movie={allTimeTopRatedMovies!}
						title='all time top rated'
						loading={allTimeTopRatedMoviesLoading}
					/>
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
	)
}
