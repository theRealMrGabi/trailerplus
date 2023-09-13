import React from 'react'
import { ActivityIndicator, Modal, View } from 'react-native'
import { XCircleIcon } from 'react-native-heroicons/outline'
import YouTubeIframe from 'react-native-youtube-iframe'
import classNames from 'classnames'

import { useUtilsContext } from '@/contexts'
import { color } from '@/utils'
import { Text } from 'react-native-svg'

interface Props {
	modal: boolean
	closeModal: () => void
	videoID: string
	videoLoading: boolean
}

export const TrailerModal = ({
	modal,
	closeModal,
	videoID,
	videoLoading
}: Props) => {
	const { isDarkMode } = useUtilsContext()

	return (
		<Modal
			animationType='slide'
			visible={modal}
			onRequestClose={() => closeModal()}>
			<View
				className={classNames(
					'flex flex-1 justify-center items-center h-full',
					{
						'bg-trailer-grey-400': isDarkMode,
						'bg-white': !isDarkMode
					}
				)}>
				<View className='flex justify-end'>
					<XCircleIcon
						color={color['grey-400']}
						width={35}
						height={35}
						onPress={closeModal}
					/>
				</View>

				{videoID && (
					<View className='mt-8'>
						{videoLoading ? (
							<View>
								<ActivityIndicator size='large' color={color['grey-400']} />
								<Text>Loading video....</Text>
							</View>
						) : (
							<YouTubeIframe videoId={videoID} height={400} width={400} />
						)}
					</View>
				)}
			</View>
		</Modal>
	)
}
