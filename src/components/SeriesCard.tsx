import React from 'react'
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { ChevronRightIcon } from 'react-native-heroicons/solid'
import classNames from 'classnames'

import { useHomeStackNavigation } from '@/hooks'
import { color } from '@/utils'
import { useUtilsContext } from '@/contexts'
import { TVSeries } from '@/interface'
import { MovieCardSkeleton } from '@/components'

interface Props {
	series: TVSeries[]
	title: 'trending' | 'popular' | 'upcoming' | 'all time top rated'
	loading: boolean
}

export const SeriesCard = ({ series, title, loading }: Props) => {
	const { isDarkMode } = useUtilsContext()
	const { navigation } = useHomeStackNavigation()

	return (
		<View className='my-4'>
			<TouchableOpacity
				className='flex flex-row gap-4 items-center mb-2'
				onPress={() => navigation.navigate('MovieCategory')}
				activeOpacity={0.5}>
				<Text className='text-trailer-gold-300 font-bold text-lg capitalize'>
					{title} TV shows
				</Text>
				<ChevronRightIcon size={18} fill={color['gold-400']} />
			</TouchableOpacity>

			{loading ? (
				<MovieCardSkeleton />
			) : (
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={series}
					keyExtractor={item => item.id.toString()}
					className='overflow-visible overflow-x-scroll'
					renderItem={({ item }) => (
						<TouchableOpacity
							className='m-w-[40%]'
							key={item.id}
							activeOpacity={0.7}
							onPress={() =>
								navigation.navigate('MovieDetails', {
									movieID: item.id
								})
							}>
							<Image
								source={{
									uri: `https://image.tmdb.org/t/p/w300${item.backdrop_path}`
								}}
								style={{ height: 120 }}
								className='rounded w-[50vw] mr-4'
							/>
							<Text
								className={classNames('font-semibold pt-1 w-4/5 truncate', {
									'text-white': isDarkMode,
									'text-trailer-black-100': !isDarkMode
								})}>
								{item.name}
							</Text>
						</TouchableOpacity>
					)}
				/>
			)}
		</View>
	)
}
