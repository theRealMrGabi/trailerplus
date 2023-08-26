import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import { ChevronRightIcon } from 'react-native-heroicons/solid'

import { color } from '@/utils'
import { useUtilsContext } from '@/contexts'
import classNames from 'classnames'

interface Props {
	data: { title: string; image: string; id: string }[]
	title: string
}

export const MovieCard = ({ data, title }: Props) => {
	const { isDarkMode } = useUtilsContext()

	return (
		<View className='my-4'>
			<View className='flex flex-row gap-4 items-center mb-2'>
				<Text className='text-trailer-gold-300 font-bold text-lg'>{title}</Text>
				<ChevronRightIcon size={18} fill={color['gold-400']} />
			</View>

			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				keyExtractor={item => item.id}
				className='overflow-visible overflow-x-scroll'
				renderItem={({ item }) => (
					<View key={item.id}>
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
					</View>
				)}
			/>
		</View>
	)
}
