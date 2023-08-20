import React, {
	createContext,
	useContext,
	useState,
	useMemo,
	Dispatch,
	SetStateAction,
	PropsWithChildren
} from 'react'
import { useColorScheme } from 'react-native'

interface Props {
	isDarkMode: boolean
	setIsDarkMode: Dispatch<SetStateAction<boolean>>
}

export const UtilsContext = createContext<Props | undefined>(undefined)

export const UtilsProvider = ({ children }: PropsWithChildren) => {
	const { Provider } = UtilsContext
	const defaultAppearance = useColorScheme() === 'dark'

	const [isDarkMode, setIsDarkMode] = useState(defaultAppearance)

	const value = useMemo(
		() => ({ isDarkMode, setIsDarkMode }),
		[isDarkMode, setIsDarkMode]
	)

	return <Provider value={value}>{children}</Provider>
}

export const useUtilsContext = () => {
	const context = useContext(UtilsContext)
	if (!context) {
		throw new Error('Context must be provided')
	}
	return context
}
