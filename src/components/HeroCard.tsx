import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'
import ContentLoader, { Rect } from 'react-content-loader/native'

import { useHomeStackNavigation } from '@/hooks'
import { Movie } from '@/interface'

export const HeroCard = ({ title, backdrop_path, id }: Movie) => {
	const { navigation } = useHomeStackNavigation()

	return (
		<TouchableOpacity
			className='mr-2 relative p-1'
			onPress={() =>
				navigation.navigate('MovieDetails', {
					movieID: id
				})
			}
			activeOpacity={0.7}>
			<Image
				source={{ uri: `https://image.tmdb.org/t/p/w1280${backdrop_path}` }}
				className='w-full rounded-lg mt-3'
				style={{ height: 200 }}
			/>

			<Text className='font-bold text-lg absolute bottom-4 right-4 text-white'>
				{title}
			</Text>
		</TouchableOpacity>
	)
}

export const HeroCardSkeleton = () => {
	return (
		<ContentLoader
			speed={2}
			width={350}
			height={200}
			backgroundColor='#f0f0f0'
			foregroundColor='#dedede'>
			<Rect x='0' y='0' rx='10' ry='10' width='400' height='160' />
			<Rect x='0' y='170' rx='4' ry='4' width='300' height='9' />
		</ContentLoader>
	)
}
