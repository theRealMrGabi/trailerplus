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
}
