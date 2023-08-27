import React from 'react'
import {
	Text,
	ImageBackground,
	View,
	ScrollView,
	TouchableOpacity,
	Image
} from 'react-native'
import classNames from 'classnames'
import { BookmarkIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'

import { useUtilsContext } from '@/contexts'
import { color, CastData } from '@/utils'
import { Pill } from '@/components'
import { useHomeStackNavigation } from '@/hooks'

export const MovieDetailsScreen = () => {
	const { isDarkMode } = useUtilsContext()
	const { navigation } = useHomeStackNavigation()

	// const movieID = route.params?.movieID

	return (
		<View style={{ flex: 1 }}>
			<View className='relative'>
				<ImageBackground
					source={require('../../assets/image/heart-stone.jpeg')}
					style={{ height: 300 }}
				/>

				<TouchableOpacity
					className='absolute left-4 top-16 bg-trailer-grey-900 rounded-full p-2'
					onPress={() => navigation.goBack()}>
					<ChevronLeftIcon color={color['grey-500']} />
				</TouchableOpacity>
			</View>

			<ScrollView
				className={classNames('p-4 flex', {
					'bg-trailer-grey-400': isDarkMode,
					'bg-white': !isDarkMode
				})}>
				<View className='flex flex-row justify-between items-center'>
					<Text
						className={classNames('text-xl font-semibold', {
							'text-trailer-grey-150': isDarkMode,
							'text-trailer-black-100': !isDarkMode
						})}>
						Spiderman: No Way Home
					</Text>
					<BookmarkIcon
						size={21}
						color={isDarkMode ? color['grey-150'] : color['grey-100']}
					/>
				</View>

				<View className='flex flex-row items-center gap-x-3 my-2'>
					<StarIcon color={color['gold-100']} size={20} />
					<Text
						className={classNames('text-xs font-medium', {
							'text-trailer-ice-100': isDarkMode,
							'text-trailer-grey-800': !isDarkMode
						})}>
						9.1/10 IMDb
					</Text>
				</View>

				<View className='flex flex-row my-2 flex-wrap' style={{ gap: 12 }}>
					{/* eslint-disable-next-line no-unused-vars */}
					{[...Array(10)].map((_item, i) => (
						<Pill key={i} />
					))}
				</View>

				<View className='flex flex-row justify-between items-center my-3'>
					<View>
						<Text className='text-trailer-grey-800'>Length</Text>
						<Text
							className={classNames('pt-1', {
								'text-trailer-white-100 font-semibold': isDarkMode,
								'text-black font-medium': !isDarkMode
							})}>
							2h 28min
						</Text>
					</View>

					<View>
						<Text className='text-trailer-grey-800'>Language</Text>
						<Text
							className={classNames('pt-1', {
								'text-trailer-white-100 font-semibold': isDarkMode,
								'text-black font-medium': !isDarkMode
							})}>
							English
						</Text>
					</View>

					<View>
						<Text className='text-trailer-grey-800'>Rating</Text>
						<Text
							className={classNames('pt-1', {
								'text-trailer-white-100 font-semibold': isDarkMode,
								'text-black font-medium': !isDarkMode
							})}>
							PG-13
						</Text>
					</View>
				</View>

				<View className='mt-4'>
					<Text
						className={classNames('text-lg font-semibold', {
							'text-trailer-grey-800': isDarkMode,
							'text-trailer-black-100': !isDarkMode
						})}>
						Description
					</Text>
					<Text
						className={classNames('pt-2', {
							'text-trailer-white-100': isDarkMode,
							'text-trailer-grey-800': !isDarkMode
						})}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
						voluptates omnis obcaecati rem dolores molestias magni sit,
						repellendus accusantium veniam!
					</Text>
				</View>

				<View className='my-4'>
					<Text
						className={classNames('text-lg font-semibold', {
							'text-trailer-grey-800': isDarkMode,
							'text-trailer-black-100': !isDarkMode
						})}>
						Cast
					</Text>

					<View
						className='flex flex-row flex-wrap pt-2'
						style={{ rowGap: 13, columnGap: 20 }}>
						{CastData.map(cast => (
							<TouchableOpacity
								key={cast.id}
								className='mb-2'
								activeOpacity={0.5}>
								<Image
									source={require('../../assets/image/heart-stone.jpeg')}
									style={{ height: 90 }}
									className='rounded w-[26vw]'
								/>
								<Text
									className={classNames('font-semibold pt-1', {
										'text-white': isDarkMode,
										'text-trailer-black-100': !isDarkMode
									})}>
									{cast.name}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>
			</ScrollView>
		</View>
	)
}
