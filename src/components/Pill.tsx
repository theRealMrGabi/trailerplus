import React from 'react'
import { View, Text } from 'react-native'
import classNames from 'classnames'

import { useUtilsContext } from '@/contexts'

export const Pill = ({ value }: { value: string }) => {
	const { isDarkMode } = useUtilsContext()

	return (
		<View
			className={classNames('py-1 px-2 rounded-lg', {
				'bg-[#88a4e8]': isDarkMode,
				'bg-[#DBE3FF]': !isDarkMode
			})}>
			<Text
				className={classNames('font-bold uppercase text-xs', {
					'text-[#DBE3FF]': isDarkMode,
					'text-[#88a4e8]': !isDarkMode
				})}>
				{value}
			</Text>
		</View>
	)
}
