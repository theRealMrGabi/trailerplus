import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import classNames from 'classnames'
import { Bars3CenterLeftIcon } from 'react-native-heroicons/solid'
import { BellIcon } from 'react-native-heroicons/outline'

import { useUtilsContext } from '@/contexts'
import { color } from '@/utils'

export const HomeScreen = () => {
	const { isDarkMode } = useUtilsContext()

	return (
		<SafeAreaView
			className={classNames('h-full overflow-y-scroll', {
				'bg-trailer-grey-400': isDarkMode,
				'bg-white': !isDarkMode
			})}>
			<View className='flex flex-row justify-between items-center px-4'>
				<Bars3CenterLeftIcon
					color={isDarkMode ? color['grey-500'] : color['black-100']}
					size={28}
					height={40}
				/>

				<Text
					className={classNames('font-bold text-lg', {
						'text-trailer-grey-500': isDarkMode,
						'text-trailer-black-100': !isDarkMode
					})}>
					TrailerPlus
				</Text>

				<BellIcon
					color={isDarkMode ? color['grey-500'] : color['black-100']}
					size={25}
					height={40}
				/>
			</View>

			<ScrollView>
				<View>
					<Text
						className={classNames('', {
							'text-white': isDarkMode,
							'text-trailer-grey-200': !isDarkMode
						})}>
						HomeScreen Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Cum omnis tenetur fugit in eius impedit, sequi natus, tempore quos
						voluptatibus temporibus quam. Praesentium reprehenderit,
						consequuntur vel molestiae doloremque molestias enim!
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
