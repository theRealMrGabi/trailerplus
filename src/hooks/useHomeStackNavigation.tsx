import { useNavigation, useRoute, RouteProp } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { IHomeStack } from '@/interface'

export const useHomeStackNavigation = () => {
	const navigation = useNavigation<NativeStackNavigationProp<IHomeStack>>()

	const route = useRoute<RouteProp<IHomeStack>>()

	return { navigation, route }
}
