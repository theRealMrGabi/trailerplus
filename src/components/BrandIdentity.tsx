import React from 'react'
import { Text } from 'react-native'
import classNames from 'classnames'

import { useUtilsContext } from '@/contexts'

export const BrandIdentity = () => {
	const { isDarkMode } = useUtilsContext()

	return (
		<Text
			className={classNames('font-bold text-lg', {
				'text-trailer-grey-500': isDarkMode,
				'text-trailer-black-100': !isDarkMode
			})}>
			Trailer
			<Text className='text-trailer-gold-200 '>Plus</Text>
		</Text>
	)
}
