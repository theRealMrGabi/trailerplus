import React from 'react'
import {
	Text,
	SafeAreaView,
	View,
	FlatList,
	TouchableOpacity,
	Image
} from 'react-native'
import classNames from 'classnames'
import { ClockIcon } from 'react-native-heroicons/outline'

import { useUtilsContext } from '@/contexts'
import { CategoryData, color } from '@/utils'
import { Pill, Rating } from '@/components'

export const MovieCategoryScreen = () => {
	const { isDarkMode } = useUtilsContext()

	return (
		<SafeAreaView
			className={classNames('h-full', {
				'bg-trailer-grey-400': isDarkMode,
				'bg-white': !isDarkMode
			})}>
			<View className='flex-1 px-4'>
				<Text
					className={classNames('text-xl font-semibold mb-3', {
						'text-trailer-grey-150': isDarkMode,
						'text-trailer-black-100': !isDarkMode
					})}>
					Popular
				</Text>

				<FlatList
					data={CategoryData}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<TouchableOpacity className='flex flex-row mb-4'>
							<Image
								source={require('../../assets/image/heart-stone.jpeg')}
								style={{ height: 120 }}
								className='rounded w-[30vw] mr-4'
							/>

							<View>
								<Text
									className={classNames('text-sm font-bold', {
										'text-trailer-grey-150': isDarkMode,
										'text-trailer-black-100': !isDarkMode
									})}>
									{item.name}
								</Text>

								<Rating rating={9.1} />

								<View
									className='flex flex-row my-1 flex-wrap'
									style={{ gap: 12 }}>
									{/* eslint-disable-next-line no-unused-vars */}
									{[...Array(3)].map((_item, i) => (
										<Pill key={i} />
									))}
								</View>

								<View
									className='flex flex-row items-center mt-2'
									style={{ gap: 5 }}>
									<ClockIcon
										size={13}
										color={isDarkMode ? color['white-100'] : color['black-100']}
									/>
									<Text
										className={classNames('text-xs', {
											'text-trailer-white-100 font-semibold': isDarkMode,
											'text-black font-medium': !isDarkMode
										})}>
										2h 28min
									</Text>
								</View>
							</View>
						</TouchableOpacity>
					)}
				/>
			</View>
		</SafeAreaView>
	)
}
