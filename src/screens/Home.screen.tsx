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
import { useMoviesApi, useSeriesApi } from '@/hooks'

export const HomeScreen = () => {
	const { isDarkMode } = useUtilsContext()

	const {
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
	} = useMoviesApi()

	const {
		trendingTVSeries,
		trendingTVSeriesLoading,
		popularTVSeries,
		popularTVSeriesLoading
	} = useSeriesApi()

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
