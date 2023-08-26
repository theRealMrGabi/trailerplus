import React from 'react'
import { View, Platform } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
	FilmIcon,
	MagnifyingGlassCircleIcon,
	TvIcon
} from 'react-native-heroicons/outline'
import {
	FilmIcon as FilmIconSolid,
	MagnifyingGlassCircleIcon as MagnifyingGlassCircleIconSolid,
	TvIcon as TvIconSolid
} from 'react-native-heroicons/solid'
import classNames from 'classnames'

import { SearchScreen, WatchListScreen } from '@/screens'
import type { IHomeTab } from '@/interface'
import { color } from '@/utils'
import { HomeStackNavigation } from './home.stack.navigation'

const ios = Platform.OS === 'ios'
const Tab = createBottomTabNavigator<IHomeTab>()

export const HomeTabNavigation = () => {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => MenuIcons({ route: route.name, focused }),
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					backgroundColor: color['grey-300'],
					height: 55
				}
			})}
			sceneContainerStyle={{
				backgroundColor: color['grey-300']
			}}>
			<Tab.Screen name='Home' component={HomeStackNavigation} />
			<Tab.Screen name='WatchList' component={WatchListScreen} />
			<Tab.Screen name='Search' component={SearchScreen} />
		</Tab.Navigator>
	)
}

const MenuIcons = ({
	route,
	focused
}: {
	route: keyof IHomeTab
	focused: boolean
}) => {
	const icon = (activeKey: keyof IHomeTab) => {
		const activeColor = color['gold-200']
		const inactiveColor = color['gold-300']

		const activeIcon = {
			Home: focused ? (
				<FilmIconSolid color={activeColor} />
			) : (
				<FilmIcon color={inactiveColor} />
			),
			WatchList: focused ? (
				<TvIconSolid color={activeColor} />
			) : (
				<TvIcon color={inactiveColor} />
			),
			Search: focused ? (
				<MagnifyingGlassCircleIconSolid color={activeColor} />
			) : (
				<MagnifyingGlassCircleIcon color={inactiveColor} />
			)
		}

		return activeIcon[activeKey]
	}

	return (
		<View
			className={classNames({
				'pt-7': ios
			})}>
			{icon(route)}
		</View>
	)
}
