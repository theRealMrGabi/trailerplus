import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { IHomeStack } from '@/interface'

interface Props {
	title: string
}

export const HeroCard = ({ title }: Props) => {
	const navigation = useNavigation<NativeStackNavigationProp<IHomeStack>>()

	return (
		<TouchableOpacity
			className='mr-2 relative p-1'
			onPress={() =>
				navigation.navigate('MovieDetails', {
					movieID: 'abc'
				})
			}
			activeOpacity={0.7}>
			<Image
				source={require('../../assets/image/heart-stone.jpeg')}
				className='w-full rounded-lg mt-3'
				style={{ height: 200 }}
			/>

			<Text className='font-bold text-lg absolute bottom-4 right-4 text-white'>
				{title}
			</Text>
		</TouchableOpacity>
	)
}
