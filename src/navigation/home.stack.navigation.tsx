import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { HomeScreen, MovieCategoryScreen, MovieDetailsScreen } from '@/screens'
import { IHomeStack } from '@/interface'

const Stack = createNativeStackNavigator<IHomeStack>()

export const HomeStackNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName='HomeScreen'
			screenOptions={{ headerShown: false }}>
			<Stack.Screen name='HomeScreen' component={HomeScreen} />
			<Stack.Screen name='MovieDetails' component={MovieDetailsScreen} />
			<Stack.Screen name='MovieCategory' component={MovieCategoryScreen} />
		</Stack.Navigator>
	)
}
