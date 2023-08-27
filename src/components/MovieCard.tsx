import React from 'react'
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import { ChevronRightIcon } from 'react-native-heroicons/solid'
import classNames from 'classnames'

import { useHomeStackNavigation } from '@/hooks'
import { color } from '@/utils'
import { useUtilsContext } from '@/contexts'

interface Props {
	data: { title: string; image: string; id: string }[]
	title: string
}

export const MovieCard = ({ data, title }: Props) => {
	const { isDarkMode } = useUtilsContext()
	const { navigation } = useHomeStackNavigation()

	return (
		<View className='my-4'>
			<TouchableOpacity
				className='flex flex-row gap-4 items-center mb-2'
				onPress={() => navigation.navigate('MovieCategory')}
				activeOpacity={0.5}>
				<Text className='text-trailer-gold-300 font-bold text-lg'>{title}</Text>
				<ChevronRightIcon size={18} fill={color['gold-400']} />
			</TouchableOpacity>

			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				keyExtractor={item => item.id}
				className='overflow-visible overflow-x-scroll'
				renderItem={({ item }) => (
					<TouchableOpacity
						key={item.id}
						activeOpacity={0.7}
						onPress={() =>
							navigation.navigate('MovieDetails', {
								movieID: 74884
							})
						}>
						<Image
							source={require('../../assets/image/heart-stone.jpeg')}
							style={{ height: 120 }}
							className='rounded w-[50vw] mr-4'
						/>
						<Text
							className={classNames('font-semibold pt-1', {
								'text-white': isDarkMode,
								'text-trailer-black-100': !isDarkMode
							})}>
							{item.title}
						</Text>
					</TouchableOpacity>
				)}
			/>
		</View>
	)
}
