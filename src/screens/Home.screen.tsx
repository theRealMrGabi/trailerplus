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
import { HeroData, color } from '@/utils'
import {
	BrandIdentity,
	MovieCard,
	HeroCard,
	HeroCardSkeleton
} from '@/components'
import { NowShowingMoviesApi, moviesQueryKeys } from '@/api'

export const HomeScreen = () => {
	const { isDarkMode } = useUtilsContext()

	const { data: nowShowing, isLoading: nowShowingLoading } = useQuery({
		queryKey: [moviesQueryKeys.nowShowingMovies],
		queryFn: () => NowShowingMoviesApi({}),
		select: response => {
			const slice = response.results.slice(0, 14)
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
								{nowShowing?.map((item, i) => (
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
					<MovieCard data={HeroData} title='Trending Movies' />
					<MovieCard data={HeroData} title='Popular Movies' />
					<MovieCard data={HeroData} title='Upcoming Movies' />
					<MovieCard data={HeroData} title='Trending TV' />
					<MovieCard data={HeroData} title='Popular TV' />
					<MovieCard data={HeroData} title='All Time Top Rated' />
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
	)
}
