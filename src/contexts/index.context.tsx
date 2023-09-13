import React, { PropsWithChildren } from 'react'
import { UtilsProvider } from '@/contexts'

export const Provider = ({ children }: PropsWithChildren) => {
	return <UtilsProvider>{children}</UtilsProvider>
}
