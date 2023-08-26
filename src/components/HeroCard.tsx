import React from 'react'
import { View, Image, Text } from 'react-native'

interface Props {
	title: string
}

export const HeroCard = ({ title }: Props) => {
	return (
		<View className='mr-2 relative p-1'>
			<Image
				source={require('../../assets/image/heart-stone.jpeg')}
				className='w-full rounded-lg mt-3'
				style={{ height: 200 }}
			/>

			<Text className='font-bold text-lg absolute bottom-4 right-4 text-white'>
				{title}
			</Text>
		</View>
	)
}
