import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import classNames from 'classnames'
// import { useRoute, RouteProp } from '@react-navigation/core'

import { useUtilsContext } from '@/contexts'
// import { IHomeStack } from '@/interface'

export const MovieDetailsScreen = () => {
	const { isDarkMode } = useUtilsContext()
	// const route = useRoute<RouteProp<IHomeStack>>()
	// const movieID = route.params?.movieID

	return (
		<SafeAreaView
			className={classNames('h-full overflow-y-scroll', {
				'bg-trailer-grey-400': isDarkMode,
				'bg-white': !isDarkMode
			})}>
			<Text>MovieDetails.screen</Text>
		</SafeAreaView>
	)
}
