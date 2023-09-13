import type { RouteProp } from '@react-navigation/native'

export type IHomeTab = {
	Home: undefined
	Search: undefined
	WatchList: undefined
}

export type IAppStack = {
	Landing: undefined
}

export type IHomeStack = {
	HomeScreen: undefined
	MovieCategory: undefined
	MovieDetails: {
		movieID: number
	}
	SeriesDetails: {
		seriesID: number
	}
}

export type HomeStackRouteProps<RouteName extends keyof IHomeStack> = RouteProp<
	IHomeStack,
	RouteName
>
