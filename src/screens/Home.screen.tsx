import React, { useState } from 'react'
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TouchableOpacity,
	Image
} from 'react-native'
import classNames from 'classnames'
import { Bars3CenterLeftIcon } from 'react-native-heroicons/solid'
import { BellIcon } from 'react-native-heroicons/outline'

import { useUtilsContext } from '@/contexts'
import { color } from '@/utils'
import { BrandIdentity, MovieCard } from '@/components'

interface CategoryProps {
	title: string
}

const categories: CategoryProps[] = [
	{ title: 'Trending Movies' },
	{ title: 'Popular Movies' },
	{ title: 'Upcoming movies' },
	{ title: 'Trending TV' },
	{ title: 'Popular TV' },
	{ title: 'All Time Top Rated' }
]

export const HomeScreen = () => {
	const { isDarkMode } = useUtilsContext()

	const [selectedCategory, setSelectedCategory] = useState<CategoryProps>(
		categories[0]
	)

	return (
		<SafeAreaView
			className={classNames('h-full overflow-y-scroll', {
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

					<View className='relative'>
						<Image
							source={require('../../assets/image/heart-stone.jpeg')}
							className='w-full rounded-lg mt-3'
							style={{ height: 200 }}
						/>

						<Text
							className={classNames(
								'font-bold text-lg absolute bottom-4 left-4 text-white'
							)}>
							Heart stone
						</Text>
					</View>
				</View>

				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					className='ml-4 mt-5 mb-3 flex flex-row'
					contentContainerStyle={{
						alignItems: 'center'
					}}>
					{categories.map(category => (
						<TouchableOpacity
							key={category.title}
							className={classNames('mr-4', {
								'rounded-lg bg-trailer-gold-200 px-2 py-1':
									category.title === selectedCategory.title
							})}>
							<Text
								className={classNames('font-medium text-lg capitalize', {
									'text-trailer-grey-500': isDarkMode,
									'text-trailer-blue-200': !isDarkMode,
									'text-white': category.title === selectedCategory.title
								})}
								onPress={() => setSelectedCategory(category)}
								style={{ borderRadius: 5 }}>
								{category.title}
							</Text>
						</TouchableOpacity>
					))}
				</ScrollView>

				<View
					className={classNames('border-b mx-4', {
						'border-trailer-gold-300': isDarkMode,
						'border-trailer-grey-600': !isDarkMode
					})}
				/>

				<ScrollView className='mx-4 mt-3'>
					{/* eslint-disable-next-line no-unused-vars */}
					{[...Array(5)].map((item, i) => (
						<MovieCard key={i} />
					))}
				</ScrollView>

				<View>
					{/**
					 * 1. Movie Card
					 * 2. Trending Movies
					 * 3. Trending Tv Shows
					 * 4. All Time Top Rated
					 * 5. Popular Movies
					 * 6. Upcoming movies
					 * 7. Popular TV
					 */}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
