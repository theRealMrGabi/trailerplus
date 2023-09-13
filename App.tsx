/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AppNavigation } from '@/navigation'
import { Provider } from '@/contexts'

const App = () => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: false,
						refetchOnWindowFocus: false
					}
				}
			})
	)

	return (
		<QueryClientProvider client={queryClient}>
			<Provider>
				<AppNavigation />
			</Provider>
		</QueryClientProvider>
	)
}

export default App
