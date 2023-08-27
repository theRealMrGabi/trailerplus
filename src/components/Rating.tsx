import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { View, Text } from 'react-native'
import classNames from 'classnames'

import { useUtilsContext } from '@/contexts'
import { color } from '@/utils'

export const Rating = ({ rating }: { rating: number }) => {
	const { isDarkMode } = useUtilsContext()
	return (
		<View className='flex flex-row items-center gap-x-3 my-2'>
			<StarIcon color={color['gold-100']} size={20} />
			<Text
				className={classNames('text-xs font-medium', {
					'text-trailer-ice-100': isDarkMode,
					'text-trailer-grey-800': !isDarkMode
				})}>
				{rating}/10 IMDb
			</Text>
		</View>
	)
}
