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

import { useUtilsContext } from '@/contexts'
import { color } from '@/utils'
import { BrandIdentity } from '@/components'

export const HomeScreen = () => {
	const { isDarkMode } = useUtilsContext()

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
				<View>
					<Text
						className={classNames('', {
							'text-white': isDarkMode,
							'text-trailer-grey-200': !isDarkMode
						})}>
						Whereas disregard and contempt for human rights have resulted
						HomeScreen Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cum omnis tenetur fugit in eius impedit, sequi natus, tempore quos
						voluptatibus temporibus quam. Praesentium reprehenderit,
						consequuntur vel molestiae doloremque molestias enim!
					</Text>

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
