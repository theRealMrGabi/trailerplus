import { color } from '@/utils'
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { StarIcon } from 'react-native-heroicons/solid'

export const MovieCard = () => {
	return (
		<TouchableOpacity
			className='border mb-3 flex flex-row items-center pr-3'
			style={{ gap: 15 }}>
			<Image
				source={require('../../assets/image/heart-stone.jpeg')}
				className='w-[35%] rounded-lg mt-3'
				style={{ height: 150 }}
			/>

			<View className='w-[65%]'>
				<Text numberOfLines={0} className='capitalize text-base font-semibold'>
					Venom Let there be carnage
				</Text>
				<View className='flex flex-row gap-2'>
					<StarIcon color={color['gold-200']} size={16} />
					<Text>6.4/10</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}
