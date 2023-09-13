import React, { useState } from 'react'
import {
	Text,
	ImageBackground,
	View,
	TouchableOpacity,
	Image,
	FlatList,
	Pressable
} from 'react-native'
import classNames from 'classnames'
import {
	BookmarkIcon,
	ChevronLeftIcon,
	VideoCameraIcon
} from 'react-native-heroicons/outline'
import { useQuery } from '@tanstack/react-query'
import ContentLoader, { Rect } from 'react-content-loader/native'
import { useRoute } from '@react-navigation/core'

import {
	SeriesDetailsApi,
	tvSeriesQueryKeys,
	SeriesCreditsApi,
	MovieVideosApi
} from '@/api'
import { useUtilsContext } from '@/contexts'
import { color, _formatNumber } from '@/utils'
import { Pill, Rating, TrailerModal } from '@/components'
import { useHomeStackNavigation } from '@/hooks'
import { HomeStackRouteProps, TVSeriesDetails } from '@/interface'

export const SeriesDetailsScreen = () => {
	const { isDarkMode } = useUtilsContext()
	const { navigation } = useHomeStackNavigation()

	const route = useRoute<HomeStackRouteProps<'SeriesDetails'>>()

	const seriesID = route.params?.seriesID

	const { data: series, isLoading: seriesDetailsLoading } = useQuery({
		queryKey: [tvSeriesQueryKeys.seriesDetails, seriesID],
		queryFn: () => SeriesDetailsApi(seriesID!),
		enabled: !!seriesID
	})

	const { data: seriesCredits } = useQuery({
		queryKey: [tvSeriesQueryKeys.seriesCredits, seriesID],
		queryFn: () => SeriesCreditsApi(seriesID!),
		enabled: !!seriesID
	})

	return (
		<View
			className={classNames('flex-1', {
				'bg-trailer-grey-400': isDarkMode,
				'bg-white': !isDarkMode
			})}>
			{seriesDetailsLoading ? (
				<ContentLoader
					width={450}
					height={400}
					viewBox='0 0 450 400'
					backgroundColor='#f0f0f0'
					foregroundColor='#dedede'>
					<Rect x='20' y='77' rx='10' ry='10' width='350' height='217' />
					<Rect x='25' y='308' rx='4' ry='4' width='290' height='9' />
					<Rect x='25' y='330' rx='3' ry='3' width='275' height='9' />
					<Rect x='25' y='350' rx='3' ry='3' width='265' height='9' />
					<Rect x='25' y='370' rx='3' ry='3' width='255' height='9' />
					<Rect x='25' y='390' rx='3' ry='3' width='245' height='9' />
				</ContentLoader>
			) : (
				<View>
					<View className='relative'>
						<ImageBackground
							source={{
								uri: `https://image.tmdb.org/t/p/w1280${series?.backdrop_path}`
							}}
							style={{ height: 300 }}
						/>

						<TouchableOpacity
							className='absolute left-4 top-16 bg-trailer-grey-900 rounded-full p-2'
							onPress={() => navigation.goBack()}>
							<ChevronLeftIcon color={color['grey-500']} />
						</TouchableOpacity>
					</View>

					<FlatList
						data={seriesCredits?.cast}
						keyExtractor={item => item.id.toString()}
						ListHeaderComponent={<SeriesDetailsHeader series={series!} />}
						numColumns={3}
						contentContainerStyle={{
							backgroundColor: isDarkMode ? '#1F3B4D' : '#ffffff'
						}}
						renderItem={({ item }) => (
							<View
								className={classNames('p-4', {
									'bg-trailer-grey-400': isDarkMode,
									'bg-white': !isDarkMode
								})}>
								<TouchableOpacity
									key={item.id}
									className='mb-2'
									activeOpacity={0.5}>
									<Image
										source={{
											uri: `https://image.tmdb.org/t/p/w300${item.profile_path}`
										}}
										style={{ height: 100 }}
										className='rounded w-[26vw]'
									/>
									<Text
										className={classNames('font-medium pt-1', {
											'text-white': isDarkMode,
											'text-trailer-black-100': !isDarkMode
										})}>
										{item.name}
									</Text>
									<Text
										className={classNames('font-medium pt-1', {
											'text-white': isDarkMode,
											'text-trailer-black-100': !isDarkMode
										})}>
										as
									</Text>
									<Text
										className={classNames('font-medium pt-1', {
											'text-white': isDarkMode,
											'text-trailer-black-100': !isDarkMode
										})}>
										{item.character}
									</Text>
								</TouchableOpacity>
							</View>
						)}
					/>
				</View>
			)}
		</View>
	)
}

const SeriesDetailsHeader = ({ series }: { series: TVSeriesDetails }) => {
	const { isDarkMode } = useUtilsContext()

	const [videoID, setVideoID] = useState<string | null>(null)
	const [modal, setModal] = useState(false)
	const closeModal = () => setModal(false)

	const movieID = series.id

	const { isLoading: movieVideosLoading } = useQuery({
		queryKey: [tvSeriesQueryKeys.seriesVideos, movieID],
		queryFn: () =>
			MovieVideosApi({
				id: movieID!,
				type: 'tv'
			}),
		enabled: !!movieID,
		select: response => {
			const movieTrailers = response?.results?.find(
				movieTrailer => movieTrailer.type === 'Trailer'
			)
			setVideoID(movieTrailers?.key || response?.results[0]?.key)
		}
	})

	return (
		<View
			className={classNames('p-4 flex', {
				'bg-trailer-grey-400': isDarkMode,
				'bg-white': !isDarkMode
			})}>
			<View className='flex flex-row justify-between items-center'>
				<Text
					className={classNames('text-xl font-semibold', {
						'text-trailer-grey-150': isDarkMode,
						'text-trailer-black-100': !isDarkMode
					})}>
					{series.name}
				</Text>
				<BookmarkIcon
					size={21}
					color={isDarkMode ? color['grey-150'] : color['grey-100']}
				/>
			</View>

			<View className='flex flex-row justify-between items-center my-4'>
				<Rating rating={series?.vote_average} />

				<Pressable
					className='flex flex-row items-center gap-4'
					onPress={() => setModal(true)}>
					<VideoCameraIcon />
					<Text
						className={classNames('font-medium', {
							'text-trailer-ice-100': isDarkMode,
							'text-trailer-grey-800': !isDarkMode
						})}>
						Watch Trailer
					</Text>
				</Pressable>
			</View>

			<View className='flex flex-row my-2 flex-wrap' style={{ gap: 12 }}>
				{series?.genres?.map(genre => (
					<Pill key={genre.id} value={genre.name} />
				))}
			</View>

			<View className='flex flex-row justify-between items-center my-3'>
				<View>
					<Text className='text-trailer-grey-800'>Season(s)</Text>
					<Text
						className={classNames('pt-1 text-center', {
							'text-trailer-white-100 font-semibold': isDarkMode,
							'text-black font-medium': !isDarkMode
						})}>
						{series?.number_of_seasons}
					</Text>
				</View>

				<View>
					<Text className='text-trailer-grey-800'>Language</Text>
					<Text
						className={classNames('pt-1', {
							'text-trailer-white-100 font-semibold': isDarkMode,
							'text-black font-medium': !isDarkMode
						})}>
						{series?.spoken_languages[0]?.english_name}
					</Text>
				</View>

				<View>
					<Text className='text-trailer-grey-800'>Episodes</Text>
					<Text
						className={classNames('pt-1 text-center', {
							'text-trailer-white-100 font-semibold': isDarkMode,
							'text-black font-medium': !isDarkMode
						})}>
						{_formatNumber(series?.number_of_episodes)}
					</Text>
				</View>
			</View>

			<View className='mt-4'>
				<Text
					className={classNames('text-lg font-semibold', {
						'text-trailer-grey-800': isDarkMode,
						'text-trailer-black-100': !isDarkMode
					})}>
					Description
				</Text>
				<Text
					className={classNames('pt-2', {
						'text-trailer-white-100': isDarkMode,
						'text-trailer-grey-800': !isDarkMode
					})}>
					{series?.overview}
				</Text>
			</View>

			<View className='mt-4'>
				<Text
					className={classNames('text-lg font-semibold', {
						'text-trailer-grey-800': isDarkMode,
						'text-trailer-black-100': !isDarkMode
					})}>
					Cast
				</Text>
			</View>

			<TrailerModal
				modal={modal}
				closeModal={closeModal}
				videoID={videoID!}
				videoLoading={movieVideosLoading}
			/>
		</View>
	)
}
