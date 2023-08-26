import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import classNames from 'classnames'

import { useUtilsContext } from '@/contexts'

export const MovieCategoryScreen = () => {
	const { isDarkMode } = useUtilsContext()

	return (
		<SafeAreaView
			className={classNames('h-full overflow-y-scroll', {
				'bg-trailer-grey-400': isDarkMode,
				'bg-white': !isDarkMode
			})}>
			<Text>MovieCategoryScreen</Text>
		</SafeAreaView>
	)
}
