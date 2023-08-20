/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'

import { AppNavigation } from '@/navigation'
import { Provider } from '@/contexts'

const App = () => {
	return (
		<Provider>
			<AppNavigation />
		</Provider>
	)
}

export default App
