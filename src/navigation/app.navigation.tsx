import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { IHomeStack } from '@/interface'
import { useUtilsContext } from '@/contexts'
import { color } from '@/utils'
import { HomeTabNavigation } from './home.tab.navigation'

const Stack = createNativeStackNavigator<IHomeStack>()
export const AppNavigation = () => {
	const { isDarkMode } = useUtilsContext()

	return (
		<NavigationContainer>
			<StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={color['grey-400']}
			/>

			<Stack.Navigator
				initialRouteName='HomeScreen'
				screenOptions={{
					headerShown: false
				}}>
				<Stack.Screen name='HomeScreen' component={HomeTabNavigation} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}
