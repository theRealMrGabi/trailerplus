import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {Text} from 'react-native'

export const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Text className='text-red-800 font-bold'>Hello react native</Text>
		</NavigationContainer>
	)
}
