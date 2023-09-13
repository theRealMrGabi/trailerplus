import React from 'react'
import { View, Text } from 'react-native'
import classNames from 'classnames'

import { useUtilsContext } from '@/contexts'

export const WatchListScreen = () => {
	const { isDarkMode } = useUtilsContext()

	return (
		<View
			className={classNames('h-full', {
				'bg-trailer-grey-400': isDarkMode,
				'bg-white': !isDarkMode
			})}>
			<Text>WatchList.screen</Text>
		</View>
	)
}
